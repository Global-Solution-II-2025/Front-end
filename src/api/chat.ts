import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    weights: { [key: string]: number };
  }[];
}

export interface ChatState {
  session_id: string;
  current_question: Question | null;
  scores: { [key: string]: number };
  finished: boolean;
  suggested_career: string | null;
}

export async function startChat(session_id: string): Promise<ChatState> {
  const response = await axios.get<ChatState>(`${API_URL}/start-chat`, {
    params: { session_id },
  });
  return response.data;
}

export async function submitAnswer(
  session_id: string,
  question_id: number,
  option_index: number
): Promise<ChatState> {
  const response = await axios.post<ChatState>(`${API_URL}/submit-answer`, {
    session_id,
    question_id,
    option_index,
  });
  return response.data;
}
