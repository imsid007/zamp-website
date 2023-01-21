/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GRAY_1: "#535353",
        GRAY_2: "#6b6b6b",
        GRAY_3: "#575757",
        GRAY_4: "#242424",
        BLACK_1: "#141414",
      },
    },
  },
  plugins: [],
};