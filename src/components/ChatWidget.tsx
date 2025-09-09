import { useState } from "react";

interface ChatWidgetProps {
  initialSessionId?: string;
}

export default function ChatWidget({ initialSessionId }: ChatWidgetProps) {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(initialSessionId);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input };
    setMessages((m) => [...m, userMsg]);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, session_id: sessionId }),
    });

    const body = await res.json();
    const reply = body.reply ?? "No reply";

    setSessionId(body.session_id ?? sessionId);
    setMessages((m) => [...m, { role: "bot", text: reply }]);
    setInput("");
  }

  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-md mx-auto">
      <div className="max-h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.role === "user"
                ? "bg-blue-500 text-white ml-auto max-w-xs"
                : "bg-gray-200 text-gray-800 max-w-xs"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="flex-1 p-2 border rounded"
          onKeyPress={(e) => e.key === 'Enter' && send()}
        />
        <button
          onClick={send}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
