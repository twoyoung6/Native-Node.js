var http = require('http')

var options = {
  host: 'localhost',
  port: '9080',
  path: 'web/index.html'
};

// 处理http响应的回调函数
var cb = function (res) {
  var body = ''
  res.on('data', function (data) {
    body += data
  });

  res.on('end', function (params) {
    // 数据接收完成
    console.log(body)
  })
}

// 向服务器发请求
var req = http.request(options, cb)
req.end()
