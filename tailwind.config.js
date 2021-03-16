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
      active: '#0e78f9',
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
    }),
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    }
  },
  variants: {
  },
  plugins: [],
}
