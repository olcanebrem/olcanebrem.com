// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://olcanebrem.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react()
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
    plugins: [
      (await import('@rollup/plugin-commonjs')).default({
        include: /node_modules/,
        requireReturnsDefault: 'auto',
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@cms': path.resolve('./cms'),
        '@api': path.resolve('./api'),
        '@public': path.resolve('./public'),
        '@components': path.resolve('./src/components'),
        '@components/ui/MWC': path.resolve('./src/components/ui/MWC'), // 🔥 BU ÖNEMLİ
        '@gsap': path.resolve('./node_modules/gsap'),
        '@styles': path.resolve('./src/styles'),
        '@publicstyles': path.resolve('./public/styles'),
      },
      
      mainFields: ['module', 'main'],
      dedupe: ['@mui/material', '@emotion/react', '@emotion/styled', '@emotion/cache'],
      extensions: ['.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx']
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@astrojs/react',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/cache'
      ],
      exclude: ['fsevents'],
      esbuildOptions: {
        plugins: [{
          name: 'ignore-node-files',
          setup(build) {
            build.onResolve({ filter: /\.node$/ }, () => ({ external: true }));
          }
        }]
      }
    },
    build: {
      commonjsOptions: {
        include: []
      },
      cssCodeSplit: true,
      rollupOptions: {
        external: ['fsevents', /\.node$/],
        output: {
          manualChunks: {
            
          }
        }
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