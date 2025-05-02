import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage or system preference
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Tema Değiştir"
      className="ml-4 p-2 rounded focus:outline-none bg-gray-100 dark:bg-gray-800 dark:text-white transition-colors"
    >
      {isDark ? (
        // Moon icon for dark
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71m16.97 0l-.71-.71M4.05 4.93l-.71-.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M6.34 6.34l-.71-.71" />
        </svg>
      ) : (
        // Sun icon for light
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2m9-9h-2M3 12H1m16.24 7.24l-1.42-1.42M6.34 6.34l-1.42-1.42M21.66 6.34l-1.42 1.42M6.34 17.66l-1.42 1.42" />
        </svg>
      )}
    </button>
  );
}
