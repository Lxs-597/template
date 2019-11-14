const pxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    require('autoprefixer'),
    pxtorem({
      rootValue: 37.5,
      unitPrecision: 3,
      propList: ['*'],
      selectorBlackList: ['van']
    })
  ]
}
