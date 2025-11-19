import { useTheme } from "../context/useTheme";
import {
  BookOpen,
  Clock,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Layers,
  Star,
  Trophy,
} from "lucide-react";

export default function Dashboard() {
  const { isDark } = useTheme();

  const cursos = [
  {
    nome: "Python Completo — Do Zero ao Avançado",
    progresso: 68,
    horas: 60,
    categoria: "Programação",
    nivel: "Intermediário",
    status: "Em andamento",
  },
  {
    nome: "Estruturas de Dados e Algoritmos",
    progresso: 25,
    horas: 40,
    categoria: "Back-end",
    nivel: "Avançado",
    status: "Iniciado",
  },
  {
    nome: "JavaScript Moderno + Projetos",
    progresso: 82,
    horas: 45,
    categoria: "Front-end",
    nivel: "Intermediário",
    status: "Quase concluído",
  },
  {
    nome: "Clean Code — Boas Práticas",
    progresso: 12,
    horas: 20,
    categoria: "Carreira Dev",
    nivel: "Avançado",
    status: "Iniciado",
  },
  {
    nome: "Marketing Digital para Iniciantes",
    progresso: 50,
    horas: 30,
    categoria: "Marketing",
    nivel: "Iniciante",
    status: "Em andamento",
  },
  {
    nome: "Finanças Pessoais e Investimentos",
    progresso: 30,
    horas: 25,
    categoria: "Negócios",
    nivel: "Intermediário",
    status: "Em andamento",
  },
  {
    nome: "Excel Avançado — Planilhas e Dashboards",
    progresso: 70,
    horas: 35,
    categoria: "Produtividade",
    nivel: "Avançado",
    status: "Em andamento",
  },
  {
    nome: "Inglês Avançado — Conversação",
    progresso: 40,
    horas: 50,
    categoria: "Idiomas",
    nivel: "Avançado",
    status: "Em andamento",
  },
  {
    nome: "Espanhol Básico para Viagens",
    progresso: 90,
    horas: 15,
    categoria: "Idiomas",
    nivel: "Iniciante",
    status: "Quase concluído",
  },
  {
    nome: "Fotografia Digital — Técnicas e Edição",
    progresso: 20,
    horas: 40,
    categoria: "Arte",
    nivel: "Iniciante",
    status: "Iniciado",
  },
  {
    nome: "Design Gráfico com Canva",
    progresso: 55,
    horas: 20,
    categoria: "Arte",
    nivel: "Iniciante",
    status: "Em andamento",
  },
  {
    nome: "Mindfulness e Meditação",
    progresso: 60,
    horas: 10,
    categoria: "Saúde e Bem-estar",
    nivel: "Iniciante",
    status: "Em andamento",
  },
  {
    nome: "Yoga para Iniciantes",
    progresso: 80,
    horas: 15,
    categoria: "Saúde e Bem-estar",
    nivel: "Iniciante",
    status: "Quase concluído",
  },
  {
    nome: "Gestão de Projetos com Scrum",
    progresso: 35,
    horas: 30,
    categoria: "Negócios",
    nivel: "Intermediário",
    status: "Em andamento",
  },
  {
    nome: "Desenvolvimento de Apps com Flutter",
    progresso: 10,
    horas: 50,
    categoria: "Programação",
    nivel: "Intermediário",
    status: "Iniciado",
  },
  {
    nome: "Inteligência Artificial e Machine Learning",
    progresso: 5,
    horas: 60,
    categoria: "Tecnologia",
    nivel: "Avançado",
    status: "Iniciado",
  },
  {
    nome: "História da Arte Moderna",
    progresso: 45,
    horas: 25,
    categoria: "Arte",
    nivel: "Intermediário",
    status: "Em andamento",
  },
  {
    nome: "Comunicação e Oratória",
    progresso: 75,
    horas: 20,
    categoria: "Desenvolvimento Pessoal",
    nivel: "Intermediário",
    status: "Em andamento",
  },
  {
    nome: "Nutrição e Alimentação Saudável",
    progresso: 50,
    horas: 15,
    categoria: "Saúde e Bem-estar",
    nivel: "Iniciante",
    status: "Em andamento",
  },
  {
    nome: "Criação de Conteúdo para Redes Sociais",
    progresso: 60,
    horas: 20,
    categoria: "Marketing",
    nivel: "Intermediário",
    status: "Em andamento",
  },
];


  return (
    <main
      className={`min-h-screen px-6 lg:px-16 py-12 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 flex items-center gap-3">
        <BarChart3 className="w-8 h-8 text-blue-600 dark:text-[#00A67E]" />
        Seu Painel de Cursos
      </h1>

      {/* Resumo geral */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        <div className={`rounded-2xl shadow-md p-6 ${isDark ? "bg-[#2A2A2A]" : "bg-gray-50"}`}>
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-blue-600 dark:text-[#00A67E]" /> Cursos ativos
          </h3>
          <p className="text-3xl font-bold">{cursos.length}</p>
        </div>

        <div className={`rounded-2xl shadow-md p-6 ${isDark ? "bg-[#2A2A2A]" : "bg-gray-50"}`}>
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-[#00A67E]" /> Média de progresso
          </h3>
          <p className="text-3xl font-bold">
            {Math.round(cursos.reduce((acc, c) => acc + c.progresso, 0) / cursos.length)}%
          </p>
        </div>

        <div className={`rounded-2xl shadow-md p-6 ${isDark ? "bg-[#2A2A2A]" : "bg-gray-50"}`}>
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-blue-600 dark:text-[#00A67E]" /> Horas somadas
          </h3>
          <p className="text-3xl font-bold">{cursos.reduce((a, b) => a + b.horas, 0)}h</p>
        </div>

        <div className={`rounded-2xl shadow-md p-6 ${isDark ? "bg-[#2A2A2A]" : "bg-gray-50"}`}>
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-blue-600 dark:text-[#00A67E]" /> Maior progresso
          </h3>
          <p className="text-xl font-semibold">
            {cursos.reduce((a, b) => (a.progresso > b.progresso ? a : b)).nome}
          </p>
        </div>
      </section>

      {/* Lista de cursos */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Cursos em andamento</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cursos.map((curso, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-md p-6 transition duration-300 hover:shadow-lg ${
                isDark ? "bg-[#2A2A2A]" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-7 h-7 text-blue-600 dark:text-[#00A67E]" />
                <h3 className="text-xl font-semibold">{curso.nome}</h3>
              </div>

              <div className="mb-3 flex justify-between text-sm">
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>Progresso</span>
                <span className={isDark ? "text-gray-100" : "text-gray-800"}>{curso.progresso}%</span>
              </div>

              <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-blue-600 dark:bg-[#00A67E] transition-all"
                  style={{ width: `${curso.progresso}%` }}
                />
              </div>

              <div className={`text-sm flex flex-col gap-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> {curso.horas}h totais</p>
                <p className="flex items-center gap-2"><Layers className="w-4 h-4" /> {curso.categoria}</p>
                <p className="flex items-center gap-2"><Star className="w-4 h-4" /> Nível {curso.nivel}</p>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> {curso.status}</p>
              </div>

              {/* Botão de continuar curso */}
              <button
                className={`mt-4 px-9 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  isDark
                    ? "bg-[#00A67E] hover:bg-[#00c28f] text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Continuar curso
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
