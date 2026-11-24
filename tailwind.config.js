/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0D0D0D",
        carbon: "#141414",
        volt: "#B9FC01",
        cobalt: "#0031CC",
        mist: "#F4F6FA",
      },
      fontFamily: {
        display: ['"Outfit"', '"Space Grotesk"', "sans-serif"],
        poster: ['"Anton"', '"Barlow Condensed"', "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
