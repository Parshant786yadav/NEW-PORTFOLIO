"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Sparkles, 
  Github, 
  Linkedin, 
  Terminal, 
  Send 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel bg-slate-950/80 shadow-2xl shadow-black/40 border border-slate-700/50 py-3 px-5 sm:px-6"
            : "bg-slate-900/40 backdrop-blur-md border border-white/10 py-4 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group text-white font-medium tracking-tight"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wide flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-80" />
              </span>
              <span className="text-xs text-slate-400 font-mono">
                AI &amp; Full-Stack SDE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-cyan-300 bg-white/10 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-medium text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-slate-200 hover:text-cyan-300 hover:bg-white/5 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/5 px-2">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-medium"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
