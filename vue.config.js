const path = require('path')
const webpack = require('webpack')

module.exports = {
  // outputDir: '/Users/congcong/Lumen/lumen-app/run/front',
  devServer: {
    port: "8000"
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    resolve: {
      alias: {
        '@c': path.resolve(__dirname, 'src/components'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    }
  }
}
