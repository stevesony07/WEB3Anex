/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': 'var(--cyber-blue)',
        'cyber-purple': '#a855f7',
      },
    },
  },
  plugins: [],
}