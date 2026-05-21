import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Ensures correct asset paths for root domain deployment
  build: {
    outDir: 'dist',      // Output directory (Vercel expects this by default)
    sourcemap: true,     // Helps with debugging (optional, remove for production)
    emptyOutDir: true,   // Cleans outDir before building
    rollupOptions: {
      output: {
        // FIXED: Converted from an object to a function to prevent the "Expected Function but received Object" error
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 5173,          // Default Vite port
    strictPort: false,   // Allows using next available port if 5173 is taken
  },
  preview: {
    port: 4173,          // Preview port
    strictPort: false,
  },
})