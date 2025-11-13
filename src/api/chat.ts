const API_URL = "http://127.0.0.1:8000/api";

export interface Question {
  id: number;
  question: string;
  options: { text: string; weights: { [key: string]: number } }[];
}

export interface ChatState {
  session_id: string;
  current_question: Question | null;
  scores: { [key: string]: number };
  finished: boolean;
  suggested_career: string | null;
}

export async function startChat(session_id: string): Promise<ChatState> {
  const response = await fetch(`${API_URL}/start-chat?session_id=${encodeURIComponent(session_id)}`);
  
  if (!response.ok) {
    throw new Error("Erro ao iniciar o chat");
  }

  const data: ChatState = await response.json();
  return data;
}

export async function submitAnswer(
  session_id: string,
  question_id: number,
  option_index: number
): Promise<ChatState> {
  const response = await fetch(`${API_URL}/submit-answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_id,
      question_id,
      option_index,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar a resposta");
  }

  const data: ChatState = await response.json();
  return data;
}
