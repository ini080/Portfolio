module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '.',
  chainWebpack: config => {
    config.module
          .rule('svg')
          .use('file-loader')
          .loader('vue-svg-loader')
  }
}
