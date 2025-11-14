import { useTheme } from "../context/useTheme";
import type { Integrante } from "../types/integrantes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const integrantes: Integrante[] = [
  {
    name: "Arthur Brito",
    role: "Desenvolvedor Frontend",
    description:
      "Apaixonado por tecnologia e UX, focado em criar interfaces limpas e interativas.",
    image: "#",
    github: "https://github.com/arthurbrito",
    linkedin: "https://linkedin.com/in/arthurbrito",
  },
  {
    name: "Luiz Felipe Flosi",
    role: "Desenvolvedor Backend",
    description:
      "Especialista em sistemas e APIs, garantindo que tudo funcione de forma escalável.",
    image: "#",
    github: "https://github.com/luizflosi",
    linkedin: "https://linkedin.com/in/luizflosi",
  },
  {
    name: "Pedro Henrique Brum",
    role: "Desenvolvedor Backend",
    description:
      "Especialista em desenvolvimento API e fanático por Java.",
    image: "#",
    github: "https://github.com/pedrobrum",
    linkedin: "https://linkedin.com/in/pedrobrum",
  },
];

export default function Integrantes() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1
        className={`text-5xl font-extrabold mb-16 text-center transition-colors duration-500 ${
          isDark ? "text-indigo-400" : "text-indigo-600"
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
                ? "bg-linear-to-tr from-gray-800 to-gray-700 text-gray-200"
                : "bg-llinear-to-tr from-white to-gray-100 text-gray-900"
            }`}
          >
            {/* Imagem */}
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-6 transition-transform duration-500 hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
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
                isDark ? "text-indigo-300" : "text-indigo-600"
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

            {/* Links GitHub / LinkedIn */}
            <div className="flex gap-6 mt-4">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-xl transition-colors duration-500 hover:text-indigo-500 ${
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
                  className={`text-xl transition-colors duration-500 hover:text-indigo-500 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  <FaLinkedin />
                </a>
              )}
            </div>

            {/* Overlay sutil */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
