// Importing the defineConfig function from Vite
import { defineConfig } from 'vite'
// Importing the React plugin for Vite
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Exporting the Vite configuration
export default defineConfig({
  // Defining environment variables
  define: {
    'process.env': process.env
  },
  // Using the React plugin
  plugins: [react()],
  // Build configuration
  build: {
    commonjsOptions: {
      // Enabling transformation for mixed ES modules
      transformMixedEsModules: true,
    }
  } 
})
