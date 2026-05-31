/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SECURE_INTAKE_URL?: string;
  readonly VITE_JANE_APP_INTAKE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
