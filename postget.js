var http = require('http');
var querystring = require('querystring');

var postHTML =
  '<html><head><meta charset="utf-8"><title>教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name" placeholder="网站名称"><br>' +
  '网站 URL： <input name="url" placeholder="网站网址"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>'
console.log('----服务启动-----')
http.createServer(function (req, res) {
  var body = ''
  // 数据事件，接收到请求体的 数据就 累加到 body
  req.on('data', function (chunk) {
    console.log(chunk)
    body += chunk
  })

  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body)
    console.log('body---', body)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })

    if (body.name && body.url) { // 输出 提交的表单数据
      res.write('网站名称：' + body.name)
      res.write('</br>')
      res.write('URL：' + body.url)
    } else { // 输出表单
      res.write(postHTML)
    }
    res.end()
  })
}).listen(2000)
