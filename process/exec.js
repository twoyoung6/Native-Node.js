const fs = require('fs')
const child_process = require('child_process')
for (let index = 0; index < 3; index++) {
  var workerProcess = child_process.exec(`node process/support.js ${index}`, function (err, stdout, stderr) {
    if (err) {
      console.log(err.stack)
      console.log('错误 code---' + err.code)
      console.log('信号 received---' + err.signal)
    }
    console.log('标准输出---- ' + stdout)
    console.log('标准异常---- ' + stderr)
  })
  workerProcess.on('exit', function (code) {
    console.log('子进程已经退出，退出码 ' + code)
  })
}
