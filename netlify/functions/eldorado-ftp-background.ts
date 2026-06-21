/**
 * Netlify background function: eldorado-ftp-background.ts
 *
 * Eldorado Trading Co. uses FTP as their Commercial Integration Partner
 * Program (CIPP) transport — there is no REST API.
 *
 * Routes (called via /.netlify/functions/eldorado-ftp-background):
 *
 *   POST { action: "place-order",    order: ElDoradoOrder }
 *     → Serialises the order to CIPP CSV and uploads it to /Inbound.
 *
 *   POST { action: "poll-tracking" }
 *     → Lists /Outbound, downloads every file, returns parsed records,
 *       then removes the files so they are not re-processed.
 *
 * This is a Netlify *background* function (filename suffix -background)
 * so it has up to 15 minutes to complete — important for FTP round-trips.
 *
 * Environment variables required (set in Netlify UI, never committed):
 *   ELDORADO_FTP_HOST, ELDORADO_FTP_USER, ELDORADO_FTP_PASS,
 *   ELDORADO_ORDER_DIR, ELDORADO_TRACKING_DIR
 */

import * as ftp from 'basic-ftp';
import { Readable } from 'node:stream';
import type { Handler } from '@netlify/functions';

// ── Config ──────────────────────────────────────────────────────────────────

const FTP_HOST = process.env.ELDORADO_FTP_HOST ?? '';
const FTP_USER = process.env.ELDORADO_FTP_USER ?? '';
const FTP_PASS = process.env.ELDORADO_FTP_PASS ?? '';
const ORDER_DIR = process.env.ELDORADO_ORDER_DIR ?? '/Inbound';
const TRACKING_DIR = process.env.ELDORADO_TRACKING_DIR ?? '/Outbound';

// ── Types ───────────────────────────────────────────────────────────────────

export interface ElDoradoOrderLine {
  sku: string;
  quantity: number;
}

export interface ElDoradoOrder {
  /** Your internal order / PO reference */
  poNumber: string;
  /** Shipping address lines */
  shipName: string;
  shipAddress1: string;
  shipAddress2?: string;
  shipCity: string;
  shipState: string;
  shipZip: string;
  /** Eldorado shipping method code (e.g. "FEDEX_GROUND") */
  shipMethod: string;
  lines: ElDoradoOrderLine[];
}

export interface TrackingRecord {
  poNumber: string;
  invoiceNumber: string;
  trackingNumber: string;
  carrier: string;
  shipDate: string;
  rawLine: string;
}

type RequestBody =
  | { action: 'place-order'; order: ElDoradoOrder }
  | { action: 'poll-tracking' };

// ── CIPP CSV helpers ─────────────────────────────────────────────────────────

/**
 * Serialises an order into Eldorado's CIPP flat-file format.
 *
 * Strict column order per CIPP spec:
 *   1  PONumber
 *   2  SKU
 *   3  Quantity
 *   4  ShipName
 *   5  ShipAddress1
 *   6  ShipAddress2
 *   7  ShipCity
 *   8  ShipState
 *   9  ShipZip
 *   10 ShipMethod  (e.g. "UG" = UPS Ground)
 *
 * One row per line item — header row is included.
 */
function buildOrderCsv(order: ElDoradoOrder): string {
  const header = [
    'PONumber',
    'SKU',
    'Quantity',
    'ShipName',
    'ShipAddress1',
    'ShipAddress2',
    'ShipCity',
    'ShipState',
    'ShipZip',
    'ShipMethod',
  ].join(',');

  const lines = order.lines.map((line) =>
    [
      order.poNumber,
      normaliseSku(line.sku, 'eldorado'),
      line.quantity,
      quote(order.shipName),
      quote(order.shipAddress1),
      quote(order.shipAddress2 ?? ''),
      quote(order.shipCity),
      order.shipState,
      order.shipZip,
      order.shipMethod,
    ].join(','),
  );

  return [header, ...lines].join('\r\n') + '\r\n';
}

function quote(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

// ── SKU normalisation ────────────────────────────────────────────────────────

/**
 * Maps internal / BigCommerce SKUs to the supplier-specific SKU required by
 * each distributor's system.  Add entries here whenever a product is onboarded.
 *
 * Format: { [internalSku]: { eldorado?: string; wt?: string } }
 *
 * Known gotchas:
 *  - Eldorado may require a different format than the BigCommerce catalogue SKU.
 *  - WT generally accepts the catalogue SKU as-is, but confirm per product.
 *  - Verify leading-zero and size-code requirements with each distributor.
 */
const SKU_MAP: Record<string, { eldorado?: string; wt?: string }> = {
  // Keys are confirmed BigCommerce catalogue SKUs (price list 2026-06-19).
  // Two items still need Eldorado brand-prefix verification — see TODOs below.

  // ── Cleanse & Fluidity ────────────────────────────────────────────────────
  'CS-EN-BULB':  { eldorado: 'CS-EN-BULB',  wt: 'CS-EN-BULB'  },
  '6755-12':     { eldorado: '6755-12',      wt: '6755-12'      }, // Swiss Navy Silicone 32oz — confirmed
  'BBGOLD':      { eldorado: 'BBGOLD',       wt: 'BBGOLD'       }, // Boy Butter Gold 16oz — confirmed
  'WT-27030':    { eldorado: 'WT-27030',     wt: 'WT-27030'     }, // Wet Platinum Wipes 10ct — confirmed
  'QP-SIL-01':   { eldorado: 'QP-SIL-01',   wt: 'QP-SIL-01'   }, // Sovereign Starter 1oz

  // ── Structural Rigor ──────────────────────────────────────────────────────
  'SP-GL-MED':   { eldorado: 'SP-GL-MED',   wt: 'SP-GL-MED'   },
  'SP-GL-LRG':   { eldorado: 'SP-GL-LRG',   wt: 'SP-GL-LRG'   },
  'SS36001':     { eldorado: 'SS36001',      wt: 'SS36001'      },

  // ── Sensory Gating ────────────────────────────────────────────────────────
  'FT-BLACK-OPS': { eldorado: 'FT-BLACK-OPS', wt: 'FT-BLACK-OPS' },
  // FF-HOOD-VAR is shared by mouth + spandex hoods in BC; both map to the same distributor SKU
  'FF-HOOD-VAR':  { eldorado: 'FF-HOOD-VAR',  wt: 'FF-HOOD-VAR'  },
  'SH-PUPPY-01':  { eldorado: 'SH-PUPPY-01',  wt: 'SH-PUPPY-01'  },

  // ── Impact, Edge & Everyday Friction ─────────────────────────────────────
  'SS77016':     { eldorado: 'SS77016',     wt: 'SS77016'     },
  'SP-DONUT-W':  { eldorado: 'SP-DONUT-W',  wt: 'SP-DONUT-W'  },
  'EF-DIR-08':   { eldorado: 'EF-DIR-08',   wt: 'EF-DIR-08'   },
  'OW-BL-CLAMP': { eldorado: 'OW-BL-CLAMP', wt: 'OW-BL-CLAMP' },

  'WR-PAP-3PK':  { eldorado: 'WR-PAP-3PK', wt: 'WR-PAP-3PK'  },

  // ── E-Stim ────────────────────────────────────────────────────────────────
  'ES-2B-IND':   { eldorado: 'ES-2B-IND',   wt: 'ES-2B-IND'   },
  'ES-2B-REL':   { eldorado: 'ES-2B-REL',   wt: 'ES-2B-REL'   },
};

type Supplier = 'eldorado' | 'wt';

/**
 * Returns the supplier-specific SKU for a given internal SKU.
 * Falls through to the internal SKU if no mapping is defined, and logs a
 * warning so unverified SKUs are visible in Netlify function logs.
 */
function normaliseSku(internalSku: string, supplier: Supplier): string {
  const mapped = SKU_MAP[internalSku]?.[supplier];
  if (!mapped) {
    console.warn(
      `[eldorado-ftp] No ${supplier} SKU mapping for "${internalSku}" — using as-is. Verify with distributor.`,
    );
    return internalSku;
  }
  return mapped;
}

/**
 * Parses Eldorado's CIPP tracking/invoice flat files.
 * Adjust field indices to match your actual CIPP spec.
 */
function parseTrackingCsv(csv: string): TrackingRecord[] {
  const rows = csv.split(/\r?\n/).filter(Boolean);
  // Skip header row if present
  const dataRows = rows[0]?.startsWith('PONumber') ? rows.slice(1) : rows;
  return dataRows.map((rawLine) => {
    const cols = rawLine.split(',');
    return {
      poNumber: cols[0]?.trim() ?? '',
      invoiceNumber: cols[1]?.trim() ?? '',
      trackingNumber: cols[2]?.trim() ?? '',
      carrier: cols[3]?.trim() ?? '',
      shipDate: cols[4]?.trim() ?? '',
      rawLine,
    };
  });
}

// ── FTP helpers ──────────────────────────────────────────────────────────────

async function withFtp<T>(fn: (client: ftp.Client) => Promise<T>): Promise<T> {
  const client = new ftp.Client();
  // Eldorado CIPP uses plain FTP (not FTPS); set secure: false.
  // If they upgrade to FTPS, set secure: true here.
  try {
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      secure: false,
    });
    return await fn(client);
  } finally {
    client.close();
  }
}

async function uploadString(
  client: ftp.Client,
  content: string,
  remotePath: string,
): Promise<void> {
  const buf = Buffer.from(content, 'utf8');
  const stream = Readable.from(buf);
  await client.uploadFrom(stream, remotePath);
}

async function downloadToString(
  client: ftp.Client,
  remotePath: string,
): Promise<string> {
  const chunks: Buffer[] = [];
  const writable = new (await import('node:stream')).Writable({
    write(chunk: Buffer, _enc, cb) {
      chunks.push(chunk);
      cb();
    },
  });
  await client.downloadTo(writable, remotePath);
  return Buffer.concat(chunks).toString('utf8');
}

// ── CORS / validation helpers ────────────────────────────────────────────────

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.URL ?? '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function missingConfig(): string | null {
  const required: Record<string, string> = {
    ELDORADO_FTP_HOST: FTP_HOST,
    ELDORADO_FTP_USER: FTP_USER,
    ELDORADO_FTP_PASS: FTP_PASS,
  };
  const missing = Object.entries(required)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  return missing.length ? missing.join(', ') : null;
}

// ── Handler ──────────────────────────────────────────────────────────────────

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed.' }),
    };
  }

  const missing = missingConfig();
  if (missing) {
    console.error(`[eldorado-ftp] Missing env vars: ${missing}`);
    return {
      statusCode: 503,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Supplier FTP integration is not configured.' }),
    };
  }

  let body: RequestBody;
  try {
    body = JSON.parse(event.body ?? '{}') as RequestBody;
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Invalid JSON body.' }),
    };
  }

  try {
    // ── place-order ──────────────────────────────────────────────────────────
    if (body.action === 'place-order') {
      const { order } = body;
      if (!order?.poNumber || !order.lines?.length) {
        return {
          statusCode: 400,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'order.poNumber and order.lines are required.' }),
        };
      }

      const csv = buildOrderCsv(order);
      // Eldorado filename regex: QUEERP_ORDER_{PO}_{TIMESTAMP}.csv
      // Replace "QUEERP" with your account short-code if Eldorado issued a different one.
      const filename = `QUEERP_ORDER_${order.poNumber}_${Date.now()}.csv`;
      const remotePath = `${ORDER_DIR}/${filename}`;

      await withFtp((client) => uploadString(client, csv, remotePath));

      console.info(`[eldorado-ftp] Uploaded order ${order.poNumber} → ${remotePath}`);
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ uploaded: remotePath }),
      };
    }

    // ── poll-tracking ────────────────────────────────────────────────────────
    if (body.action === 'poll-tracking') {
      const allRecords: TrackingRecord[] = [];

      await withFtp(async (client) => {
        const fileList = await client.list(TRACKING_DIR);
        const csvFiles = fileList.filter(
          (f) => f.type === ftp.FileType.File && f.name.endsWith('.csv'),
        );

        for (const file of csvFiles) {
          const remotePath = `${TRACKING_DIR}/${file.name}`;
          try {
            const content = await downloadToString(client, remotePath);
            const records = parseTrackingCsv(content);
            allRecords.push(...records);
            // Remove after successful download so it isn't re-processed
            await client.remove(remotePath);
            console.info(`[eldorado-ftp] Processed and removed ${remotePath}`);
          } catch (fileErr) {
            console.error(`[eldorado-ftp] Failed to process ${remotePath}:`, fileErr);
            // Continue to next file rather than aborting the whole poll
          }
        }
      });

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ tracking: allRecords, count: allRecords.length }),
      };
    }

    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Unknown action. Use "place-order" or "poll-tracking".' }),
    };
  } catch (err) {
    console.error('[eldorado-ftp] Unexpected error:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
};
