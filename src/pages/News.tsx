import { useEffect, useState } from "react";
import { fetchNoticias } from "../api/gnews.ts";
import type { Noticia } from "../types/gnews";
import { useTheme } from "../context/useTheme.ts";

export default function Noticias() {
  const { isDark } = useTheme();
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNoticias = async () => {
      const articles = await fetchNoticias();
      setNoticias(articles);
      setLoading(false);
    };
    getNoticias();
  }, []);

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center min-h-[calc(100vh-160px)] transition-colors duration-500 ${
          isDark ? "bg-[#1A1A1A] text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <p className="text-lg font-semibold">Carregando notícias...</p>
      </div>
    );
  }

  return (
    <main
      className={`flex flex-col items-center min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-16 py-16 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center transition-colors duration-500 ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Notícias de Tecnologia
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
        {noticias.map((noticia, index) => (
          <a
            key={index}
            href={noticia.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl shadow-md overflow-hidden border transition-all duration-500 transform hover:scale-105 ${
              isDark
                ? "bg-[#2A2A2A] border-[#1A1A1A] text-gray-200"
                : "bg-white border-gray-200 text-gray-800"
            }`}
          >
            {noticia.image && (
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2
                className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-blue-600"
                }`}
              >
                {noticia.title}
              </h2>
              <p
                className={`text-sm mb-2 line-clamp-3 transition-colors duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {noticia.description}
              </p>
              <span
                className={`text-xs transition-colors duration-500 ${
                  isDark ? "text-[#00A67E]" : "text-gray-500"
                }`}
              >
                {new Date(noticia.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
