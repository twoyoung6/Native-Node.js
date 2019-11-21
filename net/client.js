/* net模块 创建本地客户端服务，用于连接服务端 */
var net = require('net');
var client = net.connect({port: 8000}, function (params) {
  console.log('----连接到服务器-----')
})
client.on('data', function (params) {
  console.log(params.toString());
  client.end()
})
client.on('end', function (params) {
  console.log('----断开与服务器的连接-----')
})
