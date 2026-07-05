import type { Handler } from '@netlify/functions';

/** Keep in sync with CartContext.USD_TO_CAD */
const USD_TO_CAD = 1.38;

// Live endpoints — swap to apitest / test URLs for sandbox testing
const AUTHNET_API_URL  = 'https://api.authorize.net/xml/v1/request.api';
const HOSTED_PAY_URL   = 'https://accept.authorize.net/payment/payment';

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
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed.' }) };
  }

  const apiLoginId     = process.env.AUTHORIZENET_API_LOGIN_ID;
  const transactionKey = process.env.AUTHORIZENET_TRANSACTION_KEY;
  if (!apiLoginId || !transactionKey) {
    console.error('[create-checkout] Authorize.Net credentials not set.');
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
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid request body.' }) };
  }

  const { items, currency, successUrl, cancelUrl } = body;

  if (!Array.isArray(items) || items.length === 0) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Cart is empty.' }) };
  }

  for (const item of items) {
    if (
      typeof item.name !== 'string' ||
      typeof item.priceUsd !== 'number' ||
      item.priceUsd <= 0 ||
      typeof item.quantity !== 'number' ||
      item.quantity < 1 ||
      item.quantity > 99
    ) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid item data.' }) };
    }
  }

  // Convert USD cents → target currency dollars (Authorize.Net uses decimal)
  const toDecimal = (usdCents: number): number => {
    const usd = usdCents / 100;
    return currency === 'cad' ? Math.round(usd * USD_TO_CAD * 100) / 100 : usd;
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + toDecimal(item.priceUsd) * item.quantity,
    0,
  );

  // Authorize.Net: max 30 line items; itemId/name max 31 chars
  const lineItems = items.slice(0, 30).map((item) => ({
    itemId:      item.id.substring(0, 31),
    name:        item.name.substring(0, 31),
    description: item.name.substring(0, 255),
    quantity:    String(item.quantity),
    unitPrice:   toDecimal(item.priceUsd).toFixed(2),
  }));

  const payload = {
    getHostedPaymentPageRequest: {
      merchantAuthentication: { name: apiLoginId, transactionKey },
      transactionRequest: {
        transactionType: 'authCaptureTransaction',
        amount: totalAmount.toFixed(2),
        currencyCode: currency === 'cad' ? 'CAD' : 'USD',
        lineItems: { lineItem: lineItems },
        order: { description: "Queer Pathways — The Sanctuary" },
      },
      hostedPaymentSettings: {
        setting: [
          {
            settingName: 'hostedPaymentReturnOptions',
            settingValue: JSON.stringify({
              showReceipt:   false,
              url:           successUrl,
              urlText:       'Return to Queer Pathways',
              cancelUrl,
              cancelUrlText: 'Back to Cart',
            }),
          },
          {
            settingName:  'hostedPaymentButtonOptions',
            settingValue: JSON.stringify({ text: 'Complete Order' }),
          },
          {
            settingName:  'hostedPaymentPaymentOptions',
            settingValue: JSON.stringify({ cardCodeRequired: true, showCreditCard: true, showBankAccount: false }),
          },
          {
            settingName:  'hostedPaymentSecurityOptions',
            settingValue: JSON.stringify({ captcha: false }),
          },
          {
            settingName:  'hostedPaymentShippingAddressOptions',
            settingValue: JSON.stringify({ show: true, required: false }),
          },
          {
            settingName:  'hostedPaymentBillingAddressOptions',
            settingValue: JSON.stringify({ show: true, required: true }),
          },
          {
            settingName:  'hostedPaymentOrderOptions',
            settingValue: JSON.stringify({ show: true, merchantName: 'Queer Pathways' }),
          },
          {
            settingName:  'hostedPaymentStyleOptions',
            settingValue: JSON.stringify({ bgColor: '#001807' }),
          },
        ],
      },
    },
  };

  try {
    const apiRes = await fetch(AUTHNET_API_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body:    JSON.stringify(payload),
    });

    if (!apiRes.ok) {
      throw new Error(`Authorize.Net HTTP ${apiRes.status}`);
    }

    // Strip UTF-8 BOM that Authorize.Net occasionally prepends
    const raw     = await apiRes.text();
    const cleaned = raw.replace(/^\uFEFF/, '');
    const data    = JSON.parse(cleaned) as {
      token?: string;
      messages?: { resultCode: string; message?: Array<{ code: string; text: string }> };
    };

    if (data?.messages?.resultCode !== 'Ok') {
      const msg = data?.messages?.message?.[0]?.text ?? 'Payment initiation failed.';
      console.error('[create-checkout] Authorize.Net error:', data?.messages);
      return { statusCode: 502, headers: corsHeaders, body: JSON.stringify({ error: msg }) };
    }

    const token = data.token;
    if (!token) throw new Error('No token in Authorize.Net response.');

    const url = `${HOSTED_PAY_URL}?token=${encodeURIComponent(token)}`;

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[create-checkout] Unexpected error:', message);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Checkout could not be initiated. Please try again.' }),
    };
  }
};

export { handler };
