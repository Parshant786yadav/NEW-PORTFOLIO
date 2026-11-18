"use client";

import { useState } from "react";
import { ArrowUpRight, GraduationCap, Terminal, Eye, Briefcase, Award } from "lucide-react";

interface ExperienceItem {
  role: string;
  organization: string;
  orgUrl?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  iconBg: string;
  icon: React.ReactNode;
  tags: string[];
}

export default function ExperienceList() {
  const experiences: ExperienceItem[] = [
    {
      role: "Founder & Lead Architect",
      organization: "DocuMind AI",
      orgUrl: "https://parshantyadav.com",
      period: "2024 - Present",
      location: "Gurgaon, India",
      type: "Product & Engineering",
      description: "Architected end-to-end RAG document intelligence platform. Ingested large multi-page PDFs, implemented Supabase pgvector cosine search, real-time SSE token streaming (<450ms latency), and developer REST APIs.",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      icon: <Terminal className="w-5 h-5" />,
      tags: ["FastAPI", "Supabase pgvector", "Next.js", "OpenAI & Gemini"],
    },
    {
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      organization: "Maharshi Dayanand University (MDU)",
      orgUrl: "https://mdu.ac.in",
      period: "2023 - 2026",
      location: "Haryana, India",
      type: "Education & Academics",
      description: "Final-year specialization in Artificial Intelligence and Machine Learning. Rigorous coursework in Data Structures & Algorithms, Distributed Systems, Deep Learning, DBMS, and Computer Networks.",
      iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      icon: <GraduationCap className="w-5 h-5" />,
      tags: ["Algorithms", "Deep Learning", "DBMS", "Operating Systems"],
    },
    {
      role: "Computer Vision Researcher & Builder",
      organization: "BlinkTrack & AI Attendance Lab",
      orgUrl: "https://github.com/Parshant786yadav/AI-Based-Attendance-System",
      period: "2024",
      location: "Gurugram, Haryana",
      type: "Research & Systems",
      description: "Built real-time edge facial recognition attendance automation and driver fatigue monitoring (BlinkTrack) using 68-point facial landmarks and Eye Aspect Ratio (EAR) at 45+ FPS.",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      icon: <Eye className="w-5 h-5" />,
      tags: ["Python", "OpenCV", "MediaPipe", "Real-Time Telemetry"],
    },
    {
      role: "Competitive Programmer & Algorithmic Problem Solver",
      organization: "LeetCode & GeeksforGeeks",
      orgUrl: "https://leetcode.com",
      period: "2023 - Present",
      location: "Online",
      type: "Milestone",
      description: "Solved 200+ complex algorithmic challenges in Python & C++. Deep expertise in Dynamic Programming, Graph Traversals, Binary Trees, and Greedy algorithms.",
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      icon: <Award className="w-5 h-5" />,
      tags: ["Python", "C++", "200+ Problems Solved", "Data Structures"],
    },
  ];

  return (
    <section id="experience" className="py-12 text-left border-t border-slate-800/80">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">
          work &amp; education.
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
          A track record of engineering real platforms, research, and algorithmic mastery.
        </p>
      </div>

      <div className="divide-y divide-slate-800/80 rounded-2xl border border-slate-800/80 bg-slate-950/40 overflow-hidden">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              {/* Left Logo / Icon */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${exp.iconBg} group-hover:scale-105 transition-transform`}
                >
                  {exp.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    {exp.orgUrl ? (
                      <a
                        href={exp.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white flex items-center gap-1 text-slate-300 font-medium"
                      >
                        <span>@{exp.organization}</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span>@{exp.organization}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right date & location */}
              <div className="text-right shrink-0">
                <div className="text-xs font-mono font-medium text-slate-300">
                  {exp.period}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                  {exp.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3.5 pl-15 sm:pl-15">
              {exp.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3 pl-15 sm:pl-15">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
