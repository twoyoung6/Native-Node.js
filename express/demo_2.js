/* 演示 node 路由 */
var express = require('express')
var app = express()

// Express 提供了内置的中间件 express.static 来设置静态文件
app.use('/public', express.static('public'))

// 主页
app.get('/', function (req, res) {
  console.log('主页Get 请求')
  res.send('++++主页 Get 请求++++')
})

app.post('/', function (req, res) {
  console.log('主页Post 请求')
  res.send('+++++主页 Post 请求+++++')
})

// del_user 页面响应
app.get('/del_user', function (req, res) {
  console.log('del_user 页面响应DELETE 请求')
  res.send('+++++删除页面+++++')
})

// 用户列表页
app.get('/list_user', function (req, res) {
  console.log('list_user Get请求')
  res.send('+++++用户列表页面+++')
})

// 正则匹配
app.get('/*_user', function (req, res) {
  console.log('/*_user Get 请求')
  res.send('+++++正则匹配++++')
})

var server = app.listen(8091, function () {
  var host = server.address().address
  var port =  server.address().port

  console.log('访问地址' + host + port)
})

