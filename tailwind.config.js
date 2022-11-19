/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#556EE6",
        bluejesticDarkPurple: "#5F40AF",
        bluejesticViolet: "#6B21A8",
        bluejesticOrchid: "#A855F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        yantramanav: ["Yantramanav", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('../src/assets/hero.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
