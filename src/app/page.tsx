"use client";

import { useState } from "react";
import HeroMinimal from "@/components/HeroMinimal";
import GitHubActivity from "@/components/GitHubActivity";
import ExperienceList from "@/components/ExperienceList";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsMinimal from "@/components/SkillsMinimal";
import ContactMinimal from "@/components/ContactMinimal";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import AIChatWidget from "@/components/AIChatWidget";
import MatrixTrail from "@/components/ui/matrix-trail";

export default function Home() {
  const [matrixActive, setMatrixActive] = useState<boolean>(true);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Top Dotted Grid Texture Header (like in reference screenshot) */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none opacity-40 bg-dots-pattern" />

      {/* Interactive Matrix Spotlight Background Layer */}
      {matrixActive && (
        <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700">
          <MatrixTrail
            color="#06b6d4"
            fontSize={15}
            radius={180}
            fade={0.08}
            rainSpeed={1.2}
            ambientBrightness={0.05} // Very dim and clean outside cursor hover
            scramble={true}
            rainGlow={true}
            className="h-full w-full"
          />
        </div>
      )}

      {/* Main Centered Minimal Feed Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 flex-1 flex flex-col">
        <HeroMinimal />
        <GitHubActivity />
        <ExperienceList />
        <FeaturedProjects />
        <SkillsMinimal />
        <ContactMinimal />
        <Footer />
      </div>

      {/* Floating macOS Style Dock at Bottom */}
      <FloatingDock
        matrixActive={matrixActive}
        onToggleMatrix={() => setMatrixActive(!matrixActive)}
      />

      {/* Floating Interactive AI Assistant */}
      <AIChatWidget />
    </div>
  );
}
