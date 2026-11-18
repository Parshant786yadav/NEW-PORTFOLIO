"use client";

import { useState } from "react";
import { 
  Brain, 
  Layout, 
  Code, 
  HardDrive, 
  Sparkles, 
  Search, 
  Check 
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, category: c.category }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesQuery =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.highlight &&
        skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const categoryOptions = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "AI, Machine Learning & LLMs":
        return <Brain className="w-4 h-4" />;
      case "Full-Stack Web Development":
        return <Layout className="w-4 h-4" />;
      case "Core Languages & Problem Solving":
        return <Code className="w-4 h-4" />;
      case "Databases, Cloud & DevOps":
        return <HardDrive className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARSENAL &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack &amp; Proficiency
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of the programming languages, frameworks, 
            AI toolsets, and infrastructure I leverage to build scalable software.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categoryOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat === "All" ? "All Skills" : cat.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors text-base">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-cyan-300/80 mt-0.5 inline-block">
                    {skill.highlight || skill.tag}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-4 w-full h-2 rounded-full bg-slate-800/80 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-500 font-mono">{skill.tag}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                  <Check className="w-3 h-3" />
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No skills found matching &quot;{searchQuery}&quot;. Try searching for &quot;Python&quot;, &quot;Next.js&quot;, or &quot;RAG&quot;.
          </div>
        )}

      </div>
    </section>
  );
}
