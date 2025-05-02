import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@cms': new URL('./cms', import.meta.url).pathname,
        '@api': new URL('./api', import.meta.url).pathname,
        '@public': new URL('./public', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname
      }
    }
  }
});