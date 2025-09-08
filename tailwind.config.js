// File: tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // We are now defining the entire palette directly, not extending it.
    // This is a more robust way to ensure our custom colors are picked up.
    colors: {
      // Your custom cyberpunk colors
      'background': '#000000',
      'primary': '#ffffff',
      'cyan': '#00ffff',
      'magenta': '#ff00ff',
      'purple': '#9400d3',
      // It's good practice to re-include essential defaults
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent',
    },
    fontFamily: {
      // We are defining the font palette directly.
      'mono': ['"Fira Code"', 'monospace'],
    },
  },
  plugins: [],
}