import { useTheme } from "../context/useTheme";
import type { Integrante } from "../types/integrantes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Brum from "../assets/brum.jpeg";
import Brito from "../assets/brito.jpg";
import Flosi from "../assets/flosi.jpg";

const integrantes: Integrante[] = [
  {
    name: "Arthur Brito",
    role: "Desenvolvedor Frontend",
    description:
      "Apaixonado por tecnologia e UX, focado em criar interfaces limpas e interativas.",
    image: "#",
    github: "https://github.com/thubrito",
    linkedin: "https://www.linkedin.com/in/arthur-brito-da-silva-06658b276/",
  },
  {
    name: "Luiz Felipe Flosi",
    role: "Desenvolvedor Backend",
    description:
      "Especialista em sistemas e implementação de API, garantindo que tudo funcione de forma escalável.",
    image: "#",
    github: "https://github.com/felipeflosii",
    linkedin: "https://www.linkedin.com/in/felipeflosii/",
  },
  {
    name: "Pedro Henrique Brum",
    role: "Desenvolvedor Backend",
    description: "Especialista em desenvolvimento API e fanático por Java.",
    image: Brum,
    github: "https://github.com/PedroBrum-DEV",
    linkedin: "https://www.linkedin.com/in/pedro-brum-66a31b326/",
  },
];

export default function Integrantes() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1
        className={`text-5xl font-extrabold mb-16 text-center transition-colors duration-500 ${
          isDark ? "text-gray-200" : "text-indigo-600"
        }`}
      >
        Nossa Equipe 🚀
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {integrantes.map((member, index) => (
          <div
            key={index}
            className={`relative group flex flex-col items-center rounded-3xl shadow-2xl p-8 transition-transform duration-500 transform hover:scale-105 hover:-translate-y-3 overflow-hidden ${
              isDark
                ? "bg-linear-to-tr from-[#2A2A2A] to-[#1A1A1A] text-gray-200"
                : "bg-llinear-to-tr from-white to-gray-100 text-gray-900"
            }`}
          >
            {/* Imagem */}
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#00A67E] shadow-lg mb-6 transition-transform duration-500 hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${
                  member.name === "Pedro Henrique Brum"
                    ? "scale-125 -translate-y-4"
                    : ""
                }`}
              />
            </div>

            {/* Conteúdo */}
            <h2
              className={`text-2xl font-bold mb-1 text-center transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {member.name}
            </h2>
            <p
              className={`font-medium mb-4 text-center transition-colors duration-500 ${
                isDark ? "text-[#00A67E]" : "text-indigo-600"
              }`}
            >
              {member.role}
            </p>
            <p
              className={`text-center transition-colors duration-500 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {member.description}
            </p>

            {/* Links */}
            <div className="flex gap-6 mt-4">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-xl transition-colors duration-500 hover:text-[#00A67E] ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  <FaGithub />
                </a>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-xl transition-colors duration-500 hover:text-[#00A67E] ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  <FaLinkedin />
                </a>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
