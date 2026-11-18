"use client";

import { Brain, Layout, Code, HardDrive, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsMinimal() {
  return (
    <section id="skills" className="py-12 text-left border-t border-slate-800/80">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">
          skills &amp; technologies.
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
          Tools and core technologies I use to build scalable systems.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{cat.category}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{s.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
