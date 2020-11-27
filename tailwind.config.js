const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: [
      './components/**/*.js',
      './pages/**/*.js'
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.rose,
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [
  ],
}
