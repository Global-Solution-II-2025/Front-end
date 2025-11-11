import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

/**
 * Menu de navegação principal do portal.
 * - Links para as principais seções
 * - Menu colapsável no mobile
 * - Destaque para a rota ativa
 */
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
    <div className="relative">
      {/* Botão de abrir/fechar no mobile */}
      <button
        className="md:hidden text-2xl text-indigo-600 focus:outline-none"
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
            className={`transition-colors duration-300 ${
              location.pathname === to
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Menu mobile */}
      {open && (
        <nav className="absolute top-12 left-0 w-48 bg-white shadow-lg rounded-lg flex flex-col gap-2 py-3 px-4 md:hidden border border-gray-100 z-40 animate-fadeIn">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-2 px-2 rounded-md transition-colors duration-200 ${
                location.pathname === to
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
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
