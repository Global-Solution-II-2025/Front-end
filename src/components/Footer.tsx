import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-10 pb-6 mt-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">NeuralUp</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Plataforma de aprendizado inteligente com trilhas personalizadas, 
            IA leve e recomendações sob medida para seu crescimento profissional.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Links úteis</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trilhas" className="hover:text-indigo-400 transition-colors">Integrantes</a></li>
            <li><a href="/cursos" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
            <li><a href="/sobre" className="hover:text-indigo-400 transition-colors">Sobre Nós</a></li>
            <li><a href="/ajuda" className="hover:text-indigo-400 transition-colors">Suporte</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiMail className="text-indigo-400" />
              <a href="mailto:team@pathly.com" className="hover:text-indigo-400 transition-colors">
                team@pathly.com
              </a>
            </li>
            <li><span className="text-gray-400">São Paulo, SP — Brasil</span></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Siga-nos</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pathly — Todos os direitos reservados.
      </div>
    </footer>
  );
}
