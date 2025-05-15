// contexts/ThemeContext.js
'use client'; // Important for App Router
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    primary: '#854CE6',
    secondary: '#1a1a1a',
    tertiary80: 'rgba(255,255,255,0.8)',
    aboutimg1: '/images/about1.png',
    aboutimg2: '/images/about2.png'
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}