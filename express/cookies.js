/* cookie管理 */
// 使用中间件向node.js 服务器发送 cookie信息
const express = require('express')
var cookieParser = require('cookie-parser')
var util = require('util')

const app = express()
const port = 9083

app.use(cookieParser());
app.get('/', (req, res) => {
  console.log('Cookie：' + util.inspect(req.cookies));
})
app.listen(port, () => console.log(`Example app listening on port` + port))

