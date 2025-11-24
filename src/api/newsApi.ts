import type { Noticia } from "../types/gnews";

export const fetchNoticias = async (): Promise<Noticia[]> => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?topic=technology&lang=pt&token=${import.meta.env.VITE_GNEWS_API_KEY}`
    );
    const data = await response.json();
    return data.articles || [];
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    return [];
  }
};
