module.exports = {
  publicPath: '/ini080.github.io/',
  chainWebpack: config => {
    config.module
          .rule('svg')
          .use('file-loader')
          .loader('vue-svg-loader')
  }
}
