// pages/About.tsx
import { useTheme } from "../context/useTheme";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function About() {
  const { isDark } = useTheme();

  // Novo gráfico: tipos de aprendizagem
  const distribuicaoAprendizagem = [
    { name: "Presencial", value: 35 },
    { name: "Online Interativo", value: 40 },
    { name: "Vídeo/Aulas Gravadas", value: 15 },
    { name: "Autodidata/Leitura", value: 10 },
  ];
  const cores = ["#6366F1", "#4F46E5", "#A78BFA", "#818CF8"];

  // Gráfico de evolução da taxa de desemprego
  const evolucaoTaxaDesemprego = [
    { mes: "Jan/25", taxa: 7.0 },
    { mes: "Fev/25", taxa: 6.6 },
    { mes: "Mar/25", taxa: 6.2 },
    { mes: "Abr/25", taxa: 6.0 },
    { mes: "Mai/25", taxa: 5.8 },
    { mes: "Jun/25", taxa: 5.8 },
    { mes: "Jul/25", taxa: 5.6 },
  ];

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

      {/* Gráficos */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Pie Chart atualizado */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Distribuição de Métodos de Aprendizagem</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distribuicaoAprendizagem}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {distribuicaoAprendizagem.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Evolução da Taxa de Desemprego no Brasil (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={evolucaoTaxaDesemprego}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#444" : "#ddd"} />
              <XAxis dataKey="mes" stroke={isDark ? "#ccc" : "#555"} />
              <YAxis stroke={isDark ? "#ccc" : "#555"} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="taxa" stroke="#6366F1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Fonte: Instituto Brasileiro de Geografia e Estatística (IBGE) — 2º trimestre de 2025.
          </p>
        </div>
      </section>

      {/* Impactos Reais */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className={`text-4xl font-extrabold mb-12 text-indigo-600 dark:text-indigo-400`}>Impactos Reais 🌟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { number: "5,8%", label: "Taxa de desemprego no Brasil (2º tri/2025)" },
            { number: "8,7M", label: "Jovens de 14‑29 anos sem ensino médio completo" },
            { number: "≈18 dias", label: "Média anual de faltas escolares (absenteísmo)" },
          ].map((item, i) => (
            <div key={i} className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 hover:scale-105 transition-transform duration-500`}>
              <h3 className="text-4xl font-bold mb-2 text-indigo-500 dark:text-indigo-400">{item.number}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada final */}
      <section className={`py-20 px-6 text-center transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-indigo-50"}`}>
        <h2 className="text-4xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400">Junte‑se ao Futuro da Aprendizagem!</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Explore caminhos mais eficientes de estudo, engajamento e crescimento — torne o digital um aliado estratégico para você.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-indigo-500/30"
        >
          Fale Conosco
        </a>
      </section>
    </div>
  );
}
