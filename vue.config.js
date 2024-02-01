const {defineConfig} = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')


module.exports = defineConfig({
    transpileDependencies: ['element-ui'],
    // 解决vue空白页面.
    publicPath: "./",
    productionSourceMap: false,
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('compressionPlugin').use(
            new CompressionWebpackPlugin({
                test: /\.(js|css|html)$/,
                threshold: 1024, // 超过1K就压缩
            })
        )
    }
})
