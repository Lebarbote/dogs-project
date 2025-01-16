import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5175, // Define a porta para 5175
    strictPort: true, // Garante que o Vite não mude para outra porta se 5175 estiver ocupada
  },
});
