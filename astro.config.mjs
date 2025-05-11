import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@rive-app/react-canvas']
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@cms': path.resolve('./cms'),
        '@api': path.resolve('./api'),
        '@public': path.resolve('./public'),
        '@components': path.resolve('./src/components')
      },
      mainFields: ['module', 'main']
    },
    optimizeDeps: {
      include: ['@rive-app/react-canvas']
    },
    build: {
      commonjsOptions: {
        include: [/@rive-app\/react-canvas/, /node_modules/]
      }
    }
  }
});