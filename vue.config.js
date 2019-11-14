const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // lintOnSave: true,  // 关闭eslint校验
  // productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: '',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     },
  //   }
  // },

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))

    config.resolve.alias
      .set('views', resolve('src/views'))

    // config.optimization
    //   .splitChunks({
    //     chunks: 'all',
    //     cacheGroups: {
    //       vendors: {
    //         name: 'chunk-vendors',
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: 10,
    //         chunks: 'initial',
    //         enforce: true,
    //       },
    //       elementUI: {
    //         name: 'chunk-elementUI',
    //         test: /[\\/]node_modules[\\/]element-ui[\\/]/,
    //         priority: 20,
    //         enforce: true,
    //       },
    //     }
    //   })



    config.optimization.runtimeChunk('single').end()
  },

  // configureWebpack: {
  //   optimization: {
  //     minimizer: [
  //       new UglifyJsPlugin({
  //         uglifyOptions: {
  //           warnings: false,
  //           compress:{
  //             drop_debugger: true,
  //             drop_console: true
  //           }
  //         }
  //       })
  //     ]
  //   }
  // },

}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less'),
      ],
    })
}