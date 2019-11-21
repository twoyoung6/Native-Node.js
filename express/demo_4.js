const express = require('express')
const app = express()
const port = 8091
var bodyParser = require('body-parser');

// body - parser和multer这类解析body数据的中间件
// 创建 用于 POST请求的，  application/x-www-form-urlencoded 编码解析，填充 req.body
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use('/public', express.static('public'));

app.get('/index.htm', (req, res) => { res.sendFile(__dirname + '/' + 'index.htm') });

app.post('/update', urlencodedParser, function(req, res) {
  const resQ = { name, description } = req.body
  console.log(resQ)
  res.send('姓名：' + resQ.name + '描述：' + resQ.description );
});

var server = app.listen(port, () => console.log(`Example app listening on port!:` + port))
