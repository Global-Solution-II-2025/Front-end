import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiSettings,
  FiMoon,
  FiSun,
  FiGlobe,
  FiEye,
  FiEyeOff,
  FiLogOut,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import logo from "../assets/favicon.png";
import { useTheme } from "../context/useTheme";

export default function Header() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const { isDark, toggleTheme, isHighContrast, toggleContrast } = useTheme();

  useEffect(() => {
    const storedNome = localStorage.getItem("nome");
    setNome(storedNome);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/login");
  };

  return (
    <header
      className={`w-full shadow-md sticky top-0 z-50 transition-colors duration-300 ${
        isHighContrast
          ? "bg-white dark:bg-black high-contrast"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo NeuralUp" className="h-10 w-10" />
          <h1 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-indigo-400">
            NeuralUp
          </h1>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:block">
          <Menu />
        </div>

        {/* Área de usuário */}
        <div className="flex items-center gap-3 relative">
          {nome ? (
            <>
              <Link
                to="/usuario"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Olá, {nome.split(" ")[0]}
              </Link>

              {/* Botão de Configurações */}
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Configurações"
              >
                <FiSettings className="text-xl text-gray-600 dark:text-gray-300" />
              </button>

              {/* Menu Configurações */}
              {menuAberto && (
                <div className="absolute right-0 top-12 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700 z-50 animate-fadeIn">
                  <div className="flex flex-col py-2">
                    <button className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                      <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                        <FiGlobe /> Idioma
                      </span>
                      <span className="text-sm text-gray-500">PT-BR</span>
                    </button>

                    {/* Alternar tema */}
                    <button
                      onClick={toggleTheme}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                        {isDark ? <FiSun /> : <FiMoon />} Tema
                      </span>
                      <div
                        className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                          isDark ? "bg-indigo-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                            isDark ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </button>

                    {/* Alternar contraste */}
                    <button
                      onClick={toggleContrast}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                        {isHighContrast ? <FiEyeOff /> : <FiEye />} Contraste
                      </span>
                      <div
                        className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                          isHighContrast ? "bg-indigo-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                            isHighContrast ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </button>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiLogOut /> Sair
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all"
            >
              <FiUser />
              Entrar
            </Link>
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2">
        <Menu />
      </div>
    </header>
  );
}
