import React, { useState } from 'react';

export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'Light High Contrast', value: 'light-hc' },
    { name: 'Dark High Contrast', value: 'dark-hc' },
    { name: 'Light Material', value: 'light-mc' },
    { name: 'Dark Material', value: 'dark-mc' }
  ];

  const switchTheme = (mode: string) => {
    const themeMap = {
      light: '/styles/light.css',
      dark: '/styles/dark.css',
      'light-hc': '/styles/light-hc.css',
      'dark-hc': '/styles/dark-hc.css',
      'light-mc': '/styles/light-mc.css',
      'dark-mc': '/styles/dark-mc.css',
    };

    const themeHref = themeMap[mode as keyof typeof themeMap] || themeMap.light;

    const themeStyleElement = document.getElementById('theme-style');
    if (themeStyleElement) {
      themeStyleElement.setAttribute('href', themeHref);
    } else {
      const linkElement = document.createElement('link');
      linkElement.id = 'theme-style';
      linkElement.rel = 'stylesheet';
      linkElement.href = themeHref;
      document.head.appendChild(linkElement);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        🎨 Theme
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-50">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => switchTheme(theme.value)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
