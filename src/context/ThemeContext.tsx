import React, { createContext, useContext, useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { prefersReducedMotion } from '../hooks/motion';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  /** Pass the click point to grow the new theme from there as a circle. */
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const KEY = 'portfolio_theme';

const readSaved = (): Theme | null => {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Dark is the designed default; the visitor's own choice is remembered.
  const [theme, setTheme] = useState<Theme>(() => readSaved() ?? 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const applyTheme = (next: Theme) => {
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    // Set the class directly too, so the view-transition snapshot sees the new theme.
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
  };

  const toggleTheme = (origin?: { x: number; y: number }) => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    if (!doc.startViewTransition || prefersReducedMotion()) {
      applyTheme(next);
      return;
    }
    const x = origin?.x ?? window.innerWidth - 40;
    const y = origin?.y ?? 32;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = doc.startViewTransition(() => {
      // The DOM must be updated synchronously inside the callback for the snapshot to be right.
      flushSync(() => applyTheme(next));
    });
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' }
        );
      })
      .catch(() => undefined);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
