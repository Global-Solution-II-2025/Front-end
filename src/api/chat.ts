// src/api/chat.ts

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://noraia-sm77.onrender.com", 
});

// Inicia uma nova conversa no backend
export const startChat = async () => {
  const response = await api.post("/chat/start");
  return response.data;
};

// Envia uma resposta do usuário para a API
export const submitAnswer = async (sessionId: string, answer: string) => {
  const response = await api.post("/chat/answer", {
    session_id: sessionId,
    answer,
  });
  return response.data;
};