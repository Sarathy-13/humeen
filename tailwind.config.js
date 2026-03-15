/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Syne', 'sans-serif'],
            outfit: ['Outfit', 'sans-serif'],
        },
        colors: {
            premium: '#0a0a0a',
        }
    },
  },
  plugins: [],
}
