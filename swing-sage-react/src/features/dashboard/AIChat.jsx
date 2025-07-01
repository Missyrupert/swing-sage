import React, { useState, useEffect, useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { getAIResponse } from '../../services/api';

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatWindowRef = useRef(null);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // **THE FIX:** We now explicitly tell the API this is a 'chat' request.
    const aiResponseText = await getAIResponse(input, 'chat');
    
    // This will now always be a string, which React can render.
    const aiMessage = { sender: 'ai', text: aiResponseText };
    setMessages(prev => [...prev, aiMessage]);
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-brand-green-dark p-8 rounded-2xl shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-2">Ask the Sage</h2>
      <p className="text-brand-green-light mb-6">Get instant answers to your quick golf questions.</p>
      <div ref={chatWindowRef} className="h-64 overflow-y-auto mb-4 p-4 bg-gray-800 rounded-lg space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-xs animate-fade-in-up ${msg.sender === 'user' ? 'bg-brand-green-light text-brand-green-dark' : 'bg-gray-700 text-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-green-light text-white"
          placeholder="e.g., How do I stop slicing?"
        />
        <button type="submit" className="bg-white text-brand-green-dark font-bold py-3 px-5 rounded-lg hover:bg-gray-200 transition-colors">
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default AIChat;