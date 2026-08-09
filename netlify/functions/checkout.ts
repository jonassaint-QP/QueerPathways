import type { Handler } from '@netlify/functions';

const allowedOrigins = new Set([
  'https://queerpathways.com',
  'https://www.queerpathways.com',
  'https://queerpathways.store',
]);

const prohibitedHealthKeys = new Set([
  'diagnosis',
  'diagnoses',
  'medicalnote',
  'medicalnotes',
  'patientid',
  'phr',
  'prescription',
  'prescriptions',
  'treatmentplan',
]);

function containsProhibitedHealthData(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(containsProhibitedHealthData);
  if (!value || typeof value !== 'object') return false;

  return Object.entries(value).some(([key, nestedValue]) => {
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    return prohibitedHealthKeys.has(normalizedKey) || containsProhibitedHealthData(nestedValue);
  });
}

export const handler: Handler = async (event) => {
  const origin = event.headers.origin || '';

  if (!allowedOrigins.has(origin)) {
    return {
      statusCode: 403,
      headers: { 'Content-Type': 'application/json', Vary: 'Origin' },
      body: JSON.stringify({ error: 'Boundary Enforcement: Domain unauthorized.' }),
    };
  }

  const corsHeaders = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Origin': origin,
    'Content-Type': 'application/json',
    Vary: 'Origin',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...corsHeaders, Allow: 'POST, OPTIONS' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    if (containsProhibitedHealthData(payload)) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({
          error: 'QP-POL-002 Violation: PHI payloads strictly prohibited in retail gateway.',
        }),
      };
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        status: 'SUCCESS',
        message: 'Retail transaction initialized safely outside clinical boundaries.',
        redirectUrl: 'https://queerpathways.com/order-confirmation',
      }),
    };
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Invalid JSON payload.' }),
    };
  }
};
