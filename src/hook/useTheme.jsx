import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check for theme in localStorage or default to light
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Apply the theme to the root of the document (HTML tag)
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save the theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export default useTheme;
