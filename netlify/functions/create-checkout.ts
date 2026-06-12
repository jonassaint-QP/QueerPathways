import Stripe from 'stripe';
import type { Handler } from '@netlify/functions';

interface CartItem {
  id: string;
  name: string;
  price: number;   // CAD cents
  quantity: number;
}

interface RequestBody {
  items: CartItem[];
  successUrl: string;
  cancelUrl: string;
}

const handler: Handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.URL ?? '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

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

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('[create-checkout] STRIPE_SECRET_KEY is not set.');
    return {
      statusCode: 503,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Payment service is not configured. Please contact support.' }),
    };
  }

  let body: RequestBody;
  try {
    body = JSON.parse(event.body ?? '{}') as RequestBody;
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Invalid request body.' }),
    };
  }

  const { items, successUrl, cancelUrl } = body;

  if (!Array.isArray(items) || items.length === 0) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Cart is empty.' }),
    };
  }

  // Validate each item to prevent injection of arbitrary prices
  for (const item of items) {
    if (
      typeof item.name !== 'string' ||
      typeof item.price !== 'number' ||
      item.price <= 0 ||
      typeof item.quantity !== 'number' ||
      item.quantity < 1 ||
      item.quantity > 99
    ) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid item data.' }),
      };
    }
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2025-02-24.acacia' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'cad',
          product_data: {
            name: item.name,
            metadata: { productId: item.id },
          },
          unit_amount: item.price, // already in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['CA', 'US', 'GB', 'AU'],
      },
      tax_id_collection: { enabled: true },
      automatic_tax: { enabled: false }, // Set to true when Stripe Tax is configured
      metadata: {
        source: 'queer-pathways-apothecary',
      },
      payment_intent_data: {
        description: "The Centaur's Apothecary — Queer Pathways",
        metadata: { source: 'queer-pathways-apothecary' },
      },
    });

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err: unknown) {
    const message = err instanceof Stripe.errors.StripeError
      ? err.message
      : 'Checkout session could not be created.';
    console.error('[create-checkout] Stripe error:', message);
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({ error: message }),
    };
  }
};

export { handler };
