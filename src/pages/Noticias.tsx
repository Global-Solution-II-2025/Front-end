import { useEffect, useState } from "react";
import { fetchNoticias } from "../api/gnews.ts";
import type { Noticia } from "../types/gnews";

export default function Noticias() {
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
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-lg font-semibold">Carregando notícias...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Notícias de Tecnologia</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia, index) => (
          <a
            key={index}
            href={noticia.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {noticia.image && (
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{noticia.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">
                {noticia.description}
              </p>
              <span className="text-xs text-gray-500">
                {new Date(noticia.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
