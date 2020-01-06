let express = require('express')
let app = express()

app.engine('html', require('express-art-template'))
app.set('views', __dirname + '/views') // 视图页面的默认为根目录文件夹 view 的修改；
app.get('/', (req, res) => {
  res.render('login.html', {
    title: '----欢迎访问 登 录 页---'
  })
})

app.listen(3000, () => {
  console.log('服务运行中......')
})
