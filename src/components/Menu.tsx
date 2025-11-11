import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Menu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Início" },
    { to: "/trilhas", label: "Trilhas" },
    { to: "/cursos", label: "Cursos" },
    { to: "/ia", label: "IA Inteligente" },
    { to: "/sobre", label: "Sobre" },
  ];

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo ou título */}
        <div className="text-xl font-bold text-gray-800 dark:text-gray-100">Portal</div>

        {/* Botão mobile */}
        <button
          className="md:hidden text-2xl text-indigo-600 dark:text-indigo-400 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 items-center text-base font-medium">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors duration-300 px-2 py-1 rounded-md ${
                location.pathname === to
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 flex flex-col">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-3 px-4 transition-colors duration-200 ${
                location.pathname === to
                  ? "bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-200 font-semibold"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
