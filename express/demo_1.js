var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('++++第一个 express 程序页面++++')
})

var server = app.listen(9081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("express 应用实例，访问地址 为 http://%s:%s" + host + port)
})
