/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
        },
        accent: {
          blue: '#5BA3E0',      // Blue from logo
          orange: '#F5A623',    // Orange/yellow from logo
          DEFAULT: '#5BA3E0',   // Default to blue
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
