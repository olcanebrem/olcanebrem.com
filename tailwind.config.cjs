/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554',
        },
        secondary: {
          DEFAULT: '#64748b',
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
        },
      },
      fontFamily: {
        'sans': ['YourCustomFont', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        enterFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-200px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromRight: {
          '0%': { opacity: 0, transform: 'translateX(200px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        exitToLeft: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(-200px)' },
        },
        exitToRight: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(200px)' },
        },
        'menu-open': {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'menu-close': {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.8)' },
        },
        'zoom-in-90': {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'zoom-out-95': {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.95)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'enter-from-left': 'enterFromLeft 0.2s ease-out',
        'enter-from-right': 'enterFromRight 0.2s ease-out',
        'exit-to-left': 'exitToLeft 0.2s ease-in',
        'exit-to-right': 'exitToRight 0.2s ease-in',
        'menu-open': 'menu-open 0.2s ease-out',
        'menu-close': 'menu-close 0.2s ease-in',
        'zoom-in-90': 'zoom-in-90 0.2s ease-out',
        'zoom-out-95': 'zoom-out-95 0.2s ease-in',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
