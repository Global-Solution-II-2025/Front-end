export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-16 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="text-center max-w-4xl text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Conecte-se às melhores oportunidades de{" "}
          <span className="text-blue-600 dark:text-blue-400">carreira</span>
        </h1>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Descubra cursos, trilhas e oportunidades que impulsionam seu crescimento profissional.  
          A jornada para o sucesso começa aqui.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href="/trilhas"
            className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100 font-medium px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition w-full sm:w-auto text-center"
          >
            Montar rotina
          </a>
          <a
            href="/cursos"
            className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition w-full sm:w-auto text-center"
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
          className="w-full rounded-2xl shadow-lg object-cover"
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
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
