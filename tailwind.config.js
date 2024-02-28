/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend Mega", sans-serif'],
      },
      screens: {
        'smm': '480px'
      }
    },
  },
  plugins: [],
}