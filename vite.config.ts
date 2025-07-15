import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory and all parent directories
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // Base public path for production
    base: '/', // Change this to your repository name if deploying to GitHub Pages
    
    // Environment variables that start with VITE_ will be exposed to your client-side code
    define: {
      'process.env': { ...process.env, ...env }
    },
    
    // Development server configuration
    server: {
      port: 3000,
      strictPort: true,
      open: true,
    },
    
    // Build configuration
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: mode === 'production' ? 'esbuild' : false,
      cssMinify: mode === 'production',
      rollupOptions: {
        external: [
          '@emotion/react/jsx-runtime'
        ],
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('@radix-ui')) {
                return 'radix';
              }
              if (id.includes('lucide-react')) {
                return 'lucide';
              }
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react';
              }
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 1000, // in kbs
      reportCompressedSize: false,
      commonjsOptions: {
        include: /node_modules/,
        transformMixedEsModules: true,
      },
    },
    
    // Plugins
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
    
    // Resolve configuration
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    
    // Esbuild configuration
    esbuild: {
      jsxImportSource: '@emotion/react',
      jsx: 'automatic',
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    
    // Preview configuration
    preview: {
      port: 4173,
      strictPort: true,
    },
  };
});
