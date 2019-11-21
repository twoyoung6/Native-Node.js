/* net 模块 创建服务器端服务 */
var net = require('net');
var server = net.createServer(function (connection) {
  console.log('client connected.....');
  connection.on('end', function (params) {
    console.log('------客户端关闭连接-----')
  })
  connection.write('----net 服务建立----');
  connection.pipe(connection);
})

server.listen(8000, function () {
  console.log('----address----', server.address())
  console.log('-----server is listening----')
});

