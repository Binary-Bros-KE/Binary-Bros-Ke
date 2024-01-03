/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0084C8',
        secondary: '#4D4BB8',
        title: ''
      }
    },
  },
  plugins: [],
}

