"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  FolderGit2, 
  Briefcase, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Sparkles 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface FloatingDockProps {
  matrixActive: boolean;
  onToggleMatrix: () => void;
}

export default function FloatingDock({ matrixActive, onToggleMatrix }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { label: "Home", href: "#hero", icon: <Home className="w-4 h-4" /> },
    { label: "About", href: "#about", icon: <Sparkles className="w-4 h-4" /> },
    { label: "Experience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { label: "GitHub", href: PERSONAL_INFO.github, external: true, icon: <Github className="w-4 h-4" /> },
    { label: "LinkedIn", href: PERSONAL_INFO.linkedin, external: true, icon: <Linkedin className="w-4 h-4" /> },
    { label: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-950/85 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl">
        {items.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          const content = (
            <div
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95"
            >
              {item.icon}

              {/* Tooltip */}
              {isHovered && (
                <div className="absolute -top-9 px-2.5 py-1 rounded-md bg-slate-900 border border-white/15 text-[11px] font-mono text-white whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                  {item.label}
                </div>
              )}
            </div>
          );

          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {content}
            </a>
          ) : (
            <Link key={item.label} href={item.href} aria-label={item.label}>
              {content}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-5 bg-white/10 mx-0.5" />

        {/* Matrix Effect Toggle Button in Dock */}
        <button
          onClick={onToggleMatrix}
          onMouseEnter={() => setHoveredIndex(99)}
          onMouseLeave={() => setHoveredIndex(null)}
          title="Toggle Matrix Trail Background"
          aria-label="Toggle Matrix Trail Background"
          className={`relative p-2.5 rounded-full transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95 ${
            matrixActive
              ? "text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 shadow-sm shadow-cyan-500/20"
              : "text-slate-400 hover:text-white hover:bg-white/10"
          }`}
        >
          <Terminal className="w-4 h-4" />
          {hoveredIndex === 99 && (
            <div className="absolute -top-9 px-2.5 py-1 rounded-md bg-slate-900 border border-white/15 text-[11px] font-mono text-cyan-300 whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-150">
              Matrix: {matrixActive ? "ON" : "OFF"}
            </div>
          )}
        </button>
      </nav>
    </div>
  );
}
