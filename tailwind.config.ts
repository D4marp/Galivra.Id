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
        paper: {
          DEFAULT: "#F2F0F5",
          ink: "#0D0B16",
          muted: "#5C566C",
          line: "rgba(13, 11, 22, 0.12)",
        },
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
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.1rem, 8.2vw, 8.5rem)",
          { lineHeight: "0.93", letterSpacing: "-0.045em" },
        ],
        "display-lg": [
          "clamp(2.6rem, 6vw, 6rem)",
          { lineHeight: "0.96", letterSpacing: "-0.04em" },
        ],
        "display-md": [
          "clamp(2.1rem, 4.2vw, 4rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
        "display-sm": [
          "clamp(1.6rem, 2.6vw, 2.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
      },
      backgroundImage: {
        "glow-blue":
          "radial-gradient(circle at 50% 0%, rgba(108,92,231,0.26), transparent 60%)",
        "brand-gradient": "linear-gradient(90deg, #8E7CFF 0%, #FF6FB0 100%)",
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "marquee-reverse":
          "marquee var(--marquee-duration, 40s) linear infinite reverse",
        "spin-slow": "spin 40s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(108,92,231,0.32)",
        "glow-cyan": "0 0 40px rgba(255,111,176,0.22)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
