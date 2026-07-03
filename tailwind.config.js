import { AVA_PRIMARY, AVA_PRIMARY_LIGHT } from "./src/constants/theme.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ava: {
          black: "#000000",
          bg: "#0a0316",
          primary: AVA_PRIMARY,
          "primary-light": AVA_PRIMARY_LIGHT,
          purple: AVA_PRIMARY,
          "purple-light": AVA_PRIMARY_LIGHT,
          card: "#1a1a2e",
          muted: "#a0a0b0",
          yellow: "#f5c518",
          teal: "#00c9b7",
          blue: "#3b9eff",
          magenta: "#ff2ea6",
        },
      },
      fontFamily: {
        heading: ['"Montserrat"', "sans-serif"],
        body: ['"Poppins"', "sans-serif"],
        arabic: ['"Noto Sans Arabic"', "sans-serif"],
      },
      backgroundImage: {
        "ava-gradient":
          "radial-gradient(ellipse at 50% 0%, #1a0533 0%, #0a0316 50%, #000 100%)",
      },
    },
  },
  plugins: [],
};
