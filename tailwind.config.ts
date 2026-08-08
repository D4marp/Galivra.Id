import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070A",
        deep: "#080B10",
        panel: "#0B0F14",
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#94A3B8",
          faint: "#5B6B82",
        },
        galivra: {
          blue: "#3B82F6",
          bright: "#60A5FA",
          cyan: "#22D3EE",
          deep: "#1D4ED8",
        },
        line: "rgba(148, 163, 184, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero-desktop": ["88px", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "hero-tablet": ["64px", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "hero-mobile": ["46px", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section-y": "10rem",
        "section-y-mobile": "5rem",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "glow-blue":
          "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.22), transparent 60%)",
        "brand-gradient": "linear-gradient(90deg, #3B82F6 0%, #22D3EE 100%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
        "spin-slower": "spin 70s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
