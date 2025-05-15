// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  // viewTransitions: true, // Eğer sorun devam ederse geçici olarak kapatıp deneyebilirsiniz.
  vite: {
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
        '@material/web/chips/chip-set.js',
        '@material/web/chips/assist-chip.js',
        '@material/web/chips/filter-chip.js',
        '@material/web/chips/input-chip.js',
        '@material/web/chips/suggestion-chip.js',
        '@material/web/iconbutton/icon-button.js',
        '@material/web/button/filled-button.js',
        '@material/web/button/outlined-button.js',
        '@material/web/switch/switch.js',
        '@material/web/textfield/outlined-text-field.js',
        '@material/web/icon/icon.js', 
        '@material/web/checkbox/checkbox.js',
        '@material/web/slider/slider.js',
        '@material/web/progress/circular-progress.js',
        '@material/web/progress/linear-progress.js',
        '@material/web/tabs/tabs.js',
        '@material/web/tabs/primary-tab.js',
        '@material/web/dialog/dialog.js',
        // MWC JS dosyalarını buraya eklemeyi deneyin, eğer frontmatter importları hala çalışmıyorsa:
        // '@material/web/button/filled-button.js',
        // '@material/web/icon/icon.js',
        // vb. tüm kullandığınız MWC JS dosyaları
      ],
      needsInterop: [
        '@material/web/chips/chip-set.js',
        '@material/web/chips/assist-chip.js',
        '@material/web/chips/filter-chip.js',
        '@material/web/chips/input-chip.js',
        '@material/web/chips/suggestion-chip.js',
        '@material/web/iconbutton/icon-button.js',
        '@material/web/button/filled-button.js',
        '@material/web/button/outlined-button.js',
        '@material/web/switch/switch.js',
        '@material/web/textfield/outlined-text-field.js',
        '@material/web/icon/icon.js', 
        '@material/web/checkbox/checkbox.js',
        '@material/web/slider/slider.js',
        '@material/web/progress/circular-progress.js',
        '@material/web/progress/linear-progress.js',
        '@material/web/tabs/tabs.js',
        '@material/web/tabs/primary-tab.js',
        '@material/web/dialog/dialog.js',
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