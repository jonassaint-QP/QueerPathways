/**
 * Netlify function: williams-trading.ts
 *
 * Routes:
 *   POST /api/williams-trading  { action: "stock-check", skus: string[] }
 *   POST /api/williams-trading  { action: "place-order",  items: OrderItem[] }
 *
 * All credentials are read from environment variables — never from the client.
 */

import type { Handler } from '@netlify/functions';

const BASE_URL = (process.env.WT_API_BASE_URL ?? '').replace(/\/$/, '');
const CUSTOMER_ID = process.env.WT_CUSTOMER_ID ?? '';
const USERNAME = process.env.WT_USERNAME ?? '';
const PASSWORD = process.env.WT_PASSWORD ?? '';
const API_KEY = process.env.WT_API_KEY ?? '';

interface OrderItem {
  sku: string;
  quantity: number;
}

type RequestBody =
  | { action: 'stock-check'; skus: string[] }
  | { action: 'place-order'; items: OrderItem[] };

/** Build Basic-auth + API-key headers required by Williams Trading. */
function wtHeaders(): Record<string, string> {
  const token = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');
  return {
    Authorization: `Basic ${token}`,
    'X-Api-Key': API_KEY,
    'X-Customer-Id': CUSTOMER_ID,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}

function missingConfig(): string | null {
  const required: Record<string, string> = {
    WT_API_BASE_URL: BASE_URL,
    WT_CUSTOMER_ID: CUSTOMER_ID,
    WT_USERNAME: USERNAME,
    WT_PASSWORD: PASSWORD,
    WT_API_KEY: API_KEY,
  };
  const missing = Object.entries(required)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  return missing.length ? missing.join(', ') : null;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.URL ?? '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

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
    console.error(`[williams-trading] Missing env vars: ${missing}`);
    return {
      statusCode: 503,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Supplier integration is not configured.' }),
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
    if (body.action === 'stock-check') {
      // Fetch inventory levels for the requested SKUs.
      const results = await Promise.all(
        body.skus.map(async (sku) => {
          const res = await fetch(`${BASE_URL}/inventory/${encodeURIComponent(sku)}`, {
            method: 'GET',
            headers: wtHeaders(),
          });
          if (!res.ok) {
            return { sku, available: false, quantity: 0, error: `HTTP ${res.status}` };
          }
          const data = (await res.json()) as { quantity?: number };
          return { sku, available: (data.quantity ?? 0) > 0, quantity: data.quantity ?? 0 };
        }),
      );
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ stock: results }),
      };
    }

    if (body.action === 'place-order') {
      const res = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: wtHeaders(),
        body: JSON.stringify({
          customer_id: CUSTOMER_ID,
          items: body.items,
        }),
      });

      const data = (await res.json()) as Record<string, unknown>;

      if (!res.ok) {
        console.error('[williams-trading] Order placement failed:', data);
        return {
          statusCode: res.status,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Order placement failed.', detail: data }),
        };
      }

      return {
        statusCode: 201,
        headers: corsHeaders,
        body: JSON.stringify({ order: data }),
      };
    }

    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Unknown action.' }),
    };
  } catch (err) {
    console.error('[williams-trading] Unexpected error:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
};
