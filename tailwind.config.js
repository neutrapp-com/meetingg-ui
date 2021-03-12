const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      dark: '#1c1f2e',
      light: '#ffffff',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    })
  },
  variants: {
  },
  plugins: [],
}
