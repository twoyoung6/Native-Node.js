/* 核心脚本 */
var server = require('./servers')
var router = require('./router')

// 全局定时 API
// setInterval(function (params) {
//   console.log('---Node 程序运行中---')
// }, 2000)

// 全局对象 process 的使用
// node 终端进程的相关属性
process.stdout.write('---进程输出---\n')

// 通过参数获取
process.argv.forEach(function (val, index, arr) {
  console.log(index + ':' + val)
})

// 获取进程执行路径
console.log('进程执行路径----' +  process.execPath)

// 当前目录
console.log('目录-----' + process.cwd())
// 当前版本
console.log('版本----' + process.version)
// 平台信息
console.log('platform-----' + process.platform)
// process 方法
console.log('进程已经执行的时间----' + process.uptime())
console.log('内存使用情况----', process.memoryUsage())
server.start(router.route);
