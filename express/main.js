let express = require('express')
let router = require('./router')
let app = express()
app.use(router)
app.listen(9000, () => {
  console.log('服务运行中')
})
