/* 服务器端文件 */
var http = require('http');
var fs = require('fs')
var url = require('url')

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname
  console.log('请求----' + pathname + '已被接受')
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.dir(err)
      // HTTP状态码 404
      res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf8'});
    } else {
      // HTTP 状态码 200
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8'});
      // 响应的文件内容/数据
      res.write(data.toString());
    }
    // 发送响应
    res.end();
  });
}).listen(9080);

console.log('服务已经运行在 http://127.0.0.1:9080');
