const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'iHs Retainer Services',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
