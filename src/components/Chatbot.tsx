import React, { useState, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    
    return () => {
      window.removeEventListener('openChatbot', handleOpenChatbot);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400); // must match chatbot-close duration
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user" as const, text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    const reply = await getBotReply(input);
    const botMessage = { sender: "bot" as const, text: reply };
    setMessages([...newMessages, botMessage]);
    setInput("");
  };

  const getBotReply = async (question: string): Promise<string> => {
    if (question.toLowerCase().includes("skills")) return "I'm skilled in DevOps, Cloud, and Web Development.";
    if (question.toLowerCase().includes("projects")) return "I've built multiple projects, including my portfolio, a game in Roblox Studio, and DevOps automations.";
    if (question.toLowerCase().includes("goals")) return "My short-term goal is to land a remote DevOps internship. My long-term goal is to build my own service-based company.";
    return "I'm your personal assistant! Ask me about my skills, projects, or goals.";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={`
            w-80 md:w-96 h-[80%] flex flex-col rounded-2xl
            border shadow-lg

            /* Light Mode */
            bg-white text-gray-800 border-blue-300/40

            /* Dark Mode */
            dark:bg-[#111827] dark:text-gray-200 dark:border-cyan-400/30 
            dark:shadow-[0_0_25px_rgba(0,255,255,0.3)]
            
            ${isClosing ? 'animate-chatbot-close' : 'animate-chatbot-open'}
          `}
        >
          {/* Header */}
          <div
            className="
              p-4 text-lg font-semibold border-b flex justify-between items-center
              text-blue-600 border-blue-200
              dark:text-cyan-300 dark:border-cyan-400/20
            "
          >
            🤖 Ask Me Anything
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              title="Close chatbot"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`
                  p-3 rounded-lg max-w-[80%] ${msg.sender === "user" ? "ml-auto text-right" : ""}
                  ${msg.sender === "user" 
                    ? "bg-blue-500 text-white dark:bg-cyan-500 dark:text-black" 
                    : "bg-blue-100 text-gray-800 dark:bg-gray-800/60 dark:text-gray-200"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            className="
              p-3 border-t flex items-center space-x-2
              border-blue-200 
              dark:border-cyan-400/20
            "
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="
                flex-1 rounded-lg px-3 py-2 text-sm
                bg-blue-50 text-gray-800 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-400
                dark:bg-gray-900/60 dark:text-gray-100 dark:placeholder-gray-400
                dark:focus:ring-cyan-400
              "
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="
                px-4 py-2 rounded-lg text-sm font-bold transition
                bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-md hover:scale-105
                dark:from-cyan-400 dark:to-blue-500 dark:text-black dark:shadow-lg
              "
              title="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Open Button (when closed) */}
      {!isOpen && !isClosing && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            p-3 rounded-full shadow-lg
            bg-blue-500 text-white hover:scale-105 transition
            dark:bg-cyan-500 dark:text-black
          "
          title="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
