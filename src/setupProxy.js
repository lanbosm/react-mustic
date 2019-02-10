const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/kugou', {
    target: 'http://m.kugou.com/',
    changeOrigin:true,
    pathRewrite: {"^/kugou" : ""}
  }))
  app.use(proxy('/yy_kugou', {
    target: "http://www.kugou.com/yy/",
    changeOrigin: true,
    pathRewrite: {"^/yy_kugou" : ""}
  }))
  app.use(proxy('/mobilecdn', {
    target: "http://mobilecdn.kugou.com",
    changeOrigin: true,
    pathRewrite: {"^/mobilecdn" : ""}
  }))
}



