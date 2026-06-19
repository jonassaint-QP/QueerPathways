/**
 * Netlify function: bigcommerce-webhook.ts
 *
 * Receives order lifecycle webhooks from BigCommerce, fetches full order
 * details, maps them to ElDoradoOrder shape, then fires the
 * eldorado-ftp-background function to handle the CIPP FTP upload.
 *
 * Only status 11 (Awaiting Fulfillment) triggers fulfilment.
 *
 * Security: BigCommerce does not send HMAC signatures on webhook payloads.
 * We verify a shared secret token passed as a query-string parameter when
 * registering the webhook URL:
 *   https://your-site.netlify.app/.netlify/functions/bigcommerce-webhook?secret=TOKEN
 * Set BC_WEBHOOK_SECRET in Netlify env to the same token value.
 *
 * Required environment variables (Netlify UI — never committed):
 *   BC_STORE_HASH, BC_ACCESS_TOKEN, BC_WEBHOOK_SECRET, URL
 */

import type { Handler } from '@netlify/functions';
import type { ElDoradoOrder, ElDoradoOrderLine } from './eldorado-ftp-background';

// ── Config ───────────────────────────────────────────────────────────────────

const BC_STORE_HASH    = process.env.BC_STORE_HASH    ?? '';
const BC_ACCESS_TOKEN  = process.env.BC_ACCESS_TOKEN  ?? '';
const BC_WEBHOOK_SECRET = process.env.BC_WEBHOOK_SECRET ?? '';
const SELF_URL         = process.env.URL              ?? '';

const BC_API = `https://api.bigcommerce.com/stores/${BC_STORE_HASH}`;
const AWAITING_FULFILLMENT = 11;

// ── BigCommerce types (v2 API) ────────────────────────────────────────────────

interface BcWebhookPayload {
  data?: {
    id?: number;
    status?: { new_status_id?: number };
  };
}

interface BcOrder {
  id: number;
  customer_id: number;
  shipping_cost_inc_tax: string;
}

interface BcShippingAddress {
  first_name: string;
  last_name: string;
  company: string;
  street_1: string;
  street_2: string;
  city: string;
  state: string;
  zip: string;
  shipping_method: string;
}

interface BcProduct {
  sku: string;
  quantity: number;
}

// ── Bundle expansion ─────────────────────────────────────────────────────────
// BigCommerce sells bundles as a single SKU; Eldorado must receive the
// individual component SKUs so it can pick and ship each item.
//
// Add one entry per bundle SKU. Each component is { sku, quantity } where
// quantity is the number of that component per *one* unit of the bundle.
// The expansion step multiplies by the ordered bundle quantity automatically.
//
// Example: ordering 2× SM-KIT-01 expands to:
//   2× 6755-12, 2× BBGOLD, 2× CS-EN-BULB, 4× WT-27030
const BUNDLE_MAP: Record<string, Array<{ sku: string; quantity: number }>> = {
  // ── Sovereign Maintenance Kit — BC SKU SM-KIT-01 ───────────────────────
  // TODO: confirm final component quantities with your product team.
  'SM-KIT-01': [
    { sku: '6755-12',    quantity: 1 }, // Swiss Navy Silicone 32oz (confirmed SKU)
    { sku: 'BBGOLD',     quantity: 1 }, // Boy Butter Gold 16oz (confirmed SKU)
    { sku: 'CS-EN-BULB', quantity: 1 }, // Cleanstream Enema Bulb
    { sku: 'WT-27030',   quantity: 2 }, // Wet Platinum Toy & Body Wipes 10ct ×2 (confirmed SKU)
  ],
};

/**
 * Expands a single order line into fulfilable component lines.
 * If the SKU is not a bundle, returns the original line unchanged.
 * Quantities of each component are scaled by the ordered bundle quantity.
 */
function expandBundles(lines: ElDoradoOrderLine[]): ElDoradoOrderLine[] {
  const expanded: ElDoradoOrderLine[] = [];
  for (const line of lines) {
    const components = BUNDLE_MAP[line.sku];
    if (components) {
      console.log(
        `[bc-webhook] Expanding bundle ${line.sku} ×${line.quantity} → ${components.length} components`,
      );
      for (const component of components) {
        expanded.push({ sku: component.sku, quantity: component.quantity * line.quantity });
      }
    } else {
      expanded.push(line);
    }
  }
  return expanded;
}

// ── Shipping method normalisation ─────────────────────────────────────────────
// Maps BigCommerce shipping method display names → Eldorado CIPP ship codes.
// Add entries to match whatever methods are enabled in your BC store.
const SHIP_METHOD_MAP: Record<string, string> = {
  'ups ground':     'UG',
  'ups 3-day':      'U3',
  'ups 2nd day air':'U2',
  'ups next day air':'U1',
  'fedex ground':   'FG',
  'fedex 2 day':    'F2',
  'fedex overnight':'FO',
  'usps priority':  'PP',
  'free shipping':  'UG', // default to UPS Ground for free-shipping orders
};

function normaliseShipMethod(bcMethod: string): string {
  const mapped = SHIP_METHOD_MAP[bcMethod.toLowerCase().trim()];
  if (!mapped) {
    console.warn(
      `[bc-webhook] Unknown shipping method "${bcMethod}" — defaulting to UG. Add it to SHIP_METHOD_MAP.`,
    );
    return 'UG';
  }
  return mapped;
}

// ── BigCommerce API helpers ───────────────────────────────────────────────────

function bcHeaders(): Record<string, string> {
  return {
    'X-Auth-Token': BC_ACCESS_TOKEN,
    Accept: 'application/json',
  };
}

async function bcGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BC_API}${path}`, { headers: bcHeaders() });
  if (!res.ok) {
    throw new Error(`BigCommerce ${path} → HTTP ${res.status}: ${await res.text()}`);
  }
  return res.json() as Promise<T>;
}

// ── Order mapping ─────────────────────────────────────────────────────────────

async function fetchAndMapOrder(orderId: number): Promise<ElDoradoOrder> {
  // Three parallel calls — BC v2 API separates these resources
  const [_order, [shipAddr], products] = await Promise.all([
    bcGet<BcOrder>(`/v2/orders/${orderId}`),
    bcGet<BcShippingAddress[]>(`/v2/orders/${orderId}/shipping_addresses`),
    bcGet<BcProduct[]>(`/v2/orders/${orderId}/products`),
  ]);

  if (!shipAddr) {
    throw new Error(`Order ${orderId} has no shipping address.`);
  }

  const rawLines: ElDoradoOrderLine[] = products
    .filter((p) => p.sku) // skip items without a SKU (e.g. gift wrapping)
    .map((p) => ({ sku: p.sku, quantity: p.quantity }));

  // Expand any bundle SKUs into their individual components before fulfilment
  const lines = expandBundles(rawLines);

  if (!lines.length) {
    throw new Error(`Order ${orderId} has no fulfilable line items.`);
  }

  return {
    poNumber:     String(orderId),
    shipName:     `${shipAddr.first_name} ${shipAddr.last_name}`.trim(),
    shipAddress1: shipAddr.street_1,
    shipAddress2: shipAddr.street_2 || undefined,
    shipCity:     shipAddr.city,
    shipState:    shipAddr.state,
    shipZip:      shipAddr.zip,
    shipMethod:   normaliseShipMethod(shipAddr.shipping_method),
    lines,
  };
}

// ── Handler ───────────────────────────────────────────────────────────────────

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Shared-secret verification — token must match what was registered in BC
  const providedSecret = event.queryStringParameters?.['secret'] ?? '';
  if (!BC_WEBHOOK_SECRET || providedSecret !== BC_WEBHOOK_SECRET) {
    console.warn('[bc-webhook] Rejected request — invalid or missing secret.');
    return { statusCode: 401, body: 'Unauthorized' };
  }

  let payload: BcWebhookPayload;
  try {
    payload = JSON.parse(event.body ?? '{}') as BcWebhookPayload;
  } catch {
    return { statusCode: 400, body: 'Invalid JSON body.' };
  }

  const orderId   = payload.data?.id;
  const newStatus = payload.data?.status?.new_status_id;

  console.log(`[bc-webhook] Order ${orderId} status → ${newStatus}`);

  if (newStatus !== AWAITING_FULFILLMENT) {
    return { statusCode: 200, body: 'Ignored — not Awaiting Fulfillment.' };
  }

  if (!orderId) {
    return { statusCode: 400, body: 'Missing order ID in payload.' };
  }

  if (!BC_STORE_HASH || !BC_ACCESS_TOKEN) {
    console.error('[bc-webhook] BC_STORE_HASH or BC_ACCESS_TOKEN not set.');
    return { statusCode: 503, body: 'BigCommerce integration not configured.' };
  }

  let order: ElDoradoOrder;
  try {
    order = await fetchAndMapOrder(orderId);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[bc-webhook] Failed to fetch/map order:', message);
    return { statusCode: 500, body: 'Failed to retrieve order details.' };
  }

  // Fire-and-forget: respond to BigCommerce immediately (it expects < 5 s),
  // then let eldorado-ftp-background handle the slow FTP work asynchronously.
  const backgroundUrl = `${SELF_URL}/.netlify/functions/eldorado-ftp-background`;
  fetch(backgroundUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'place-order', order }),
  }).catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[bc-webhook] Failed to trigger background function:', message);
  });

  console.log(`[bc-webhook] Order ${orderId} handed off to eldorado-ftp-background.`);
  return { statusCode: 200, body: 'Order processing initiated.' };
};
