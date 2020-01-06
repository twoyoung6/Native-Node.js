var express = require('express')
var app = express()
let router = express.Router()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/post', (req, res) => res.send('---发布---'))
app.get('/edit', (req, res) => res.send('---编辑---'))
// app.get('/login', (req, res) => {
//   res.render('login.html', {
//     title: '----欢迎访问 登 录 页---'
//   })
// })

module.exports = router
