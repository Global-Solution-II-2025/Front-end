// Commit 1: Estrutura da Home + Hero
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-gray-800 px-4 sm:px-6 lg:px-16 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Conecte-se às melhores oportunidades de <span className="text-blue-600">carreira</span>
        </h1>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Descubra cursos, trilhas e oportunidades que impulsionam seu crescimento profissional.  
          A jornada para o sucesso começa aqui.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href="/trilhas"
            className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            Explorar Trilhas
          </a>
          <a
            href="/cursos"
            className="border border-blue-600 text-blue-600 font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition w-full sm:w-auto text-center"
          >
            Ver Cursos
          </a>
        </div>
      </section>
    </main>
  );
}
