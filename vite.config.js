import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3002,
    allowedHosts: ['avson.eu'],
  },
  preview: {
    host: '0.0.0.0',
    port: 3002,
    allowedHosts: ['avson.eu'],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three') || id.includes('@react-three')) return 'three'
          if (id.includes('react-dom') || id.includes('react-router')) return 'vendor'
        },
      },
    },
  },
})
