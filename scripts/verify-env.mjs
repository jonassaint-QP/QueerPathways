// Deployment environment check.
//
// 2026-09-16 — two corrections in this file.
//
// 1. The Authorize.Net credential gate is removed. It failed the deploy build
//    when AUTHORIZENET_API_LOGIN_ID / AUTHORIZENET_TRANSACTION_KEY were unset,
//    and named /.netlify/functions/create-checkout as the endpoint that would
//    break. That endpoint has been deleted: Authorize.Net sits in neither lane
//    of the financial architecture (clinical is CardPointe/CardConnect, retail
//    is NMI via KURV/PaymentCloud) and the function also carried hardcoded CAD
//    conversion, which is Ontario billing logic. Gating the build on
//    credentials for a removed processor would fail every deploy.
//
// 2. The production intake fallback pointed at Carepatron, a deprecated EMR,
//    so an unset VITE_SECURE_INTAKE_URL would silently send prospective clients
//    to the wrong platform. It now falls back to the TherapyNotes portal, which
//    is the platform the practice actually runs. Keep in sync with
//    PRACTICE_CONFIG.portals.therapyNotes in src/config/practice.config.ts.

const isCiLike = process.env.NETLIFY === "true" || process.env.CI === "true";

const janeUrl = process.env.VITE_JANE_APP_INTAKE_URL;
const secureUrl = process.env.VITE_SECURE_INTAKE_URL;
const intakeUrl = secureUrl || janeUrl;
const placeholder = "https://jane.app";
const defaultTherapyNotesUrl =
  "https://www.therapyportal.com/p/queercharts/";
const productionUrl = intakeUrl || defaultTherapyNotesUrl;

if (!isCiLike) {
  if (!intakeUrl || intakeUrl.trim() === "" || intakeUrl === placeholder) {
    console.warn(
      "[verify-env] Warning: secure intake URL is not configured. " +
        "Local build will continue and production will use the built-in TherapyNotes portal fallback unless you set a custom portal URL."
    );
  }
  process.exit(0);
}

if (!productionUrl || productionUrl.trim() === "" || productionUrl === placeholder) {
  console.error(
    "[verify-env] Missing required intake URL for deployment. " +
      "Set VITE_SECURE_INTAKE_URL (preferred) or VITE_JANE_APP_INTAKE_URL in deployment environment variables."
  );
  process.exit(1);
}

console.log("[verify-env] Deployment env check passed.");
