import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

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
        external: ['@emotion/react/jsx-runtime'],
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['@radix-ui/react-*', 'lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 1000, // in kbs
    },
    
    // Plugins
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    
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
