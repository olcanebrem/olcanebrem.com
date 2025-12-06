// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://olcanebrem.com',
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['dev.e-medrese.com']
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ],
  // viewTransitions: true, // Eğer sorun devam ederse geçici olarak kapatıp deneyebilirsiniz.
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${path.resolve('./src/styles/globals.css')}";`
        }
      }
    },
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
      },
      mainFields: ['module', 'main'],
      extensions: ['.js', '.mjs', '.cjs', '.ts', '.astro']
    },
    optimizeDeps: {
      exclude: ['fsevents']
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        external: ['fsevents']
      }
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: ``
        }
      }
    }
  }
});