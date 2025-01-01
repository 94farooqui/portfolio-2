/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text_yellow : "#feca65",
        text_white : "#fafafa",
        background_primary : "#111111",
        background_secondary : "#1e1e1e",
        background_ternary : "#383838",
        border_primary : "#383838"
        
      }
    },
  },
  plugins: [],
}