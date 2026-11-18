"use client";

import { useState } from "react";
import { 
  ArrowUpRight, 
  Github, 
  Sparkles, 
  ExternalLink, 
  Cpu, 
  Info,
  CheckCircle2 
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 text-left border-t border-slate-800/80">
      {/* Section Header (like deepakmodi.dev: "featured projects.") */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            featured projects.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Production systems, AI platforms, and open-source software I&apos;ve engineered.
          </p>
        </div>
        <a
          href="https://github.com/Parshant786yadav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
        >
          <span>All 15+ Repos</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
          >
            {/* macOS Browser Mockup Frame Header */}
            <div>
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    {project.id}.app
                  </span>
                </div>
                {project.badge && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Mockup Card Interior Canvas / Graphical Preview */}
              <div
                className={`p-5 bg-gradient-to-br ${project.gradient} border-b border-slate-800/60 relative overflow-hidden flex flex-col justify-between min-h-[140px]`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Key Metric Preview Badge */}
                {project.metrics && project.metrics[0] && (
                  <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300 shadow-sm mt-3">
                    <span className="text-white font-bold">{project.metrics[0].value}</span>
                    <span className="text-slate-400 text-[11px]">{project.metrics[0].label}</span>
                  </div>
                )}
              </div>

              {/* Project Card Text Content */}
              <div className="p-5 space-y-3">
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="p-4 pt-2 border-t border-slate-800/60 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Deep Architecture</span>
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code"
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    title="View GitHub Repository"
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
                    className="p-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 hover:text-white border border-cyan-800/50 transition-colors"
                    title="Open Live Website"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
