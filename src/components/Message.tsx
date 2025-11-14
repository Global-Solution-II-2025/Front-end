import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean;
  name?: string; 
  avatar?: string;  
}

const Message: React.FC<MessageProps> = ({ text, isUser, name, avatar }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 items-end`}>
      {!isUser && avatar && (
        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-2" />
      )}
      <div className={`max-w-xs px-4 py-2 rounded-2xl ${isUser ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 shadow-sm'}`}>
        {!isUser && name && <div className="text-xs text-gray-500 mb-1">{name}</div>}
        {text}
      </div>
    </div>
  );
};

export default Message;