import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D17",
          soft: "#1A1D2E",
          muted: "#4B5069",
        },
        mist: {
          DEFAULT: "#F7F8FC",
          soft: "#FBFBFE",
          deep: "#EEF0F8",
        },
        electric: {
          50: "#EEF4FF",
          100: "#DCE7FF",
          200: "#B9CEFF",
          300: "#8AACFF",
          400: "#5B84FF",
          500: "#3B63F6",
          600: "#2A48E0",
          700: "#2338B5",
          800: "#1F2F8E",
          900: "#1D2B70",
        },
        violet: {
          400: "#9F7CFF",
          500: "#7C5CFC",
          600: "#6344E8",
        },
        cyanic: {
          400: "#39D0E0",
          500: "#17B6CB",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.35rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,13,23,0.04), 0 4px 16px rgba(11,13,23,0.05)",
        "card-hover": "0 2px 4px rgba(11,13,23,0.05), 0 16px 40px rgba(11,13,23,0.10)",
        glow: "0 0 60px rgba(59,99,246,0.25)",
        "glow-sm": "0 0 24px rgba(59,99,246,0.18)",
        nav: "0 1px 0 rgba(11,13,23,0.06), 0 8px 24px rgba(11,13,23,0.05)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #F7F8FC 90%), linear-gradient(to right, rgba(11,13,23,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,13,23,0.045) 1px, transparent 1px)",
        "hero-mesh":
          "radial-gradient(at 20% 15%, rgba(59,99,246,0.14) 0px, transparent 55%), radial-gradient(at 80% 5%, rgba(124,92,252,0.13) 0px, transparent 50%), radial-gradient(at 60% 80%, rgba(23,182,203,0.10) 0px, transparent 55%)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "spin-slow": "spin 24s linear infinite",
        shimmer: "shimmer 2.8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
