// pages/faq.tsx
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/useTheme";

const faqs = [
  {
    question: "O que é o NeuralUp?",
    answer:
      "O NeuralUp é uma plataforma de aprendizado inteligente com trilhas personalizadas e recomendações baseadas em IA para melhorar seu desempenho cognitivo e profissional.",
  },
  {
    question: "Como funciona a IA do NeuralUp?",
    answer:
      "A IA analisa seu comportamento e progresso para sugerir conteúdos e exercícios que aumentem seu foco, memória e produtividade de forma personalizada.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim! Todos os dados são criptografados e utilizados apenas para melhorar sua experiência na plataforma, respeitando a sua privacidade.",
  },
  {
    question: "Em quais dispositivos posso acessar o NeuralUp?",
    answer:
      "Você pode acessar via navegador em desktop ou dispositivos móveis, com uma experiência otimizada para todos os tamanhos de tela.",
  },
  {
    question: "Como posso acompanhar meu progresso?",
    answer:
      "O NeuralUp oferece dashboards e gráficos que mostram seu desempenho em cada trilha, permitindo acompanhar sua evolução ao longo do tempo.",
  },
  {
    question: "Posso personalizar meus objetivos?",
    answer:
      "Sim! Você pode definir metas e áreas de foco, e a plataforma vai adaptar recomendações e exercícios para atingir esses objetivos.",
  },
  {
    question: "Há suporte caso eu tenha dúvidas?",
    answer:
      "Sim! Você pode entrar em contato via chat ou e-mail, e nossa equipe estará pronta para ajudar com qualquer questão ou dificuldade.",
  },
  {
    question: "Como melhorar minha experiência na plataforma?",
    answer:
      "Para tirar o máximo proveito, complete as trilhas recomendadas, acompanhe seu progresso regularmente e interaja com os exercícios de forma consistente.",
  },
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-6 py-16 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-12 transition-colors duration-500 ${
          isDark ? "text-indigo-400" : "text-indigo-600"
        }`}
      >
        Perguntas Frequentes 💡
      </h1>

      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md transition-colors duration-500 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center p-5 text-left font-medium rounded-2xl transition-colors duration-300 ${
                isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              {faq.question}
              <FiChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0"
              }`}
            >
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
