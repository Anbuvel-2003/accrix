/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8c193f",
      },

      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1060px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
