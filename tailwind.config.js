/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        babyblue: '#BBE1FA',
        darkerblue: '#0F4C75',
        darkcolor: '#1B262C',
        colorlight: '#E8F0F2',
      },
    },
  },
  plugins: [],
};
