const isProduction = process.env.NODE_ENV === 'production'
const proCDN = {
  css: [
    'https://cdn.bootcss.com/vuetify/2.2.15/vuetify.min.css',
    'https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css'
  ],
  js: [
    'https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js',
    'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
    'https://cdn.bootcss.com/vuetify/2.2.15/vuetify.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js'
  ]
}
const devCDN = {
  css: [
    'https://cdn.bootcss.com/vuetify/2.2.15/vuetify.min.css',
  ],
  js: [
    'https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js'
  ]
}
module.exports = {
  publicPath: './',
  productionSourceMap: !isProduction,
  devServer: {
    host: '0.0.0.0',
    port: 8089,
    open: true,
    disableHostCheck: !isProduction,
    proxy: {
      '/apiPro': {
        target: 'http://192.168.20.60:6364',
        changeOrigin: true,
        pathRewrite: {
          '^/apiPro' : '/'
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html')
          .tap(args => {
              args[0].cdn = isProduction ? proCDN : devCDN;
              return args;
          });
  },
  
  configureWebpack: config => {
    if (isProduction) {
      // 用cdn方式引入
      config.externals = {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter'
      }
    }
  },
  css: {
    // 向预处理器 Loader 传递选项
    loaderOptions: {
      scss: {
        // 全局变量
        prependData: `
          @import "~@/assets/css/index.scss";
        `
      }
    },
    // css 生成名称默认配置
    /* extract: {
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`
    } */
  },
  // 文件名称不需要hash
  // filenameHashing: false,
  "transpileDependencies": [
    "element-ui"
  ]
}