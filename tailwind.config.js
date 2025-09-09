/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background': '#000000',
      'primary': '#ffffff',
      'cyan': '#00ffff',
      'magenta': '#ff00ff',
      'purple': '#9400d3',
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent',
    },
    fontFamily: {
      'mono': ['"Fira Code"', 'monospace'],
    },
  },
  plugins: [],
}