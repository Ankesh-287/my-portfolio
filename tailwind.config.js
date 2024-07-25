/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': 'rgb(52, 53, 58)',
        'bg-primary': 'yellow',
        'bg-secondary': 'rgb(61, 62, 66)',
        'heading': 'rgb(255, 255, 255)',
      },
      fontFamily: {
        'main': ['"Libre Baskerville"', 'serif'],
        'primary': ['"Hind Siliguri"', 'sans-serif'],
      },
      spacing: {
        'vw-30': '30vw',
        'vw-43': '43vw',
        'vw-26': '26vw',
        'vw-3': '3vw',
        'vw-10': '10px',
      },
      fontSize: {
        '2vw': '2vw',
        '1.5vw': '1.5vw',
        '1.2vw': '1.2vw',
        '3.8vw': '3.8vw',
      },
    },
  },
  plugins: [],
}
