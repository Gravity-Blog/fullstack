import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Card from './components/ui/Card';
import { Send, MessageCircle, Trash2 } from 'lucide-react';

const apiKey = 'AIzaSyDffO_xsgqwxWVWWLUHvIioAr7GAqfeu3w';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const initialPrompt = "You are a helpful assistant. Please respond to the user's queries with clear and concise answers.";

  const sendMessage = async (input) => {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        { role: 'user', parts: [{ text: initialPrompt }] },
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
      ],
    });

    try {
      const result = await chatSession.sendMessage(input);
      setMessages([
        ...messages,
        { text: input, sender: 'user' },
        { text: result.response.text(), sender: 'ai' }
      ]);
    } catch (error) {
      console.error('Error:', error);
    }
    setInput('');
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <Card className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 rounded-xl shadow-xl">
      <div className="flex flex-col h-[600px]">
        <div className="relative mb-6 text-center">
          <h1 className="text-2xl font-bold mt-10 text-blue-900 dark:text-gray-100">💬 Chat Assistant</h1>
        </div>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4 bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-300 dark:border-gray-700 shadow-inner">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3`}>
              {message.sender === 'ai' && (
                <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                  <MessageCircle size={20} className="text-blue-700 dark:text-blue-300" />
                </div>
              )}
              <div className={`max-w-[75%] p-4 rounded-xl ${message.sender === 'user' ? 'bg-blue-700 text-white rounded-tr-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-tl-none'} shadow-md`}>
                {message.text}
              </div>
              {message.sender === 'user' && (
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                  <span className="text-white text-sm">You</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="w-full p-4 pl-6 pr-16 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-md"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="absolute right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
          >
            <Send size={20} />
          </button>
          <button
            onClick={clearChat}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;
