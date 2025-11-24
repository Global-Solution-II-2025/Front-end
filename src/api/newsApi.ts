import type { Noticia } from "../types/gnews";

export const fetchNoticias = async (): Promise<Noticia[]> => {
  try {
    const response = await fetch(
      "https://gnews.io/api/v4/top-headlines?topic=technology&lang=pt&token=ea926c3e5b6b648f16e5ad3517526f82"
    );
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};
