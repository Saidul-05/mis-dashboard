import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct asset paths on Vercel
  build: {
    outDir: "dist", // Vercel expects "dist" as the output directory
    emptyOutDir: true, // Clears old builds before building a new one
    sourcemap: true, // Helps debug errors in Vercel deployments
  },
  server: {
    port: 3000, // Set default port for local development
    open: true, // Opens browser on dev server start
  },
  resolve: {
    alias: {
      "@": "/src", // Allows importing files with '@' instead of relative paths
    },
  },
});
