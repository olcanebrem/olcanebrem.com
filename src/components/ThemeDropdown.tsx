import { useState, useEffect } from 'react';

declare global {
  interface Window {
    setTheme: (theme: string) => void;
  }
}

export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('theme-light');

  useEffect(() => {
    const theme = document.documentElement.className
      .split(' ')
      .find(cls => cls.startsWith('theme-'));
    if (theme) {
      setCurrentTheme(theme);
    }
  }, []);

  const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'Light High Contrast', value: 'light-hc' },
    { name: 'Dark High Contrast', value: 'dark-hc' },
    { name: 'Light Material', value: 'light-mc' },
    { name: 'Dark Material', value: 'dark-mc' }
  ];

  const switchTheme = (mode: string) => {
    const themeClass = `theme-${mode}`;
    if (typeof window !== 'undefined' && window.setTheme) {
      window.setTheme(themeClass);
      setCurrentTheme(themeClass);
    }
    setIsOpen(false);
  };
  
  

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
      >
        <span>🎨</span>
        <span>{themes.find(t => `theme-${t.value}` === currentTheme)?.name || 'Theme'}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => switchTheme(theme.value)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
