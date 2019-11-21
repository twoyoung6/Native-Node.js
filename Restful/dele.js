/* RESTful API 状态传递的演示 */

const express = require('express')
const app = express()
var fs = require('fs')
const port = 3001

// 创建了 RESTful API listUsers，用于删除用户信息
app.get('/deleUser/:id', (req, res) => {
  fs.readFile(__dirname + '/' + "./user.json", "utf8", function (err, data) {
    data = JSON.parse(data)
    console.log(req.params)
    delete data['user' + req.params.id]
    console.log(data)
    res.end(JSON.stringify(data))
  })
})
var server = app.listen(port, () => {
  console.log(`Example app listening on port` + port)
})
