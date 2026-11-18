"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Clock, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-8 pb-24 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col gap-4 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <div className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span>{PERSONAL_INFO.name}</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-[11px] font-mono text-slate-400">Gurgaon (IST):</span>
          <span className="text-emerald-400 font-mono font-semibold">{currentTime || "Loading..."}</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors text-[11px] font-mono self-end sm:self-auto"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3 text-cyan-400" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/40">
        <div>
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js 14 &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            parshantyadav.com
          </a>
        </div>
      </div>
    </footer>
  );
}
