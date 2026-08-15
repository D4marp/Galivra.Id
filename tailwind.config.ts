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
        void: "#07060C",
        deep: "#0B0915",
        panel: "#100D1B",
        ink: {
          DEFAULT: "#F6F4F9",
          muted: "#ADA6C2",
          faint: "#6E6784",
        },
        galivra: {
          blue: "#6C5CE7",
          bright: "#8E7CFF",
          cyan: "#FF6FB0",
          deep: "#4B3FBF",
        },
        line: "rgba(180, 170, 200, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero-desktop": ["104px", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "hero-tablet": ["68px", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "hero-mobile": ["48px", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      spacing: {
        "section-y": "10rem",
        "section-y-mobile": "5rem",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(180,170,200,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,170,200,0.07) 1px, transparent 1px)",
        "glow-blue":
          "radial-gradient(circle at 50% 0%, rgba(108,92,231,0.26), transparent 60%)",
        "brand-gradient": "linear-gradient(90deg, #6C5CE7 0%, #FF6FB0 100%)",
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
        glow: "0 0 40px rgba(108,92,231,0.32)",
        "glow-cyan": "0 0 40px rgba(255,111,176,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
