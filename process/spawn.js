var fs = require('fs');
const child_process = require('child_process')

for (let index = 0; index < 3; index++) {
  var workProcess = child_process.spawn('node', ['process/support.js', index])
  workProcess.stdout.on('data', function (data) {
    console.log('标准输出-----' + data)
  })
  workProcess.stderr.on('data', function (data) {
    console.log('标准异常-----' + data)
  })
}
workProcess.on('close', function (code) {
  console.log('子进程退出,退出码 ' + code)
})
