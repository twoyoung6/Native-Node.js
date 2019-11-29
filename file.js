var fs = require('fs')

// // 打开文件获取文件信息
// console.log('---准备打开文件---');
// fs.stat('input.txt', function (err, stats) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(stats)
//   console.log('---文件读取成功---')
//   // 检测文件类型
//   console.log("是否是文件(isFile) ?" + stats.isFile())
//   console.log('是否是目录(isDirectory) ?' + stats.isDirectory())
// })

// 创建目录
fs.mkdir('./mkdir/test/', { recursive: true }, (err) => {
  if (err) { return console.error(err) }
})
// 查看读取目录
// console.log('----查看目录----')
// fs.readdir('./mkdir/', (err, files) => {
//   if (err) { return console.error(err) }
//   files.forEach(File => {
//     console.log(File)
//   });
// })
// 删除目录(只能删除空目录)
// fs.rmdir('./mkdir/test', (err) => { return console.error(err) })

// 写入文件
console.log('---准备写入文件----')
fs.writeFile('./mkdir/test/fs.txt', '我是通过 file.js 中的 fs.write 写入的文件的内容', function name(err) {
  if (err) {
    return console.error(err);
  }
  console.log('---数据写入成功！---')
  console.log('----读取写入的数据-----')
  fs.readFile('fs.txt', function (eer, data) {
    if (err) { return console.error(err) }
    console.log('异步读取文件数据----' + data.toString()) // 读取回来的默认是二进制的内容，所以需要调用toString()方法进行转换
  })
})

// 读取文件
// var buf = new Buffer.alloc(1024) // 创建缓冲区
// console.log('----准备打开已存在的文件---')
// fs.open('fs.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('----文件打开成功！----')
//   console.log('----准备读取文件----')
//   fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//     if (err) { console.log(err) }
//     console.log(bytes + '   字节被读取')

//     // 仅仅输出被读取的字节
//     if (bytes > 0) { console.log(buf.slice(0, bytes).toString()) }
//     console.log('----文件读取结束----')
//     // 关闭文件
//     fs.close(fd, function (err) {
//       if (err) { return console.log(err) }
//     })
//     console.log('----关闭文件成功----')
//   })
// })

// 删除文件
// fs.unlink('fs.txt', function (err) {
//   if (err) { return console.error(err) }
//   console.log('----文件删除成功----')
// })
