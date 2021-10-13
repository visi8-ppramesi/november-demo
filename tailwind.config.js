const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = {
    ...defaultColors,
    blurgh: {
        light: '#3171ad',
        DEFAULT: '#1d4061',
        dark: '#15324d',
    },
}

module.exports = {
        theme: {
            colors: colors
        }
  }