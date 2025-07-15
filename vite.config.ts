import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Set base URL to root
  base: '/',
  envDir: './env',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          ['@emotion/babel-plugin', {
            autoLabel: 'dev-only',
            labelFormat: '[local]',
            cssPropOptimization: true
          }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: true,
    hmr: {
      port: 3001,
      protocol: 'ws',
      host: 'localhost'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) {
              return 'radix';
            }
            if (id.includes('@emotion')) {
              return 'emotion';
            }
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    cssCodeSplit: true,
  },
  preview: {
    port: 3002,
    strictPort: true,
    host: true, // Listen on all network interfaces
    headers: {
      'Cache-Control': 'public, max-age=600',
    }
  },
});
