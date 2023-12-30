/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
        analogous1: "#6A44F2",
        analogous2: "#1CBDDD",
        triodic1: "#52378C",
        textColor: "#2F2F2F",
        textColorLight: "#545A75",
        textColorLight: "#545A75",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
