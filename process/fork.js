const fs = require('fs')
const child_process = require('child_process')

for (let index = 0; index < 3; index++) {
  var workProcess = child_process.fork('process/support.js', [index])

  workProcess.on('close', function (code) {
    console.log('====子进程已经退出=====' + code)
  })
}
