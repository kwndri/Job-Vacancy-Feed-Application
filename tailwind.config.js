/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        'sm2': '560px',
        'xl2': '1200px', 
      },
    },
  },
  plugins: [],
}