 /* 流操作 */

var fs = require('fs')
var data = ''

// 1.0 创建可读流
var readerStream = fs.createReadStream('input.txt')
// 设置编码 utf-8
readerStream.setEncoding('UTF8')

// 处理流事件 data，end，error
readerStream.on('data', function (chunk) {
  data += chunk
})

readerStream.on('end', function () {
  console.log(data)
})

readerStream.on('error', function (err) {
  console.log(err.stack)
})
console.log('1.0 -----流 读取程序执行完毕------')

// 2.0 写入流
var data = '/我是流 写入程序 stream.js 写入的一段文本/'
var writeStream = fs.createWriteStream('output.txt')
writeStream.write(data, 'UTF8')
// 标记文件末尾
writeStream.end()
// 处理流事件 data,end,error
writeStream.on('finish', function (params) {
  console.log('写入完成')
})
writeStream.on('error', function (params) {
  console.log(params.stack)
})
console.log('2.0 -----写入流 程序执行完毕-----')

// 3.0 管道流
// 创建一个可写流
var pipeStream = fs.createWriteStream('pipe.txt')
// readerStream 是可读流
// input.txt 中的 文件内容会被读取 并流入到 pipe.txt 文件中
readerStream.pipe(pipeStream)
console.log('3.0 -------管道流程序执行完毕-----')

// 4.0 链式流
var zlib = require('zlib')
// 压缩 pipe.txt 文件 为 pipe.txt.gz 文件
fs.createReadStream('pipe.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pipe.txt.gz'))
console.log('4.0 ------文件压缩完成-----')
