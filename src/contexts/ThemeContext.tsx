import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    // Apply theme to document with smooth transition
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Remove transition after theme change to avoid flickering on scroll
    const timer = setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    // Keyboard shortcut: Ctrl/Cmd + Shift + T
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};