const isCiLike = process.env.NETLIFY === "true" || process.env.CI === "true";
const janeUrl = process.env.VITE_JANE_APP_INTAKE_URL;
const secureUrl = process.env.VITE_SECURE_INTAKE_URL;
const intakeUrl = secureUrl || janeUrl;
const placeholder = "https://jane.app";
const defaultCarepatronUrl =
  "https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b";
const productionUrl = intakeUrl || defaultCarepatronUrl;

if (!isCiLike) {
  if (!intakeUrl || intakeUrl.trim() === "" || intakeUrl === placeholder) {
    console.warn(
      "[verify-env] Warning: secure intake URL is not configured. " +
      "Local build will continue and production will use the built-in Carepatron fallback unless you set a custom portal URL."
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
