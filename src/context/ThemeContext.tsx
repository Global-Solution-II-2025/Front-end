import { createContext, useState, useEffect, type ReactNode } from "react";
import type { ThemeContextType } from "./../types/themeContext";

//Criamos o bilhete mágico
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Aqui criamos a pessoa que vai dar o bilhete para todo
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // inicializa a partir do localStorage ou da preferência do sistema
    const getInitial = () => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored === "dark") return true;
            if (stored === "light") return false;
            return (
                typeof window !== "undefined" &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        } catch {
            return false;
        }
    };

    const [isDark, setisDark] = useState<boolean>(getInitial);

    // persiste e sincroniza a classe no <html>
    useEffect(() => {
            try {
                localStorage.setItem("theme", isDark ? "dark" : "light");
            } catch {
                // ignore write errors (e.g., storage disabled)
            }
        if (typeof document !== "undefined" && document.documentElement) {
            document.documentElement.classList.toggle("dark-mode", isDark);
            document.documentElement.classList.toggle("light-mode", !isDark);
        }
    }, [isDark]);

    const toggleTheme = () => {
        setisDark((prevIsDark) => !prevIsDark);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;