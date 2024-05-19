/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#FDF0D1",
        primaryContent: "#AC7D88",
        primarySubContent: "#85586F",
        primaryBg: "#643843",
        primaryBase:"#9d8a9321",

      }
    },
  },
  plugins: [],
}

