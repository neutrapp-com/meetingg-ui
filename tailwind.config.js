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
      light: '#fcfafa',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    borderColor: theme => ({
      ...theme('colors'),
      dark: 'rgba(29, 29, 29, 0.131)',
      light: 'rgba(255, 255, 255, 0.05)',
    }),
    divideColor: theme => ({
      ...theme('colors'),
      dark: 'rgba(29, 29, 29, 0.131)',
      light: 'rgba(255, 255, 255, 0.05)',
    })
  },
  variants: {
  },
  plugins: [],
}
