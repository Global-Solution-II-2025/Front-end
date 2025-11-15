import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { useTheme } from "../context/useTheme";

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section
      className={`min-h-screen py-16 px-6 text-center transition-colors duration-500 ${
        isDark
          ? "bg-[#1A1A1A] text-gray-200"
          : "bg-linear-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-10 transition-colors duration-500 ${
          isDark ? "text-[#00A67E]" : "text-blue-600"
        }`}
      >
        Entre em Contato
      </h1>

      <p
        className={`max-w-2xl mx-auto mb-12 transition-colors duration-500 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Fale com a equipe <strong>NeuralUp</strong>. Estamos prontos para te ajudar, ouvir suas ideias e resolver qualquer dúvida!
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Email */}
        <div
          className={`shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-500 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiMail className="text-5xl text-[#00A67E] mx-auto mb-4" />
          <h3
            className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            E-mail
          </h3>
          <p className={`transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            team@neuralup.com
          </p>
        </div>

        {/* Telefone */}
        <div
          className={`shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-500 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiPhone className="text-5xl text-[#00A67E] mx-auto mb-4" />
          <h3
            className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Telefone
          </h3>
          <p className={`transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            +55 (11) 99999-9999
          </p>
        </div>

        {/* Localização */}
        <div
          className={`shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-500 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiMapPin className="text-5xl text-[#00A67E] mx-auto mb-4" />
          <h3
            className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Endereço
          </h3>
          <p className={`transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            São Paulo — SP, Brasil
          </p>
        </div>
      </div>

      {/* Redes sociais */}
      <div className="flex justify-center gap-6 mt-12">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className={`transition-colors duration-500 ${
            isDark ? "text-[#00A67E] hover:text-gray-300" : "text-blue-500 hover:text-blue-700"
          }`}
        >
          <FiInstagram size={30} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className={`transition-colors duration-500 ${
            isDark ? "text-[#00A67E] hover:text-gray-300" : "text-blue-500 hover:text-blue-700"
          }`}
        >
          <FiLinkedin size={30} />
        </a>

        <a
          href="https://github.com/Global-Solution-II-2025"
          target="_blank"
          rel="noreferrer"
          className={`transition-colors duration-500 ${
            isDark ? "text-[#00A67E] hover:text-gray-300" : "text-blue-500 hover:text-blue-700"
          }`}
        >
          <FiGithub size={30} />
        </a>
      </div>
    </section>
  );
}
