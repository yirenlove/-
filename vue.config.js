
module.exports = {
  // transpileDependencies: true,
  devServer:{
    proxy:{
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
        // pathRewrite:{
        //   '^/api':''
        // }
      }
    },
    lintOnSave:false /*关闭语法检查*/,
    publicPath:'./'
}

