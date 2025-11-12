import { useTheme } from "../context/useTheme";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-16 py-16 transition-colors duration-500 ${
        isDark ? "bg-gray-900" : "bg-white"
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
          <span className={`${isDark ? "text-blue-400" : "text-blue-600"}`}>
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
                ? "bg-blue-500 text-gray-100 hover:bg-blue-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Montar rotina
          </a>
          <a
            href="/cursos"
            className={`font-medium px-6 py-3 rounded-full w-full sm:w-auto text-center border transition-colors duration-500 ${
              isDark
                ? "border-blue-400 text-blue-400 hover:bg-gray-800"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            Ver rotina
          </a>
        </div>
      </section>

      {/* Image Banner */}
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
          },
          {
            title: "Trilhas personalizadas",
            text: "Monte sua jornada de aprendizado com base no seu ritmo e área de interesse.",
          },
          {
            title: "Oportunidades reais",
            text: "Conecte-se com empresas e vagas que valorizam o seu talento.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-colors duration-500 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-lg sm:text-xl font-semibold mb-3 transition-colors duration-500 ${
                isDark ? "text-blue-400" : "text-blue-600"
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
    </main>
  );
}
