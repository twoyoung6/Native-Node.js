/* RESTful API 状态传递的演示 */

const express = require('express')
const app = express()
var fs = require('fs')
const port = 3000

// 创建了 RESTful API listUsers，用于读取用户的信息列表
app.get('/listUsers', (req, res) => {
  fs.readFile(__dirname + '/' + "./user.json", "utf8", function (err, data) {
    console.log(data)
    res.end(data)
  })
})
var server = app.listen(port, () => {
  console.log(`Example app listening on port` + port)
})
