/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/assets/js/*.js", "./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sogand: ['sogand'],
        iransans: ['iransans']
      },
      screens:{
        "sm":"480px"
      }
      
    },
  },
  plugins: [],
}

