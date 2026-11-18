"use client";

import { useState } from "react";
import MatrixTrail from "@/components/ui/matrix-trail";
import { Terminal } from "lucide-react";

export default function MatrixBackground() {
  const [matrixColor, setMatrixColor] = useState<string>("#06b6d4"); // Cyan default
  const [isActive, setIsActive] = useState<boolean>(true);

  const colors = [
    { name: "Cyan", hex: "#06b6d4", bg: "bg-cyan-500" },
    { name: "Emerald", hex: "#10b981", bg: "bg-emerald-500" },
    { name: "Violet", hex: "#a855f7", bg: "bg-purple-500" },
  ];

  return (
    <>
      {/* Background Matrix Trail Canvas with Hover Spotlight */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700">
          <MatrixTrail
            key={matrixColor}
            color={matrixColor}
            fontSize={15}
            radius={200} // Expansive hover illumination radius
            fade={0.08}
            rainSpeed={1.2}
            ambientBrightness={0.08} // Subdued low brightness everywhere else
            scramble={true}
            rainGlow={true}
            className="h-full w-full"
          />
        </div>
      )}

      {/* Subtle Floating Matrix Color Switcher Pill */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg backdrop-blur-md text-xs font-mono">
        <button
          onClick={() => setIsActive(!isActive)}
          title="Toggle Matrix Effect"
          className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Matrix: {isActive ? "ON" : "OFF"}</span>
        </button>

        {isActive && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-700">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setMatrixColor(c.hex)}
                title={`Switch Matrix to ${c.name}`}
                aria-label={`Switch Matrix to ${c.name}`}
                className={`w-3.5 h-3.5 rounded-full ${c.bg} transition-transform ${
                  matrixColor === c.hex ? "scale-125 ring-2 ring-white/50" : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
