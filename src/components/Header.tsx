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
      className={`w-full shadow-md sticky top-0 z-50 transition-colors duration-500 ${
        isDark
          ? "bg-[#1A1A1A] text-gray-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo NeuralUp" className="h-10 w-10" />
          <h1
            className={`text-xl md:text-2xl font-semibold transition-colors duration-500 ${
              isDark ? "text-[#00A67E]" : "text-blue-600"
            }`}
          >
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
                className={`font-medium transition-colors duration-500 ${
                  isDark ? "text-gray-200 hover:text-[#007a5e]" : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Olá, {nome.split(" ")[0]}
              </Link>

              {/* Botão de Configurações */}
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className={`p-2 rounded-full transition-colors duration-500 ${
                  isDark ? "hover:bg-[#4A4A4A]" : "hover:bg-gray-100"
                }`}
                aria-label="Configurações"
              >
                <FiSettings className={`text-xl transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-600"}`} />
              </button>

              {/* Menu Configurações */}
              {menuAberto && (
                <div
                  className={`absolute right-0 top-12 w-56 shadow-lg rounded-lg border transition-colors duration-500 z-50 ${
                    isDark
                      ? "bg-[#3A3A3A] border-[#1A1A1A]"
                      : "bg-white border-gray-100"
                  } animate-fadeIn`}
                >
                  <div className="flex flex-col py-2">
                    <button className={`flex items-center justify-between px-4 py-2 transition-colors duration-500 ${
                      isDark ? "hover:bg-[#4A4A4A] text-gray-200" : "hover:bg-gray-50 text-gray-700"
                    }`}>
                      <span className="flex items-center gap-2"><FiGlobe /> Idioma</span>
                      <span className="text-sm text-[#00A67E]">PT-BR</span>
                    </button>

                    {/* Alternar tema */}
                    <button
                      onClick={toggleTheme}
                      className={`flex items-center justify-between px-4 py-2 transition-colors duration-500 ${
                        isDark ? "hover:bg-[#4A4A4A] text-gray-200" : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isDark ? <FiMoon /> : <FiSun />} Tema
                      </span>
                      <div
                        className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-500 ${
                          isDark ? "bg-[#00A67E]" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-500 ${
                            isDark ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </button>

                    {/* Alternar contraste */}
                    <button
                      onClick={toggleContrast}
                      className={`flex items-center justify-between px-4 py-2 transition-colors duration-500 ${
                        isDark ? "hover:bg-[#4A4A4A] text-gray-200" : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isHighContrast ? <FiEyeOff /> : <FiEye />} Contraste
                      </span>
                      <div
                        className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-500 ${
                          isHighContrast ? "bg-[#00A67E]" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-500 ${
                            isHighContrast ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </button>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-[#4A4A4A] transition-colors duration-500"
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-500 ${
                isDark
                  ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              <FiUser />
              Entrar
            </Link>
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden border-t transition-colors duration-500 ${
          isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"
        } px-4 py-2`}
      >
        <Menu />
      </div>
    </header>
  );
}
