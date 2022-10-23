/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
