import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`w-full pt-10 pb-6 mt-10 border-t transition-colors duration-500 ${
        isDark
          ? "bg-gray-900 border-gray-800 text-gray-300"
          : "bg-gray-50 border-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e descrição */}
        <div>
          <h2
            className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            NeuralUp
          </h2>
          <p
            className={`text-sm leading-relaxed transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Plataforma de aprendizado inteligente com trilhas personalizadas, 
            IA leve e recomendações sob medida para seu crescimento profissional.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Links úteis
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/integrantes"
                className={`transition-colors duration-500 hover:text-indigo-400 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Integrantes
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`transition-colors duration-500 hover:text-indigo-400 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={`transition-colors duration-500 hover:text-indigo-400 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={`transition-colors duration-500 hover:text-indigo-400 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Contato
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiMail className="text-indigo-400" />
              <a
                href="mailto:team@neuralup.com"
                className="transition-colors duration-500 hover:text-indigo-400"
              >
                team@neuralup.com
              </a>
            </li>
            <li
              className={`transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              São Paulo, SP — Brasil
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Siga-nos
          </h3>
          <div className="flex gap-4 text-xl">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF /> },
              { href: "https://instagram.com", icon: <FaInstagram /> },
              { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
              { href: "https://github.com", icon: <FaGithub /> },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-500 hover:text-indigo-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div
        className={`mt-10 pt-4 text-center text-sm transition-colors duration-500 ${
          isDark
            ? "text-gray-400 border-t border-gray-800"
            : "text-gray-500 border-t border-gray-200"
        }`}
      >
        © {new Date().getFullYear()} NeuralUp — Todos os direitos reservados.
      </div>
    </footer>
  );
}
