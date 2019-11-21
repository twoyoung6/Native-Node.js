
/* 通过请求的 URL 路径来区别不同请求 */
var http = require('http')
var url = require('url')

function start(route) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname
    console.log('请求' + pathname + '接收')

    route(pathname) // 将路由函数作为参数传递

    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' })
    res.write("-----Node.js 路由访问成功----")
    res.end()
  }
  http.createServer(onRequest).listen(1688)
  console.log('----路由服务已经启动----')
}
exports.start = start // 导出模块

