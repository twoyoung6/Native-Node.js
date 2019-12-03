let http = require('http');
let fs = require('fs');
let template = require('art-template');
let server = http.createServer({ 'Content-Type': 'text/plain;charset=utf8' })
let path = require('path')

server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') { // 服务器根目录
    fs.readFile(__dirname + '/template.html', (error, data) => { // 读取模板文件
      if (error) { return res.end('SORRY, 404 NOT FOUND!') }
      fs.readdir(path.join(__dirname, '..', '/www'), (error, files) => { // 读取文件目录，返回目录下所有文件的数组
        if (error) { return res.end('----www dir is not found----') }
        let HTMLSTR = template.render(data.toString(), { // 模板引擎渲染数据
          files: files
        })
        res.end(HTMLSTR)
      })
    })
  } else { // 服务器文件 www目录下的文件
    let filePath = url
    fs.readFile(path.join(__dirname, '..', '/www') + url, (err, data) => { // 读取静态资源文件
      if (err) { return res.end('SORRY, 404 NOT FOUND!') }
      res.end(data)
    })
  }
})

server.listen(3000, () => {
  console.log('服务正在运行 ............')
})
