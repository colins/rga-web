/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rga: {
          pink: '#E6007E',
          'pink-dark': '#C00067',
          'pink-light': '#FDF0F7',
          purple: '#6C2A8A',
          navy: '#1A2E40',
          teal: '#00A896',
          gold: '#FFB800',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
