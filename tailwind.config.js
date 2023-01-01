const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#223642',
      primarydark: '#46A5A5',
      accent: '#c4681a',
      darkblue: '#212539',
      deepblue: '#132A3E',
      lightblue: '#028FE3',
      gray2: '#F2F2F2',
      gray8: '#666666',
      gray9: '#333333',
      yellow5: '#FFB761',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1100px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
