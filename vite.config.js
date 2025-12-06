// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['dev.e-medrese.com']
  },
  optimizeDeps: {
    include: ['@rive-app/react-canvas'],
    exclude: ['fsevents'],
    esbuildOptions: {
      target: 'es2020',
      // Ignore .node files
      plugins: [{
        name: 'ignore-node-files',
        setup(build) {
          build.onResolve({ filter: /\.node$/ }, () => ({ external: true }))
        }
      }]
    }
  },
  ssr: {
    noExternal: ['fsevents']
  },
  build: {
    rollupOptions: {
      external: ['fsevents', /\.node$/]
    }
  }
})