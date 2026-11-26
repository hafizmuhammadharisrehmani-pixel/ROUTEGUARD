import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '^/api/auth/(register|login|me|forgot-password|reset-password)': 'http://localhost:5000',
      '/api/dashboard': 'http://localhost:5000',
      '/api/demo': 'http://localhost:5000',
      '/api/contact': 'http://localhost:5000',
      '/api/alerts': 'http://localhost:5000',
      '/api/notifications': 'http://localhost:5000',
      '/api/networks': 'http://localhost:5000',
      '/api/routes': 'http://localhost:5000',
      '/api/prefixes': 'http://localhost:5000',
      '/api/network': 'http://localhost:5000',
      '/api/collectors': 'http://localhost:5000',
      '/api/requests': 'http://localhost:5000',
      '/api/admin/directory': 'http://localhost:5000',
      '/api/admin': 'http://localhost:5000',
      '/api': 'http://localhost:5080',
      '/hubs': {
        target: 'http://localhost:5080',
        ws: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) return 'react-vendor';
          if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return 'motion';
          if (id.includes('node_modules/@microsoft/signalr/')) return 'signalr';
          if (id.includes('node_modules/lucide-react/')) return 'icons';
          if (/node_modules\/(chart\.js|react-chartjs-2)\//.test(id)) return 'charts';
          if (id.includes('node_modules/cytoscape/')) return 'topology';
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
