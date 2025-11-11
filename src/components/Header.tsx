import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import Menu from "./Menu";
import logo from "../assets/favicon.png";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string | null>(null);

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
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Portal" className="h-10 w-10" />
          <h1 className="text-xl md:text-2xl font-semibold text-blue-600">
            NeuralUp
          </h1>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:block">
          <Menu />
        </div>

        {/* Área de usuário */}
        <div className="flex items-center gap-3">
          {nome ? (
            <>
              <span className="font-medium text-gray-700">
                Olá, {nome.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
              <FiUser />
              Entrar
            </Link>
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden border-t border-gray-200 bg-gray-50 px-4 py-2">
        <Menu />
      </div>
    </header>
  );
}
