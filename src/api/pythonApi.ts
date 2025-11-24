// src/api/pythonApi.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, 
});

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("Erro na API:", error.response?.data || error.message);
  } else {
    console.error("Erro desconhecido:", error);
  }
  throw error; 
};

export const startChat = async () => {
  try {
    const response = await api.post("/chat/start");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const submitAnswer = async (sessionId: string, answer: string) => {
  try {
    const response = await api.post("/chat/answer", {
      session_id: sessionId,
      answer,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
