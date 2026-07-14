import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#070B14",
          soft: "#0D1526",
          raised: "#131C30",
        },
        paper: {
          DEFAULT: "#F7F5F0",
          deep: "#ECE9E1",
        },
        ink: {
          DEFAULT: "#131A28",
          muted: "#4A5468",
        },
        pulse: {
          DEFAULT: "#2E6BFF",
          soft: "#5B8AFF",
          deep: "#1E4FD6",
        },
        signal: "#37D4E6",
        haze: "#8467F3",
        steel: {
          DEFAULT: "#8B94A7",
          soft: "#B9BFCC",
        },
      },
      fontFamily: {
        display: ['"Archivo Variable"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3.5rem, 8vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        section: ["clamp(2.5rem, 5vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "section-sm": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        editorial: ["clamp(1.35rem, 2vw, 2rem)", { lineHeight: "1.45" }],
        "editorial-lg": ["clamp(1.6rem, 2.6vw, 2.6rem)", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        body: ["clamp(1rem, 1.1vw, 1.2rem)", { lineHeight: "1.75" }],
        label: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        shell: "84rem",
      },
      animation: {
        "grid-drift": "grid-drift 14s ease-in-out infinite",
        seam: "seam 3.2s ease-in-out infinite",
        "rail-slide": "rail-slide 42s linear infinite",
      },
      keyframes: {
        "grid-drift": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        seam: {
          "0%, 100%": { opacity: "0.25", transform: "scaleX(0.65)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
        "rail-slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
