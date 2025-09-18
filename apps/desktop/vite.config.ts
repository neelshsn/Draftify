import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configure Vite for the Tauri desktop shell.
export default defineConfig(() => {
  const isDebug = Boolean(process.env.TAURI_DEBUG);
  const minify: false | 'esbuild' = isDebug ? false : 'esbuild';

  return {
    plugins: [react()],
    clearScreen: false,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@/core': fileURLToPath(new URL('./src/core', import.meta.url)),
        '@/ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      hmr: {
        overlay: false,
      },
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
      target: process.env.TAURI_PLATFORM === 'windows' ? 'es2021' : 'safari13',
      minify,
      sourcemap: isDebug,
    },
  };
});
