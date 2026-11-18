import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080b12",
        surface: "#0f1523",
        "surface-card": "#131b2e",
        "surface-border": "#1e293b",
        primary: {
          DEFAULT: "#6366f1",
          hover: "#4f46e5",
          glow: "#818cf8",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#a855f7",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.35)",
        "glow-violet": "0 0 25px -5px rgba(168, 85, 247, 0.35)",
        "glow-primary": "0 0 30px -5px rgba(99, 102, 241, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
