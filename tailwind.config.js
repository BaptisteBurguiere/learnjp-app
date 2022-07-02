/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        notojp: ["Noto Sans JP", 'sans-serif']
      }
    },
    colors:{
      'dark-back': '#282626',
      'dark-secondary-back': '#313131',
      'dark-main-font': '#e0e0e0',
      'dark-secondary-font': "#464646",
      'dark-accent': '#ff643f',
      'light-back': '#f2f2f2',
      'light-secondary-back': '#fdfdfd',
      'light-main-font': '#464443',
      'light-secondary-font': '#d6d6d6',
      'light-accent': '#ff643f'
    }
  },
  plugins: [],
}
