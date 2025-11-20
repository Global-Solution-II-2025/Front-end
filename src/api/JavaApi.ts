// src/api/javaApi.ts

export interface Usuario {
  nome: string;
  email: string;
  senha?: string;
  dataNascimento: string;
  aceitarTermos?: boolean;
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  nome: string;
}

const API_URL = "https://neuralup-java-3.onrender.com/";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = (await response.json()) as { error?: string; message?: string };
    const message = errorData.error || errorData.message || "Erro inesperado";
    throw new Error(message);
  }

  return (await response.json()) as T;
}

export const usuarioApi = {
  login: (data: LoginPayload) =>
    request<LoginResponse>(`${API_URL}/usuario/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  criarUsuario: (data: Usuario) =>
    request<Usuario>(`${API_URL}/usuario`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  getUsuario: (email: string) =>
    request<Usuario>(`${API_URL}/usuario/${email}`),

  getUsuarios: () =>
    request<Usuario[]>(`${API_URL}/usuario`),

  updateUsuario: (email: string, data: Partial<Usuario>) =>
    request<Usuario>(`${API_URL}/usuario/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  deleteUsuario: (email: string) =>
    request<{ success: boolean }>(`${API_URL}/usuario/${email}`, {
      method: "DELETE",
    }),
};
