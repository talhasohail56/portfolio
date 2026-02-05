import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f0ff",
          green: "#39ff14",
          magenta: "#ff00e5",
          orange: "#ff6a00",
        },
        surface: {
          0: "#000000",
          1: "#0a0a0f",
          2: "#12121a",
          3: "#1a1a25",
          4: "#222230",
        },
        border: {
          DEFAULT: "#ffffff10",
          hover: "#ffffff20",
          active: "#00f0ff40",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "scan-line": "scanLine 8s linear infinite",
        "grid-fade": "gridFade 4s ease-in-out infinite",
        "aurora-shift": "auroraShift 15s ease-in-out infinite",
        "border-trace": "borderTrace 2s linear forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "typing": "typing 3.5s steps(40, end)",
      },
      keyframes: {
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gridFade: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
        auroraShift: {
          "0%": { transform: "translateX(-20%) rotate(0deg)" },
          "50%": { transform: "translateX(20%) rotate(3deg)" },
          "100%": { transform: "translateX(-20%) rotate(0deg)" },
        },
        borderTrace: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "holographic":
          "linear-gradient(135deg, #00f0ff20, #ff00e520, #39ff1420, #00f0ff20)",
      },
    },
  },
  plugins: [],
};

export default config;
