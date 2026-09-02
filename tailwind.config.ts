import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1830",
          light: "#132745",
          dark: "#060F1F",
        },
        gold: {
          DEFAULT: "#B8923B",
          light: "#D4B26A",
          dark: "#8F6E29",
        },
        ivory: "#FAF8F4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
