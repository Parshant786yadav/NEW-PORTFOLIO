"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Copy, 
  Check, 
  Code, 
  Database, 
  Cpu, 
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Parshant Yadav — Autonomous RAG Pipeline
import { SupabaseVectorStore } from "@langchain/community";
import { OpenAIEmbeddings } from "@langchain/openai";

export async function queryDocuMind(userQuery: string) {
  const vectorStore = new SupabaseVectorStore(embeddings, {
    client: supabaseClient,
    tableName: "document_embeddings",
    queryName: "match_page_embeddings"
  });

  const relevantChunks = await vectorStore.similaritySearch(userQuery, 4);
  return streamLLMResponse({ query: userQuery, context: relevantChunks });
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/20 to-purple-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Available for SDE &amp; Full-Stack AI Roles
              </span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                MDU 2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono text-cyan-400 font-medium tracking-wide">
                Hello world, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight glow-gradient-text">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Engineering high-performance web systems and AI architectures. 
              Creator of <span className="text-white font-medium underline decoration-cyan-400 underline-offset-4">DocuMind AI</span>, 
              RAG pipelines with pgvector, and real-time computer vision systems with OpenCV. 
              Passionate about turning complex algorithms into seamless user experiences.
            </p>

            {/* Quick highlight tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                RAG &amp; Vector Search
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                <Code className="w-3.5 h-3.5 text-indigo-400" />
                Next.js &amp; TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                Python &amp; OpenCV
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
                <Database className="w-3.5 h-3.5 text-purple-400" />
                Supabase &amp; FastAPI
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/70 font-medium transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-400 hover:text-white border border-slate-800 text-sm font-medium transition-colors"
              >
                <span>GitHub Repos</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Code Showcase */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glow backdrop behind terminal */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      documind-rag.ts
                    </span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                  <pre className="font-mono">
                    <span className="text-slate-500">{`// Parshant Yadav — Autonomous RAG Pipeline`}</span>
                    {`\n`}<span className="text-purple-400">import</span> {`{ SupabaseVectorStore } `}<span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;@langchain/community&quot;</span>;
                    {`\n`}<span className="text-purple-400">import</span> {`{ OpenAIEmbeddings } `}<span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;@langchain/openai&quot;</span>;
                    {`\n\n`}<span className="text-cyan-400">export async function</span> <span className="text-yellow-300">queryDocuMind</span>(userQuery: <span className="text-cyan-300">string</span>) {`{`}
                    {`\n  `}<span className="text-purple-400">const</span> vectorStore = <span className="text-purple-400">new</span> <span className="text-yellow-300">SupabaseVectorStore</span>(embeddings, {`{`}
                    {`\n    `}client: supabaseClient,
                    {`\n    `}tableName: <span className="text-emerald-300">&quot;document_embeddings&quot;</span>,
                    {`\n    `}queryName: <span className="text-emerald-300">&quot;match_page_embeddings&quot;</span>
                    {`\n  `}{`}`});
                    {`\n\n  `}<span className="text-purple-400">const</span> relevantChunks = <span className="text-purple-400">await</span> vectorStore.<span className="text-blue-300">similaritySearch</span>(userQuery, 4);
                    {`\n  `}<span className="text-purple-400">return</span> <span className="text-yellow-300">streamLLMResponse</span>({`{ `}query: userQuery, context: relevantChunks{` }`});
                    {`\n`}{`}`}
                  </pre>
                </div>

                {/* Terminal Footer Telemetry */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Status: 200 OK
                    </span>
                    <span className="text-slate-500">|</span>
                    <span className="text-cyan-300">Latency: 38ms</span>
                  </div>
                  <span className="text-slate-500">Node v20 &bull; Next.js 14</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-xs font-mono text-slate-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
