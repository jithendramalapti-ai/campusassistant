import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white flex items-center justify-center shadow-lg">
        <Bot size={16} />
      </div>
      
      <div className="bg-white/85 backdrop-blur-md border border-white/30 px-4 py-3 rounded-2xl rounded-tl-sm shadow-xl">
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <span className="text-xs text-gray-600 ml-2 font-medium">Campus Assistant is typing...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;