// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  // viewTransitions: true, // Eğer sorun devam ederse geçici olarak kapatıp deneyebilirsiniz.
  vite: {
    plugins: [
      (await import('@rollup/plugin-commonjs')).default({
        include: /node_modules/,
        requireReturnsDefault: 'auto',
      })
    ],
    ssr: {
      // MWC'ler client-side olduğundan, SSR'da özel bir işlem genellikle gerektirmez.
      // Eğer MUI veya başka bir kütüphane için noExternal gerekiyorsa, onu burada tutun.
      noExternal: ['@mui/x-data-grid'],
      // external: [], // Genellikle boş bırakılabilir veya MWC ile ilgili olmayanları ekleyin.
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
        // '@material/web': path.resolve('./node_modules/@material/web'), // KALDIRILDI
        '@publicstyles': path.resolve('./public/styles'),
      },
      mainFields: ['module', 'main'], // Genellikle Vite varsayılanları yeterlidir
      dedupe: [ // Deduplication genellikle iyi bir şeydir
        '@mui/x-data-grid',
        // '@material/web' // MWC için dedupe genellikle gerekmez, farklı componentler farklı dosyalardır
      ],
      extensions: ['.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx'] // Standart
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
      needsInterop: [
    
        'prop-types'
      ]
    },
    build: {
      commonjsOptions: {
        include: ['@mui/x-data-grid']
      },
      cssCodeSplit: true,
    }
  }
});