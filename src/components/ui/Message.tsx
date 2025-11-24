import React from "react";
import { useTheme } from "../../context/useTheme";

interface MessageProps {
  text: string;
  isUser: boolean;
  name?: string;
  avatar?: string;
}

const Message: React.FC<MessageProps> = ({ text, isUser, name, avatar }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`flex items-end mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar da IA */}
      {!isUser && avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full border mr-3 shadow-sm"
        />
      )}

      {/* Bolha */}
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed transition-colors duration-300 shadow
          ${
            isUser
              ? isDark
                ? "bg-[#00A67E] text-white shadow-md"
                : "bg-blue-600 text-white shadow-md"
              : isDark
              ? "bg-[#2F2F2F] text-gray-100 border border-[#3A3A3A]"
              : "bg-white/90 text-gray-800 border border-gray-200"
          }
        `}
      >
        {/* Nome do bot */}
        {!isUser && name && (
          <div className="text-xs font-medium text-gray-400 mb-1">{name}</div>
        )}

        {text}
      </div>
    </div>
  );
};

export default Message;
