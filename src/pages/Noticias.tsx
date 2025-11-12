import { useEffect, useState } from "react";
import { fetchNoticias } from "../api/gnews.ts";
import type { Noticia } from "../types/gnews";
import { useTheme } from "../context/useTheme";

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
        className={`flex justify-center items-center min-h-[80vh] transition-colors duration-500 ${
          isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
        }`}
      >
        <p className="text-lg font-semibold">Carregando notícias...</p>
      </div>
    );
  }

  return (
    <div
      className={`max-w-6xl mx-auto px-4 py-8 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-6 text-center transition-colors duration-500 ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Notícias de Tecnologia
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <a
            key={index}
            href={noticia.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg shadow-md overflow-hidden border transition-all duration-500 transform hover:scale-105 ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200"
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
            <div className="p-4">
              <h2
                className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
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
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {new Date(noticia.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
