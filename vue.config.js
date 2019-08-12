module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jg-portfolio/' : '/',
  chainWebpack: config => {
    config.module
          .rule('svg')
          .use('file-loader')
          .loader('vue-svg-loader')
  }
}
