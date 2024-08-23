/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bungee-tint': ['"Bungee Tint"', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
