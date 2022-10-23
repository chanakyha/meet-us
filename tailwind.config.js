/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#131517",
      },
      fontFamily: {
        "fast-hands": ["Fasthand", "cursive"],
        pafacto: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
