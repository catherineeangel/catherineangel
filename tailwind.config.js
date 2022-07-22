const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: '#ed7966',
        peach: '#f5cac2',
        beige: '#fae5df',
        navy: '#303179',
        darkBlue: '#141850',

        bone: '#e3dac9',
        rose: '#bb6261',
        suede: '#bb979e',
        paleBlue: '#b0b0c0',
        denim: '#7484a6',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        martel: ['Martel', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
