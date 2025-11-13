import React, { useState, useEffect } from "react";
import { startChat, submitAnswer } from "../api/chat";
import type { ChatState } from "../api/chat";
import Message from "../components/Message";

const Chatbot: React.FC = () => {
  const [sessionId] = useState<string>(() =>
    Math.random().toString(36).substr(2, 9)
  );
  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const aiName = "Nora";
  const aiAvatar =
    "https://api.dicebear.com/9.x/bottts/svg?seed=Nora&backgroundColor=b6e3f4"; // avatar gerado

  useEffect(() => {
    initChat();
  }, []);

  const initChat = async () => {
    setLoading(true);
    try {
      const data = await startChat(sessionId);
      setChatState(data);
      setMessages([
        { text: "✨ Oi! Eu sou a Nora. Vamos descobrir sua carreira ideal? 💼", isUser: false },
      ]);
    } catch (error) {
      console.error(error);
      setMessages([{ text: "Erro ao conectar com o servidor 😕", isUser: false }]);
    }
    setLoading(false);
  };

  const handleAnswer = async (optionIndex: number) => {
    if (!chatState || !chatState.current_question) return;
    setLoading(true);

    const userMsg = chatState.current_question.options[optionIndex].text;
    setMessages((prev) => [...prev, { text: userMsg, isUser: true }]);

    try {
      const data = await submitAnswer(
        sessionId,
        chatState.current_question.id,
        optionIndex
      );
      setChatState(data);

      if (data.finished) {
        setMessages((prev) => [
          ...prev,
          { text: `🎯 Sua carreira sugerida: ${data.suggested_career}`, isUser: false },
        ]);
      } else if (data.current_question) {
        setMessages((prev) => [
          ...prev,
          { text: data.current_question.question, isUser: false },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { text: "Erro ao processar resposta.", isUser: false }]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-xl max-w-md mx-auto border border-gray-100">
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
      {chatState && chatState.current_question && !chatState.finished && (
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="grid grid-cols-1 gap-2">
            {chatState.current_question.options.map((opt, i) => (
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

      {chatState && chatState.finished && (
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
