"use client";

import { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-b from-slate-800/80 to-slate-900 border-b border-slate-800">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-1">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 mt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-md hover:scale-[1.02] transition-transform"
              >
                <span>Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-3.5 bg-slate-950/60 border border-slate-800 text-center"
                >
                  <div className="text-lg sm:text-xl font-bold text-cyan-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Key Capabilities &amp; Features
            </h3>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details */}
          <div>
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Technical Architecture
            </h3>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Technologies &amp; Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
