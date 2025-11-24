export interface Usuario {
  nomeCompleto: string;
  email: string;
  senha?: string;
  dataNascimento: string;
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  nomeCompleto: string;
}

const API_URL = "https://login-java.onrender.com";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include", 
    });

    if (response.status === 401) {
      throw new Error("E-mail ou senha inválidos.");
    }
    if (response.status === 403) {
      throw new Error("Acesso negado.");
    }

    if (!response.ok) {
      let message = "Erro inesperado";

      try {
        const errorJson = await response.json();
        message =
          errorJson.error ||
          errorJson.message ||
          JSON.stringify(errorJson) ||
          message;
      } catch (err: unknown) {
        console.error("Erro na requisição:", err);
      }

      throw new Error(message);
    }

    return response.json() as Promise<T>;
  } catch (err: unknown) {
    console.error("Erro na requisição:", err);
    if (err instanceof TypeError) {
      // Erro de rede / CORS
      throw new Error(
        "Falha ao conectar com o servidor. Verifique se a API está online."
      );
    }
    throw err;
  }
}

export const usuarioApi = {
  login: (data: LoginPayload) =>
    request<LoginResponse>(`${API_URL}/usuario/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  criarUsuario: (data: Usuario) =>
    request<LoginResponse>(`${API_URL}/usuario/cadastrar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
};

