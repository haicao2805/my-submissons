const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      ...theme.colors,
      'ripe-plum': {
        DEFAULT: '#40005D',
        '50': '#B616FF',
        '100': '#B001FF',
        '200': '#9400D7',
        '300': '#7800AF',
        '400': '#5C0086',
        '500': '#40005D',
        '600': '#190025',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000'
      },
      'biloba-flower': {
        DEFAULT: '#A892EE',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FDFCFF',
        '300': '#E0D9F9',
        '400': '#C4B5F4',
        '500': '#A892EE',
        '600': '#8161E6',
        '700': '#5B31DF',
        '800': '#431DBB',
        '900': '#31168A'
      },
      'mine-shaft': {
        DEFAULT: '#3A3A3A',
        '50': '#969696',
        '100': '#8C8C8C',
        '200': '#777777',
        '300': '#636363',
        '400': '#4E4E4E',
        '500': '#3A3A3A',
        '600': '#1E1E1E',
        '700': '#020202',
        '800': '#000000',
        '900': '#000000'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
