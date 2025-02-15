import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Netlify expects this by default
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/ws': {
        target: 'ws://localhost:3001',
        ws: true
      }
    }
  }
});
