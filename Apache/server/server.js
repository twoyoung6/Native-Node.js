let http = require('http');
let fs = require('fs');
let template = require('art-template');
let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./template.html', (error, data) => { // 读取模板文件
      if (error) { return res.end('SORRY, 404 NOT FOUND!') }
      fs.readdir('../www', (error, files) => { // 读取文件目录，返回目录下所有文件的数组
        if (error) { return res.end('----www dir is not found----') }
        let HTMLSTR = template.render(data.toString(), { // 模板引擎渲染数据
          files: files
        })
        res.end(HTMLSTR)
      })
    })
  } else {
    let filePath = url
    fs.readFile('../www' + url, (err, data) => { // 读取静态资源文件
      if (err) { return res.end('SORRY, 404 NOT FOUND!') }
      res.end(data)
    })
  }
})

server.listen(3000, () => {
  console.log('服务已经运行在 ............')
})
