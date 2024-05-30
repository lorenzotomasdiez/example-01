/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "payorc-fuchsia":{
          "DEFAULT":"#F917CD"
        },
        "payorc-purple":{
          "DEFAULT": "#F7F5FF",
        },
        "payorc-violet":{
          "DEFAULT": "#5A2D82",
          "dark":"#37175C"
        },
        "payorc-indigo":{
          "DEFAULT": "#4428D4"
        }
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}