import React, { useState, useEffect } from "react";
import { startChat, submitAnswer } from "../api/chat";
import Message from "../components/Message";


interface CareerProfile {
  riasec_code: string;
  career_name: string;
  description: string;
}

interface ChatState {
  session_id: string;
  current_question_id: number | null;
  scores: Record<string, number>;
  finished: boolean;
  suggested_profile: CareerProfile | null;
}

// ======================
// PERGUNTAS E OPÇÕES LOCAL
// ======================
const QUESTIONS = [
  {
    id: 1,
    question: "Você prefere trabalhar ao ar livre ou em um escritório?",
    options: [
      { text: "Ao ar livre", riasec: "R" },
      { text: "Em um escritório", riasec: "C" }
    ]
  },
  {
    id: 2,
    question: "Você gosta de consertar e montar coisas?",
    options: [
      { text: "Sim, gosto bastante", riasec: "R" },
      { text: "Não muito", riasec: "A" }
    ]
  },
  {
    id: 3,
    question: "Você gosta de estudar matemática e lógica?",
    options: [
      { text: "Sim", riasec: "I" },
      { text: "Prefiro evitar", riasec: "S" }
    ]
  },
  {
    id: 4,
    question: "Prefere ajudar pessoas diretamente?",
    options: [
      { text: "Sim, gosto muito", riasec: "S" },
      { text: "Prefiro trabalhar sozinho", riasec: "I" }
    ]
  }
];

// ======================
// COMPONENTE CHATBOT
// ======================
const Chatbot: React.FC = () => {
  const [sessionId] = useState(() =>
    Math.random().toString(36).substring(2, 9)
  );

  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [loading, setLoading] = useState(false);

  const aiName = "Nora";
  const aiAvatar =
    "https://api.dicebear.com/9.x/bottts/svg?seed=Nora&backgroundColor=b6e3f4";

useEffect(() => {
  initChat();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const initChat = async () => {
    setLoading(true);
    try {
      const data = await startChat(sessionId);
      setChatState(data);

      const firstQuestion = QUESTIONS.find(q => q.id === data.current_question_id);

      setMessages([
        { text: "✨ Oi! Eu sou a Nora. Vamos descobrir sua carreira ideal? 💼", isUser: false },
        { text: firstQuestion?.question ?? "Primeira pergunta não encontrada!", isUser: false }
      ]);
    } catch (error) {
      console.error(error);
      setMessages([{ text: "Erro ao conectar no servidor 😕", isUser: false }]);
    }
    setLoading(false);
  };

  const handleAnswer = async (optionIndex: number) => {
    if (!chatState) return;

    const question = QUESTIONS.find(q => q.id === chatState.current_question_id);
    if (!question) return;

    const chosen = question.options[optionIndex];

    // Mensagem do usuário
    setMessages(prev => [...prev, { text: chosen.text, isUser: true }]);
    setLoading(true);

    try {
      const data = await submitAnswer({
        session_id: sessionId,
        question_id: question.id,
        option_index: optionIndex
      });

      setChatState(data);

      // Se terminou
      if (data.finished) {
        const career = data?.suggested_profile?.career_name ?? "Indefinida";

        setMessages(prev => [
          ...prev,
          { text: `🎯 Sua carreira recomendada é: *${career}*`, isUser: false }
        ]);

        setLoading(false);
        return;
      }

      // Próxima pergunta
      const nextQuestion = QUESTIONS.find(q => q.id === data.current_question_id);

      setMessages(prev => [
        ...prev,
        { text: nextQuestion?.question ?? "Pergunta não encontrada!", isUser: false }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Erro ao enviar resposta.", isUser: false }]);
    }

    setLoading(false);
  };

  const currentQuestion = chatState
    ? QUESTIONS.find(q => q.id === chatState.current_question_id)
    : null;

  return (
    <div className="flex flex-col h-full bg-linear-to-b from-blue-50 to-white rounded-2xl shadow-xl max-w-md mx-auto border border-gray-100">
      
      {/* Cabeçalho */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border-b border-gray-100 rounded-t-2xl">
        <img src={aiAvatar} alt={aiName} className="w-12 h-12 rounded-full border" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{aiName}</h2>
          <p className="text-xs text-green-500">Online agora</p>
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            isUser={msg.isUser}
            name={!msg.isUser ? aiName : undefined}
            avatar={!msg.isUser ? aiAvatar : undefined}
          />
        ))}

        {loading && (
          <div className="text-center text-gray-400 text-sm animate-pulse">
            Nora está pensando...
          </div>
        )}
      </div>

      {/* Opções */}
      {currentQuestion && !chatState?.finished && (
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="grid grid-cols-1 gap-2">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 disabled:opacity-50"
                disabled={loading}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Finalizado */}
      {chatState?.finished && (
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
          >
            🔄 Fazer outro teste
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
