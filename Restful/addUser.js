/* RESTful API 状态传递的演示 */

const express = require('express')
const app = express()
var fs = require('fs')
const port = 3000

const obj = {
  "name": "twoyoung",
  "password": "password6",
  "profession": "front-development",
  "id": 6
}
// 创建了 RESTful API listUsers，用于新增用户信息
app.get('/addUser', (req, res) => {
  fs.readFile(__dirname + '/' + "./user.json", "utf8", function (err, data) {
    data = JSON.parse(data)
    data['user4'] = obj
    console.log(data)
    res.end(JSON.stringify(data))
  })
})
var server = app.listen(port, () => {
  console.log(`Example app listening on port` + port)
})
