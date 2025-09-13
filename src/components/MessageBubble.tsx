import React from 'react';
import { Message } from '../types';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        // Bold headers
        return (
          <div key={index} className="font-semibold text-gray-900 mb-2 text-sm">
            {line.slice(2, -2)}
          </div>
        );
      } else if (line.startsWith('• **') && line.includes(':**')) {
        // Bullet points with bold labels
        const parts = line.slice(2).split(':**');
        return (
          <div key={index} className="mb-1 text-sm">
            <span className="font-medium">{parts[0]}:</span>
            <span className="ml-1">{parts[1]}</span>
          </div>
        );
      } else if (line.startsWith('• ')) {
        // Regular bullet points
        return (
          <div key={index} className="mb-1 text-sm pl-4">
            {line.slice(2)}
          </div>
        );
      } else if (line.startsWith('  - ')) {
        // Sub-bullet points
        return (
          <div key={index} className="mb-1 text-sm pl-8 text-gray-600">
            {line.slice(4)}
          </div>
        );
      } else if (line.trim() === '') {
        // Empty lines
        return <div key={index} className="mb-2"></div>;
      } else {
        // Regular text
        return (
          <div key={index} className="mb-1 text-sm">
            {line}
          </div>
        );
      }
    });
  };

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-4`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
          : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg'
      }`}>
        {isUser ? (
          <User size={16} />
        ) : (
          <Bot size={16} />
        )}
      </div>
      
      <div className={`flex flex-col max-w-[85%] sm:max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 rounded-2xl shadow-sm ${
          isUser 
            ? 'bg-blue-500 text-white rounded-tr-sm' 
            : 'bg-white/95 backdrop-blur-sm text-gray-800 border border-gray-200/50 rounded-tl-sm shadow-lg'
        }`}>
          <div className={`${isUser ? 'text-white' : 'text-gray-800'}`}>
            {isUser ? (
              <div className="text-sm">{message.content}</div>
            ) : (
              <div>{formatContent(message.content)}</div>
            )}
          </div>
        </div>
        
        <div className={`text-xs text-gray-500 mt-1 px-2 ${isUser ? 'text-right' : 'text-left'}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;