import { useTheme } from "../context/useTheme";
import { Briefcase, BookOpen, Star, Users, Compass, Rocket } from "lucide-react";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-16 py-16 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A]" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`text-center max-w-4xl transition-colors duration-500 ${
          isDark ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Conecte-se às melhores oportunidades de{" "}
          <span className={`${isDark ? "text-[#00A67E]" : "text-blue-600"}`}>
            carreira
          </span>
        </h1>
        <p
          className={`text-base sm:text-lg md:text-lg mb-10 max-w-2xl mx-auto transition-colors duration-500 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Descubra cursos, trilhas e oportunidades que impulsionam seu crescimento profissional.  
          A jornada para o sucesso começa aqui.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href="/trilhas"
            className={`font-medium px-6 py-3 rounded-full w-full sm:w-auto text-center transition-colors duration-500 ${
              isDark
                ? "bg-[#00A67E] text-gray-100 hover:bg-[#007a5e]"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Montar rotina
          </a>
          <a
            href="/cursos"
            className={`font-medium px-6 py-3 rounded-full w-full sm:w-auto text-center border transition-colors duration-500 ${
              isDark
                ? "border-[#00A67E] text-[#00A67E] hover:bg-[#292929]"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            Ver notícias
          </a>
        </div>
      </section>

      {/* Banner */}
      <section className="mt-12 sm:mt-16 max-w-5xl w-full">
        <img
          src="https://blocktimecoworking.com.br/wp-content/uploads/2024/05/blocktime-coworking-espaco-negocio-1024x684.png"
          alt="Profissionais crescendo na carreira"
          className="w-full rounded-2xl shadow-lg object-cover transition-shadow duration-500"
        />
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20 max-w-6xl w-full text-center">
        {[
          {
            title: "Cresça com propósito",
            text: "Encontre cursos que realmente te aproximam dos seus objetivos profissionais.",
            icon: <Rocket className="w-8 h-8" />,
          },
          {
            title: "Trilhas personalizadas",
            text: "Monte sua jornada de aprendizado com base no seu ritmo e área de interesse.",
            icon: <Compass className="w-8 h-8" />,
          },
          {
            title: "Oportunidades reais",
            text: "Conecte-se com empresas e vagas que valorizam o seu talento.",
            icon: <Briefcase className="w-8 h-8" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-colors duration-500 ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            <div
              className={`flex justify-center mb-4 ${
                isDark ? "text-[#00A67E]" : "text-blue-600"
              }`}
            >
              {item.icon}
            </div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-3 transition-colors duration-500 ${
                isDark ? "text-[#00A67E]" : "text-blue-600"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* Sobre a plataforma */}
      <section className="max-w-5xl w-full mt-20 text-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-8 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Por que escolher nossa plataforma?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-10 h-10" />,
              title: "Comunidade ativa",
              text: "Milhares de pessoas aprendendo e compartilhando conhecimento.",
            },
            {
              icon: <BookOpen className="w-10 h-10" />,
              title: "Conteúdo de qualidade",
              text: "Cursos selecionados e sempre atualizados com o mercado.",
            },
            {
              icon: <Star className="w-10 h-10" />,
              title: "Reputação sólida",
              text: "Avaliações reais de usuários para guiar suas escolhas.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-sm transition-colors duration-500 ${
                isDark ? "bg-[#2A2A2A]" : "bg-white"
              }`}
            >
              <div
                className={`flex justify-center mb-4 ${
                  isDark ? "text-[#00A67E]" : "text-blue-600"
                }`}
              >
                {item.icon}
              </div>
              <h3
                className={`font-semibold text-lg mb-2 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="max-w-6xl w-full mt-20 text-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-6 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Categorias populares
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Tecnologia",
            "Marketing",
            "Design",
            "Produtividade",
            "Carreira",
            "Negócios",
            "Soft Skills",
            "Comunicação",
          ].map((cat, i) => (
            <span
              key={i}
              className={`px-5 py-2 rounded-full border text-sm transition-colors duration-500 cursor-pointer ${
                isDark
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="max-w-6xl w-full mt-20 text-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-6 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          O que nossos usuários dizem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Mariana",
              text: "As trilhas mudaram meu jeito de aprender. Muito organizado e eficiente!",
            },
            {
              name: "Lucas",
              text: "Consegui minha primeira oportunidade usando as recomendações da plataforma.",
            },
            {
              name: "Beatriz",
              text: "A comunidade e os conteúdos são excelentes. Recomendo muito!",
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow-sm transition-colors duration-500 ${
                isDark ? "bg-[#2A2A2A]" : "bg-white"
              }`}
            >
              <p
                className={`italic mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "{p.text}"
              </p>
              <h4
                className={`font-semibold ${
                  isDark ? "text-[#00A67E]" : "text-blue-600"
                }`}
              >
                — {p.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="max-w-4xl w-full text-center mt-24 mb-6">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-4 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Pronto para evoluir sua carreira?
        </h2>
        <p
          className={`mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Comece hoje mesmo e dê o próximo passo rumo ao seu futuro profissional.
        </p>

        <a
          href="/trilhas"
          className={`px-8 py-4 rounded-full text-lg font-medium transition-colors duration-500 ${
            isDark
              ? "bg-[#00A67E] text-white hover:bg-[#007a5e]"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Começar agora
        </a>
      </section>
    </main>
  );
}
