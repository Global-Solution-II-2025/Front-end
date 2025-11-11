import { createContext, useState, useEffect, type ReactNode } from "react";
import type { ThemeContextType } from "../types/themeContext";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Função para obter valores iniciais (tema e contraste)
  const getInitialTheme = (): boolean => {
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

  const getInitialContrast = (): boolean => {
    if (typeof window === "undefined") return false;
    try {
      const stored = localStorage.getItem("contrast");
      return stored === "on";
    } catch {
      return false;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(
    getInitialContrast
  );

  // Atualiza <html> com o tema escuro
  useEffect(() => {
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}

    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  // Atualiza <body> com o contraste
  useEffect(() => {
    try {
      localStorage.setItem("contrast", isHighContrast ? "on" : "off");
    } catch {}

    const body = document.body;
    if (isHighContrast) body.classList.add("high-contrast");
    else body.classList.remove("high-contrast");
  }, [isHighContrast]);

  // Escuta mudanças no sistema
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleContrast = () => setIsHighContrast((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, isHighContrast, toggleContrast }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
