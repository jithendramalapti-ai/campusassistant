import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle } from 'lucide-react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import QuickActions from './QuickActions';
import { Message } from '../types';
import { chatService } from '../services/chatService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    // Initial greeting
    const greeting: Message = {
      id: '1',
      content: "Hello! I'm your campus assistant. I can help you find information about schedules, facilities, dining, library services, and administrative procedures. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    };
    setMessages([greeting]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text || isLoading) return;

    setInputValue('');
    setShowQuickActions(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, chatService.generateTypingDelay()));
      
      const response = await chatService.processQuery(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error processing query:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  return (
    <div className="flex flex-col h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md border-b border-gray-200/50 px-4 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Campus Assistant</h1>
            <p className="text-sm text-gray-600">Your AI guide to campus information</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Quick Actions - show only when no conversation has started */}
          <QuickActions 
            onActionClick={handleQuickAction} 
            visible={showQuickActions && messages.length <= 1} 
          />
          
          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            
            {isLoading && <TypingIndicator />}
          </div>
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border-t border-white/20 px-4 py-4 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about campus schedules, facilities, dining, library, or admin..."
                className="w-full px-4 py-3 pr-12 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                disabled={isLoading}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <MessageCircle size={20} className="text-gray-500" />
              </div>
            </div>
            
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Send size={20} />
            </button>
          </div>
          
          <div className="text-xs text-gray-600 text-center mt-2 font-medium">
            Ask about schedules, facilities, dining, library services, or administrative procedures
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;