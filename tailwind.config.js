/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './map-me/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

