import { createContext, useState, useEffect, type ReactNode } from "react";
import type { ThemeContextType } from "./../types/themeContext";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Pega o tema inicial: localStorage > preferência do sistema
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(getInitial);

  // Atualiza classe no <html> e localStorage
  useEffect(() => {
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}

    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  // Escuta mudanças na preferência do sistema
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
