"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageSquare, 
  User, 
  CornerDownLeft 
} from "lucide-react";
import { PERSONAL_INFO, AI_KNOWLEDGE_BASE } from "@/data/portfolioData";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: `Hi there! 👋 I'm Parshant's AI assistant. Ask me anything about his projects (like DocuMind AI), technical skills, or hire availability!`,
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let bestAnswer = "";

      for (const entry of AI_KNOWLEDGE_BASE) {
        if (entry.keywords.some((k) => lower.includes(k))) {
          bestAnswer = entry.answer;
          break;
        }
      }

      if (!bestAnswer) {
        bestAnswer = `Thanks for asking! Parshant is a passionate SDE & AI Engineer from Gurgaon with deep expertise in Next.js, Python, RAG pipelines, and OpenCV. You can connect with him directly at ${PERSONAL_INFO.email} or WhatsApp at ${PERSONAL_INFO.phone}!`;
      }

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: bestAnswer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  const samplePrompts = [
    "Tell me about DocuMind AI",
    "What is Parshant's tech stack?",
    "Is Parshant available for SDE roles?",
  ];

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Assistant"
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-medium shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-white animate-bounce" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900" />
            </div>
            <span className="text-sm font-semibold hidden sm:inline">Ask AI About Parshant</span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-500/15 flex flex-col overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  Parshant&apos;s AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online &bull; Instant Knowledge
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-left bg-slate-950/60">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center shrink-0 text-cyan-400 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-br-xs"
                      : "bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-bl-xs"
                  }`}
                >
                  <p>{m.text}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right font-mono ${
                      m.sender === "user" ? "text-cyan-200/70" : "text-slate-400"
                    }`}
                  >
                    {m.time}
                  </span>
                </div>
                {m.sender === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-800/60 flex items-center justify-center shrink-0 text-indigo-400 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>AI is thinking</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-slate-900 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-left no-scrollbar">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about Parshant..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              aria-label="Send query"
              className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white disabled:opacity-50 hover:scale-105 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
