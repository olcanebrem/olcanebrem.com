import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  viewTransitions: true,
  vite: {
    ssr: {
      noExternal: ['@rive-app/react-canvas', '@mui/x-data-grid', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled']
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@cms': path.resolve('./cms'),
        '@api': path.resolve('./api'),
        '@public': path.resolve('./public'),
        '@components': path.resolve('./src/components'),
        '@gsap': path.resolve('./node_modules/gsap')
      },
      mainFields: ['module', 'main'],
      dedupe: ['@mui/x-data-grid']
    },
    optimizeDeps: {
      include: ['@rive-app/react-canvas', '@mui/x-data-grid', '@gsap', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
      esbuildOptions: {
        target: 'es2020'
      }
    },
    build: {
      commonjsOptions: {
        include: [/@rive-app\/react-canvas/, /@mui\/x-data-grid/, /node_modules/]
      },
      cssCodeSplit: true,
      target: 'es2020'
    }
  }
});