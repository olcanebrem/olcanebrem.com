

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
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
      },
      animation: {
        'enter-left': 'enterFromLeft 300ms ease',
        'enter-right': 'enterFromRight 300ms ease',
        'exit-left': 'exitToLeft 300ms ease',
        'exit-right': 'exitToRight 300ms ease',
        'menu-open': 'menu-open 200ms ease-out forwards',
        'menu-close': 'menu-close 150ms ease-in forwards',
        'zoom-in-90': 'zoom-in-90 100ms ease-out forwards',
        'zoom-out-95': 'zoom-out-95 100ms ease-in forwards',
      },
    },
  },
  plugins: [],
}

