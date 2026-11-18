"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  Terminal, 
  MessageCircle, 
  FileText 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HeroMinimal() {
  const [ageYears, setAgeYears] = useState<string>("22.80543591");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Birthdate approx Oct 2003 for final year 2026 graduate
    const birthDate = new Date("2003-10-15T00:00:00Z").getTime();
    const updateAge = () => {
      const now = Date.now();
      const diffYears = (now - birthDate) / (1000 * 60 * 60 * 24 * 365.2425);
      setAgeYears(diffYears.toFixed(8));
    };

    updateAge();
    const interval = setInterval(updateAge, 50);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-20 sm:pt-28 pb-12 text-left">
      {/* Dynamic Age Ticker */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-slate-400">
          been here for <span className="text-cyan-400 font-semibold">{ageYears}</span> years
        </span>
      </div>

      {/* Main Title & Avatar Row */}
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m Parshant.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-medium mt-1">
            SDE &bull; AI Software Engineer &bull; Full-Stack Builder
          </p>
        </div>

        {/* Circular Avatar */}
        <div className="relative shrink-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl bg-slate-900 group flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback to stylish avatar monogram if remote image fails
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="font-bold text-xl text-cyan-400 absolute pointer-events-none">PY</span>
          </div>
          {/* Active Status Badge */}
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
        AI Software Engineer building production <span className="text-white font-medium">RAG platforms</span>, 
        autonomous AI agents, computer vision systems, and modern full-stack web applications using{" "}
        <span className="text-cyan-300 font-medium">Next.js</span>,{" "}
        <span className="text-indigo-300 font-medium">Python</span>,{" "}
        <span className="text-emerald-300 font-medium">FastAPI</span>, and{" "}
        <span className="text-violet-300 font-medium">Supabase pgvector</span>. 
        Creator of <a href="#projects" className="text-white underline decoration-cyan-500 underline-offset-4 hover:text-cyan-400 font-medium">DocuMind AI</a>. 
        Also shipping freelance projects end-to-end.
      </p>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-14">
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium border border-slate-800 hover:border-slate-700 transition-all shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Chat on WhatsApp</span>
        </a>

        <button
          onClick={copyEmail}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-slate-800 hover:border-slate-700 transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "Email Copied!" : "Copy Email"}</span>
        </button>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-slate-800 hover:border-slate-700 transition-all"
        >
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-slate-800 hover:border-slate-700 transition-all"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* About Section */}
      <div id="about" className="space-y-4 pt-4 border-t border-slate-800/80">
        <h2 className="text-xl font-bold text-white tracking-tight">About</h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
          Final-year engineering student pursuing a{" "}
          <span className="font-semibold text-white underline decoration-slate-600 underline-offset-4 hover:decoration-cyan-400 transition-colors">
            B.Tech in Computer Science &amp; Engineering (AI &amp; ML)
          </span>{" "}
          at Maharshi Dayanand University. Solved{" "}
          <span className="font-semibold text-white underline decoration-slate-600 underline-offset-4 hover:decoration-emerald-400 transition-colors">
            200+ algorithmic challenges on LeetCode &amp; GFG
          </span>
          , architected production-grade RAG systems with OCR &amp; streaming APIs, 
          and engineered real-time computer vision applications. Passionate about shipping robust software 
          from{" "}
          <span className="font-semibold text-white underline decoration-slate-600 underline-offset-4 hover:decoration-indigo-400 transition-colors">
            Gurgaon, India
          </span>{" "}
          that scales with zero fuss.
        </p>
      </div>
    </section>
  );
}
