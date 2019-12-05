// 创建 HTTP 服务器
const dayjs = require('dayjs') // 日期处理插件
let http = require('http')
let fs = require('fs')
let url = require('url')
let template = require('art-template')
// 默认参数
let comments = [
  {
    name: 'jack',
    content: 'hello world',
    time: '2019-05-10 09:23'
  },
  {
    name: 'Tom',
    content: '单进程单线程',
    time: '2019-05-10 09:23'
  },
  {
    name: 'dream',
    content: '异步、事件驱动型服务端语言',
    time: '2019-05-10 09:23'
  },
  {
    name: 'james',
    content: '可作为前后端交互的中间层',
    time: '2019-05-10 09:23'
  },
  {
    name: 'jack',
    content: '支持异步I/O流操作',
    time: '2019-05-10 09:23'
  },
  {
    name: 'life',
    content: '可以作为小型独立的服务器',
    time: '2019-08-08 08:08'
  }
]

http.createServer(function(req, res) {
  let obj = url.parse(req.url, true) // 解析url传递的参数
  let pathname = obj.pathname
  let query = obj.query // 参数
  // res.writeHead(200, { 'cache-control': 'no-cache' })
  if (pathname === '/') { // a.首页（评论列表页）
    fs.readFile(__dirname + '/public/views/index.html', (err, data) => {
      if (err) { return res.end('index.html - 404 NOT FOUND') }
      let htmlStr = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
  } else if (pathname === '/post') { // b.发表评论页
    fs.readFile(__dirname + '/public/views/post.html', (err, data) => {
      if (err) { return res.end('post.html - 404 NOT FOUND') }
      res.end(data)
    })
  } else if (pathname === '/comment') { // c.重定向页面，在发表评论之后
    res.statusCode = 302 // 设置响应状态码 302（重定向跳转的状态）
    res.setHeader('location', '/') // 设置响应头location，告诉浏览器重定向地址
    if (query.name && query.content) {
      query.time = dayjs().format('YYYY-MM-DD HH:mm')
      comments.unshift(query) // 插入最新的评论数据
    }
    res.end()
  } else { // d.404页面
    fs.readFile(__dirname + '/public/views/404.html', (err, data) => {
      if (err) { return res.end('404.html - 404 NOT FOUND') }
      res.end(data)
    })
  }
}).listen(6068)

console.log('Server running at http://127.0.0.1:6068/')
