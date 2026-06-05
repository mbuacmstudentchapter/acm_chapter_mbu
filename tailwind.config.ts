import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0A0F1E",
          light: "#121A30",
          dark: "#050811",
        },
        acm: {
          blue: "#0072CE",
          cyan: "#00D4FF",
        },
        soft: "#8892A4",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 114, 206, 0.15)",
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.2)",
        "glow-strong": "0 0 30px rgba(0, 114, 206, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-mesh": "mesh 10s ease infinite",
      },
      keyframes: {
        mesh: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
