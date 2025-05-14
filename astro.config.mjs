import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  viewTransitions: true,
  vite: {
    ssr: {
      noExternal: ['@mui/x-data-grid', '@material/web'], // Add @material/web
      external: ['@material/web/*'] // Explicitly mark Web Components as external
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@cms': path.resolve('./cms'),
        '@api': path.resolve('./api'),
        '@public': path.resolve('./public'),
        '@components': path.resolve('./src/components'),
        '@gsap': path.resolve('./node_modules/gsap'),
        '@styles': path.resolve('./src/styles'),
        '@material/web': path.resolve('./node_modules/@material/web')
      },
      mainFields: ['module', 'main', 'browser'],
      dedupe: [
        '@mui/x-data-grid',
        '@material/web'
      ],
      extensions: ['.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx']
    },
    optimizeDeps: {
      include: [
        'react', 
        'react-dom',
        '@astrojs/react',
        '@rive-app/react-canvas',
        '@rive-app/canvas',
        '@rive-app/webgl',
      ],
      esbuildOptions: {
        target: 'esnext'
      }
    },
    build: {
      commonjsOptions: {
        include: ['@mui/x-data-grid']
      },
      cssCodeSplit: true,
      target: 'esnext'
    }
  }
});