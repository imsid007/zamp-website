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
        BLUE_LIGHT: "#0082f3",
        BLACK_1: "#141414",
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px	" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
  },
  plugins: [],
};
