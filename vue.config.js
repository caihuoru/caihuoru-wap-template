module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-pxtorem')({
                    rootValue: 37.5, // 换算的基数
                    // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
                    // 如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                    // selectorBlackList: [/^\.el/, /^\.am/],
                    selectorBlackList: ['html'],
                    propList: ['*'],
                    exclude: /node_modules/,
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 12,
                }),
            ],
        },
    },
  },
  devServer: {
    proxy: {
        '/api': {
          target: 'http://47.104.172.64:8281',
          ws: true,
          pathRewrite: {
            "^/api": "" //需要rewrite重写的,
          }
        }
      }
    }
};
