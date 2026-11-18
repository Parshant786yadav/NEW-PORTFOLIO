"use client";

import { useState } from "react";
import { GitCommit, ExternalLink, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function GitHubActivity() {
  const [hoveredCell, setHoveredCell] = useState<{ day: string; count: number } | null>(null);

  // Generate a realistic contribution grid for the past 16 weeks
  const weeks = 18;
  const days = 7;
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

  // Seeded deterministic contribution intensity pattern
  const grid = Array.from({ length: weeks }, (_, wIdx) => {
    return Array.from({ length: days }, (_, dIdx) => {
      const val = (wIdx * 7 + dIdx * 13 + (wIdx % 3) * 5) % 17;
      if (val > 14) return 4;
      if (val > 10) return 3;
      if (val > 6) return 2;
      if (val > 3) return 1;
      return 0;
    });
  });

  const getColorClass = (level: number) => {
    switch (level) {
      case 4:
        return "bg-emerald-400";
      case 3:
        return "bg-emerald-500/80";
      case 2:
        return "bg-emerald-600/60";
      case 1:
        return "bg-emerald-800/40";
      default:
        return "bg-slate-900 border border-white/5";
    }
  };

  return (
    <div className="py-8 text-left border-t border-slate-800/80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>GitHub Activity</span>
          <span className="text-xs font-mono text-slate-400 font-normal">
            (@{PERSONAL_INFO.github.split("/").pop()})
          </span>
        </h2>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Contribution Calendar Card */}
      <div className="rounded-2xl p-5 bg-slate-950/70 border border-slate-800/80 shadow-inner">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2 px-1">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        {/* Heatmap grid */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar">
          {grid.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5 shrink-0">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  onMouseEnter={() =>
                    setHoveredCell({
                      day: `Week ${wIdx + 1}, Day ${dIdx + 1}`,
                      count: level * 3 + (level > 0 ? 1 : 0),
                    })
                  }
                  onMouseLeave={() => setHoveredCell(null)}
                  className={`w-3.5 h-3.5 rounded-sm ${getColorClass(
                    level
                  )} transition-colors duration-150 hover:ring-2 hover:ring-white/50 cursor-pointer`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-800/60 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>{hoveredCell ? `${hoveredCell.count} contributions on ${hoveredCell.day}` : "Active open-source contributor"}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-slate-500">Less</span>
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-900 border border-white/5" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-800/40" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600/60" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500/80" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
            <span className="text-slate-500">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
