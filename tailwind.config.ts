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
        cream: {
          DEFAULT: "#FBF7F0",
          deep: "#F3EEE1",
        },
        ink: {
          DEFAULT: "#171D1B",
          soft: "#454F4C",
        },
        accent: {
          DEFAULT: "#0E6E68",
          dark: "#0A5450",
          light: "#3D8C86",
          soft: "#E6F2F0",
        },
        line: "#E6E0D2",
      },
      fontFamily: {
        head: ["var(--font-head)", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
