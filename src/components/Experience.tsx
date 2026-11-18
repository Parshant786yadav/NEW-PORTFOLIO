"use client";

import { 
  GraduationCap, 
  Sparkles, 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Award,
  Terminal
} from "lucide-react";
import { TIMELINE, PERSONAL_INFO } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40 text-violet-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMICS &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Journey &amp; Education
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Tracing my engineering background from foundational computer science 
            and competitive programming to building complex real-world platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group text-left">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                {item.type === "Education" ? (
                  <GraduationCap className="w-4 h-4" />
                ) : item.type === "Project" ? (
                  <Terminal className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {item.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-sm font-semibold text-indigo-400 mt-0.5">
                  {item.organization}
                </h4>

                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DSA Achievement Banner */}
        <div className="mt-14 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900 border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                200+ Algorithmic Challenges Solved
              </h4>
              <p className="text-sm text-slate-300 mt-0.5">
                Consistently practicing on LeetCode &amp; GeeksforGeeks with Python and C++. 
                Skilled in Graph traversals, DP optimizations, and binary search.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
              LeetCode &bull; GFG
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
