// pages/About.tsx
import { useTheme } from "../context/useTheme";

export default function About() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"}`}>
      {/* Hero Section */}
      <section className={`relative flex flex-col items-center justify-center py-24 px-6 text-center transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-indigo-50"}`}>
        <h1 className={`text-5xl font-extrabold mb-6 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>Sobre o NeuralUp 🚀</h1>
        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          O NeuralUp nasceu com a missão de transformar a forma como aprendemos, utilizando tecnologia e estratégias adaptadas — para reduzir ausências, melhorar engajamento e apoiar a evolução profissional.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: "Missão", icon: "🎯", desc: "Potencializar o aprendizado personalizado e acessível para todos, com foco em resultado e bem‑estar digital." },
          { title: "Visão", icon: "🚀", desc: "Ser referência em plataformas que conectam pessoas a novos patamares de conhecimento e produtividade." },
          { title: "Valores", icon: "💡", desc: "Inovação, empatia, crescimento contínuo, ética e excelência na experiência de aprendizagem." },
        ].map((item, i) => (
          <div key={i} className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 hover:scale-105 transition-transform duration-500`}>
            <div className="text-6xl mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
