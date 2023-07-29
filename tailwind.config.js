/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        titan: "'Gloock', serif",
        jost: "'Jost', sans-serif;",
        volkron: "'Vollkorn', serif",
      },
    },
  },
  plugins: [],
};
