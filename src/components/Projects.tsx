"use client";

import { useState } from "react";
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Info 
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI & LLMs", "Computer Vision", "Full-Stack Web"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const flagshipProject = PROJECTS.find((p) => p.id === "documind-ai");
  const otherProjects = filteredProjects.filter((p) => p.id !== "documind-ai" || selectedCategory !== "All");

  return (
    <section id="projects" className="relative py-24 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Systems &amp; Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Real-world systems spanning production RAG architectures, 
            facial recognition attendance, driver safety tracking, and high-performance web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FLAGSHIP HERO PROJECT (when All is selected) */}
        {selectedCategory === "All" && flagshipProject && (
          <div className="mb-14 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-violet-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side: Flagship details */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      FLAGSHIP PLATFORM
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                      Production RAG &bull; Supabase pgvector
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    {flagshipProject.metrics.map((m, idx) => (
                      <div key={idx} className="rounded-xl p-3 bg-slate-950/80 border border-slate-800">
                        <div className="text-base sm:text-lg font-bold text-cyan-400">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {flagshipProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {flagshipProject.liveUrl && (
                      <a
                        href={flagshipProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-md hover:scale-[1.02] transition-transform"
                      >
                        <span>Visit DocuMind</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {flagshipProject.githubUrl && (
                      <a
                        href={flagshipProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(flagshipProject)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 text-sm font-medium transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>Architecture Breakdown</span>
                    </button>
                  </div>
                </div>

                {/* Right side: Architecture Flow Graphic */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl p-5 bg-slate-950/90 border border-slate-800 space-y-3.5 font-mono text-xs text-slate-300">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                      <span className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        RAG INGESTION PIPELINE
                      </span>
                      <span className="text-[11px] text-emerald-400">Active</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span>1. Multi-Page PDF &bull; OCR Fallback</span>
                        <span className="text-cyan-400 text-[11px]">300 DPI</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span>2. Recursive Semantic Chunking</span>
                        <span className="text-indigo-400 text-[11px]">500 Tokens</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span>3. Vector Store: pgvector</span>
                        <span className="text-purple-400 text-[11px]">1536 dims</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span>4. Cosine Nearest-Neighbor Search</span>
                        <span className="text-emerald-400 text-[11px]">Top-4 Chunks</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-950/60 to-indigo-950/60 border border-cyan-800/40 flex items-center justify-between text-cyan-300 font-semibold">
                        <span>5. Token Streaming SSE Output</span>
                        <span className="text-emerald-400 text-[11px]">&lt; 450ms</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === "All" ? otherProjects : filteredProjects).map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-cyan-300/80 mt-1">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-400 mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-500">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Deep View</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
