import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      allow: [
        // Allow access to the parent directory where fonts are installed
        path.resolve(__dirname, '..'),
      ]
    }
  }
});
