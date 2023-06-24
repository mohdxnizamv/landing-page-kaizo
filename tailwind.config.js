/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {},
  },
  content: ["**/*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "360px",
      md: "760px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
