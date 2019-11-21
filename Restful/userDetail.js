/* RESTful API 状态传递的演示 */

const express = require('express')
const app = express()
var fs = require('fs')
const port = 3000

// 创建了 RESTful API listUsers，用于读取用户信息
app.get('/userDetail/:id', (req, res) => {
  // res.sendFile(__dirname + '/index.html')
  fs.readFile(__dirname + '/' + "./user.json", "utf8", function (err, data) {
    data = JSON.parse(data)
    var user = data['user' + req.params.id]
    console.log(user)
    res.end(JSON.stringify(user))
  })
})
var server = app.listen(port, () => {
  console.log(`Example app listening on port` + port)
})
