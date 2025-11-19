import { useEffect, useState } from "react";
import Message from "../components/Message";
import { useTheme } from "../context/useTheme";
import { Bot, Loader2 } from "lucide-react";

interface BackendQuestion {
  id: number;
  text: string;
  area_id: number | null;
}

interface ResultArea {
  area_id: number;
  area_name: string;
  total_score?: number;
  avg_score: number;
}

interface ChatState {
  session_id: string;
  questions: BackendQuestion[];
  currentIndex: number;
  scores: { area_id: number; score: number }[];
  finished: boolean;
  results: {
    user_id: string;
    summary: ResultArea[];
    best_areas: ResultArea[];
  } | null;
}

export default function Chatbot() {
  const { isDark } = useTheme();

  const API_BASE = import.meta.env.VITE_API_URL || "https://noraia-sm77.onrender.com";

  const [sessionId] = useState(() =>
    Math.random().toString(36).substring(2, 9)
  );

  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const aiName = "Nora";
  const aiAvatar =
    "https://api.dicebear.com/9.x/bottts/svg?seed=Nora&backgroundColor=b6e3f4";

  useEffect(() => {
    initChat();

  }, []);

  const initChat = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/questions`);
      if (!res.ok) {
        throw new Error(`Failed to load questions (${res.status})`);
      }
      const questions: BackendQuestion[] = await res.json();

      const initialState: ChatState = {
        session_id: sessionId,
        questions,
        currentIndex: 0,
        scores: [],
        finished: false,
        results: null,
      };

      setChatState(initialState);

      setMessages([
        {
          text: "✨ Oi! Eu sou a Nora. Vamos descobrir sua carreira ideal? 💼",
          isUser: false,
        },
        {
          text:
            questions.length > 0
              ? questions[0].text
              : "Nenhuma pergunta encontrada no servidor.",
          isUser: false,
        },
      ]);
    } catch (err) {
      console.error("initChat error:", err);
      setMessages([
        { text: "Erro ao conectar ao servidor. Tente novamente mais tarde.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (scoreValue: number) => {
    if (!chatState) return;
    const { questions, currentIndex, scores } = chatState;
    const question = questions[currentIndex];
    if (!question) return;

    setMessages((prev) => [
      ...prev,
      { text: `Nota: ${scoreValue}`, isUser: true },
    ]);

    const newScores = [...scores, { area_id: question.area_id ?? 0, score: scoreValue }];

    const isLast = currentIndex + 1 >= questions.length;

    const nextIndex = isLast ? currentIndex : currentIndex + 1;
    setChatState({
      ...chatState,
      scores: newScores,
      currentIndex: nextIndex,
    });

    if (!isLast) {
      const nextQ = questions[nextIndex];
      setMessages((prev) => [
        ...prev,
        { text: nextQ.text, isUser: false },
      ]);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        user_id: sessionId,
        responses: newScores.map((s) => ({
          area_id: s.area_id,
          score: s.score,
        })),
      };

      const postRes = await fetch(`${API_BASE}/responses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!postRes.ok) {
        const errText = await safeReadText(postRes);
        console.error("POST /responses failed:", postRes.status, errText);
        setMessages((prev) => [
          ...prev,
          { text: "Erro ao salvar suas respostas. Tente novamente.", isUser: false },
        ]);
        setLoading(false);
        return;
      }

      const resultsRes = await fetch(`${API_BASE}/results/${encodeURIComponent(sessionId)}`);
      if (!resultsRes.ok) {
        const errText = await safeReadText(resultsRes);
        console.error("GET /results failed:", resultsRes.status, errText);
        setMessages((prev) => [
          ...prev,
          { text: "Erro ao recuperar resultados. Tente novamente.", isUser: false },
        ]);
        setLoading(false);
        return;
      }

      const resultsData = await resultsRes.json();

      setChatState((prev) =>
        prev
          ? { ...prev, finished: true, results: resultsData }
          : prev
      );

      const best = resultsData?.best_areas ?? [];
      if (best.length === 0) {
        setMessages((prev) => [
          ...prev,
          { text: "Teste finalizado. Não foi possível determinar uma área.", isUser: false },
        ]);
      } else {
        const names = best.map((b: ResultArea) => b.area_name).join(", ");
        setMessages((prev) => [
          ...prev,
          { text: `🎯 Sua(s) melhor(es) área(s): ${names}`, isUser: false },
        ]);
      }
    } catch (err) {
      console.error("finalize error:", err);
      setMessages((prev) => [
        ...prev,
        { text: "Erro no processo final. Tente novamente.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const safeReadText = async (res: Response) => {
    try {
      return await res.text();
    } catch {
      return "";
    }
  };

  const currentQuestion =
    chatState && chatState.questions.length > 0
      ? chatState.questions[chatState.currentIndex]
      : null;

  return (
    <main
      className={`min-h-[calc(100vh-160px)] flex justify-center items-center px-4 py-10 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A]" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-2xl rounded-2xl shadow-lg border transition-colors duration-500 backdrop-blur-sm ${
          isDark ? "bg-[#2A2A2A] border-[#333]" : "bg-white/90 border-gray-200"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center gap-3 px-6 py-4 border-b transition-colors duration-500 ${
            isDark ? "border-[#333]" : "border-gray-200"
          }`}
        >
          <img
            src={aiAvatar}
            className="w-12 h-12 rounded-full border"
            alt={aiName}
          />

          <div>
            <h2
              className={`text-lg font-semibold transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {aiName}
            </h2>
            <p className="text-green-500 text-xs">Online agora</p>
          </div>

          <div className="ml-auto text-blue-600 dark:text-[#00A67E]">
            <Bot className="w-6 h-6" />
          </div>
        </div>

        {/* Messages */}
        <div className="h-[500px] overflow-y-auto px-6 py-4 space-y-3 scroll-smooth">
          {messages.map((msg, i) => (
            <Message
              key={i}
              text={msg.text}
              isUser={msg.isUser}
              name={!msg.isUser ? aiName : undefined}
              avatar={!msg.isUser ? aiAvatar : undefined}
            />
          ))}

          {loading && (
            <div className="flex justify-center pt-2">
              <Loader2 className="animate-spin w-6 h-6 text-gray-400" />
            </div>
          )}
        </div>

        {/* Options (1..5) */}
        {!chatState?.finished && currentQuestion && (
          <div
            className={`px-6 py-4 border-t transition-colors duration-500 ${
              isDark ? "border-[#333]" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col gap-3">
              <div className="text-sm text-gray-500 mb-2">{currentQuestion.text}</div>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    disabled={loading}
                    onClick={() => handleAnswer(n)}
                    className={`flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
                      isDark
                        ? "bg-[#00A67E] text-white hover:bg-[#007a5e]"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Finalizado */}
        {chatState?.finished && (
          <div
            className={`px-6 py-4 border-t transition-colors duration-500 ${
              isDark ? "border-[#333]" : "border-gray-200"
            }`}
          >
            <div className="mb-3">
              {chatState.results?.best_areas?.length ? (
                <>
                  <div className="text-sm text-gray-600 mb-2">Resultado:</div>
                  <div className="font-semibold">
                    {chatState.results.best_areas.map((b) => b.area_name).join(", ")}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Média: {chatState.results.best_areas[0].avg_score}
                  </div>
                </>
              ) : (
                <div className="text-sm text-gray-600">Sem resultado definido.</div>
              )}
            </div>

            <button
              onClick={() => window.location.reload()}
              className={`w-full py-3 rounded-full text-white font-medium transition-all duration-300 ${
                isDark ? "bg-[#00A67E] hover:bg-[#007a5e]" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              🔄 Fazer outro teste
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
