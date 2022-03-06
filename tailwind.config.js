const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/index.html"
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#4A63E7',
      secondary: '#FF5959',
      tertiary: '#6f42c1'
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      DEFAULT: '25px'
    },
    extend: {},
  },
  plugins: [],
}
