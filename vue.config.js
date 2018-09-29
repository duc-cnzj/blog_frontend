const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@c': path.resolve(__dirname, 'src/components'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@views': path.resolve(__dirname, 'src/views')
      }
    }
  }
}
