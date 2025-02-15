// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // WebSocket proxy
      '/ws': {
        target: 'ws://localhost:3001',  // Your WebSocket server port
        ws: true,
        changeOrigin: true
      },
      // Add REST API proxy if needed
      '/api': {
        target: 'http://localhost:3001', // Your backend server
        changeOrigin: true
      }
    }
  }
});
