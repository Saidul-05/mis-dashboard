// src/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Vite Environment Variables
  readonly VITE_API_URL: string;
  readonly VITE_WS_URL: string;
  readonly VITE_ENV: 'development' | 'production';
  
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
