/* 异步非阻塞 */

var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err); // 错误信息输出
  console.log(data.toString()); // 回调函数
});
console.log(__filename, __dirname)
console.log('----程序执行结束----')

/* 同步 阻塞式 */
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('----程序执行结束----')
