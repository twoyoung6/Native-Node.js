var path = require('path')
var url = require('url')

// 格式化路径
console.log('normalization-----' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// path.resolve 将 to 参数解析为绝对路径
// 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
var pathJs = path.resolve('./mkdir/test', './fs.txt')
console.log('--./fs.txt--', path.resolve('./mkdir/test', './fs.txt'))
console.log('--/fs.txt--', path.resolve('/mkdir/test', '/fs.txt'))
console.log('--../fs.txt--', path.resolve('/mkdir/test', '../fs.txt'))
console.log('path.isAbsolute----', pathJs)

// path.relative 将绝对路径转为相对路径 from 到 to 的相对路径
console.log(path.relative('E:\\Demo\\origin node', 'E:\\Demo\\origin node\\mkdir\\test\\fs.txt'));
console.log(path.relative('E:\\Demo\\origin node\\mkdir\\test\\fs.txt', 'E:\\Demo\\origin node\\buffer.js'));

// path.dirnam 返回路径中文件夹部分
console.log('path.dirname-----', path.dirname(pathJs))

// path.basename 返回路径最后部分
console.log('path.basename---', path.basename(pathJs))

// path.extname 返回路径中最后一部分
console.log('path.extname----', path.extname(pathJs))

console.log(path.parse(pathJs))
console.log(__dirname, __filename)
console.log('----------------------------------------------')
console.log(url.parse('http://www.baidu.com?name=cc&age=24', true))
console.log(url.resolve('http://www.baidu.com/index/list', '/user'))
console.log(url.resolve('http://www.baidu.com/index/list', 'user'))