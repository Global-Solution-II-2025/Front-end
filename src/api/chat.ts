const API_URL = "https://noraia-sm77.onrender.com";

export async function startChat(sessionId: string) {
  const res = await fetch(`${API_URL}/api/start-chat?session_id=${sessionId}`);
  return res.json();
}

export async function submitAnswer(body: {
  session_id: string;
  question_id: number;
  option_index: number;
}) {
  const res = await fetch(`${API_URL}/api/submit-answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return res.json();
}
