/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-picture': "url('./assets/netflix.jpg')",
        'logo': "url('./assets/logo.png')",
      },
      blur:{
        sm:"2px"
      }
    },
  },
  plugins: [],
}