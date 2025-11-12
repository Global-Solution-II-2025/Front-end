import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/useTheme";

/**
 * Menu de navegação principal do portal.
 * - Links para as principais seções
 * - Menu colapsável no mobile
 * - Destaque para a rota ativa
 */
export default function Menu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  const links = [
    { to: "/", label: "Início" },
    { to: "/trilhas", label: "Minha rotina" },
    { to: "/cursos", label: "Notícias" },
  ];

  return (
    <div className="relative">
      {/* Botão de abrir/fechar no mobile */}
      <button
        className={`md:hidden text-2xl transition-colors duration-500 ${
          isDark ? "text-indigo-400" : "text-indigo-600"
        } focus:outline-none`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu normal (desktop) */}
      <nav className="hidden md:flex gap-6 items-center text-base font-medium">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`transition-colors duration-500 ${
              location.pathname === to
                ? "text-indigo-600 font-semibold"
                : isDark
                ? "text-gray-300 hover:text-indigo-400"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Menu mobile */}
      {open && (
        <nav
          className={`absolute top-12 left-0 w-48 shadow-lg rounded-lg flex flex-col gap-2 py-3 px-4 md:hidden border transition-colors duration-500 z-40 animate-fadeIn ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}
        >
          {links.map(({ to, label }) => (
            <Link
              key={to}
              onClick={() => setOpen(false)}
              to={to}
              className={`block py-2 px-2 rounded-md transition-colors duration-500 ${
                location.pathname === to
                  ? isDark
                    ? "bg-indigo-600 text-white font-semibold"
                    : "bg-indigo-100 text-indigo-600 font-semibold"
                  : isDark
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
