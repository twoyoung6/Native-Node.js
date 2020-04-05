let http = require('http');
let fs = require('fs');
let template = require('art-template');
let server = http.createServer({ 'Content-Type': 'text/plain;charset=utf8' })
let path = require('path')
const getIPAdress = require('../getIp')
const myHost = getIPAdress();
const dayJs = require('../day')

// 创建HTTP 服务
server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') { // 服务器根目录
    fs.readFile(__dirname + '/template.html', (error, data) => { // 读取模板文件
      if (error) { return res.end('SORRY, 404 NOT FOUND!') }
      
      fs.readdir(path.join(__dirname, '..', '/www'), (error, files) => { // 读取文件目录，返回目录下所有文件的数组
        if (error) { return res.end('----www dir is not found----') }
        // 读取文件详细信息 比如 文件更新时间 、大小
        var times = []
        for (let index = 0; index < files.length; index++) {
          const item = files[index]
          let stat = fs.statSync(path.join(__dirname, '..', 'www', item)) // 同步读取
          times.push(dayJs(stat.mtime))
        }

        let doc = []
        doc = files.map((val, index) => {
          // 模板引擎渲染数据
          return { file: files[index], time: times[index] }
        })
        let HTMLSTR = template.render(data.toString(), {
          doc: doc
        })
        res.end(HTMLSTR)
      })
    })
  }
  
  else { // 服务器文件 www目录下的文件
    let filePath = url
    fs.readFile(path.join(__dirname, '..', '/www') + url, (err, data) => { // 读取静态资源文件
      if (err) { return res.end('<div style="text-align: center;font-size: 44px;margin-top: 100px">SORRY, NO ACCESS!!!</div>') }
      res.end(data)
    })
  }
})

server.listen(3000, () => {
  console.log(`服务正运行在：http://${myHost}:3000/`)
})
