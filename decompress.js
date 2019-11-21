// 解压链式流创建的压缩文件 pipe.txt.gz 为 decompress.txt
var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('ninjia.png').pipe(zlib.createGzip().pipe(fs.createWriteStream('pic.png.gz')))
setTimeout(() => {
  fs.createReadStream('pic.png.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('decompress.png'))
}, 2);
console.log('----图片文件解压完成-----')
