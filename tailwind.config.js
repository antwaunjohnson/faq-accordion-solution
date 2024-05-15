/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976",
      xl: "1440px"
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightPink: 'hsl(275, 100%, 97%)',
        grayishPurple: 'hsl(292, 16%, 49%)',
        darkPurple: 'hsl(292, 42%, 14%)'
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

