/* 异步非阻塞 */

var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err); // 错误信息输出
  console.log(data.toString()); // 回调函数 对读取的数据进行序列化，因为data 是二进制流形式
});
console.log(__filename, __dirname)
console.log('----程序执行结束----')

/* 同步 阻塞式 */
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('----程序执行结束----')
