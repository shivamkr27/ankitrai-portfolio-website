import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Secure connection established. I am Ankit\'s AI Assistant. How can I help you regarding his services?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyber-accent text-cyber-900 hover:bg-cyan-400 p-4 rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-bold"
        >
          <MessageSquare size={24} />
          <span className="hidden md:inline">Ask AI Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-cyber-800 border border-cyber-700 rounded-lg shadow-2xl w-80 md:w-96 flex flex-col h-[500px]">
          {/* Header */}
          <div className="p-4 bg-cyber-900 border-b border-cyber-700 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2 text-cyber-accent">
              <Terminal size={18} />
              <span className="font-mono font-bold text-sm">SECURE_CHAT_V1.0</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cyber-900/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-cyber-accent text-cyber-900 rounded-br-none font-medium'
                      : 'bg-cyber-700 text-gray-200 rounded-bl-none border border-cyber-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-cyber-700 text-gray-200 p-3 rounded-lg rounded-bl-none text-xs font-mono animate-pulse">
                   Processing...
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-cyber-800 border-t border-cyber-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about VAPT, Audit..."
                className="flex-1 bg-cyber-900 border border-cyber-600 rounded text-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-cyber-accent"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-cyber-accent text-cyber-900 p-2 rounded hover:bg-cyan-400 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
