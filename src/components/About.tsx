"use client";

import { 
  GraduationCap, 
  Code2, 
  MapPin, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Target 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: "B.Tech in CSE (AI & ML)",
      subtitle: "Maharshi Dayanand University (MDU)",
      desc: "Final-year engineering student focusing on distributed architectures, deep learning models, and algorithm design.",
    },
    {
      icon: <Brain className="w-5 h-5 text-violet-400" />,
      title: "RAG & LLM Specialization",
      subtitle: "Vector Search & Retrieval Systems",
      desc: "Architected production document intelligence pipelines using Supabase pgvector, embeddings, and custom tokenizers.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: "200+ Algorithmic Problems",
      subtitle: "LeetCode & GeeksforGeeks",
      desc: "Strong computer science fundamentals across Trees, Dynamic Programming, Graphs, and computational complexity.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-amber-400" />,
      title: "Gurgaon, India",
      subtitle: "Millennium City Tech Hub",
      desc: "Based in the heart of India's startup ecosystem, open to high-impact on-site, hybrid, and remote engineering opportunities.",
    },
  ];

  const focusPoints = [
    "Building scalable, production-grade web systems in Next.js, React, and Python",
    "Designing low-latency RAG architectures with pgvector & semantic retrieval",
    "Implementing real-time Computer Vision pipelines with OpenCV & MediaPipe",
    "Writing clean, maintainable, modular TypeScript and robust Python microservices",
    "Translating intricate mathematical algorithms into fluid, responsive user interfaces",
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOW MORE ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Tomorrow with Code &amp; AI
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            A developer who bridges the gap between deep algorithmic logic, 
            machine learning pipelines, and sleek modern frontend engineering.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Software Development Engineer 
                and final-year Computer Science student specializing in 
                <span className="text-cyan-400 font-medium"> Artificial Intelligence &amp; Machine Learning</span> at MDU.
              </p>
              <p>
                My journey began with deep mathematical problem solving, having mastered 
                <span className="text-indigo-400 font-medium"> 200+ Data Structures &amp; Algorithms problems</span> on LeetCode and GFG. 
                I soon realized my true passion lies in building functional products that deliver genuine utility.
              </p>
              <p>
                That led me to engineer <span className="text-white font-medium">DocuMind AI</span>, 
                a high-performance AI document assistant featuring vector search over PDFs, OCR fallback, and multi-tenant workspaces. 
                Whether architecting backend microservices with FastAPI, optimizing vector embeddings with pgvector, or crafting 
                fluid web applications with Next.js, I obsess over system reliability and clean architecture.
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-2 space-y-2.5">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4" />
                What I Focus On
              </h4>
              <div className="space-y-2">
                {focusPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Highlight Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {highlights.map((card, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300/80 mt-0.5">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
