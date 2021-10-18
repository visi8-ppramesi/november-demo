const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
    ...defaultColors,
    blurgh: {
        light: '#3171ad',
        DEFAULT: '#1d4061',
        dark: '#15324d',
    },
}

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
    ],
    theme: {
        colors: colors
    }
}