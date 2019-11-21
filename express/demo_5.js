/* express 实例 单个文件上传 */
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

// 中间件的引入
var bodyParser = require('body-parser');
var multer = require('multer');

app.use('/public', express.static('public')); // static 中间件
app.use(bodyParser.urlencoded({ extended: false }));
// 第一种写法
// var upload = multer({ dest: '/tmp/' }).array('image');
// app.use(upload)
// 第二种写法
app.use(multer({
  dest: path.join(__dirname, '../public/upload/temp') // 写入上传文件对应的二进制流base64文件
}).any())

app.get('/upload.html', function (req, res) {
  res.sendFile(__dirname + '/' + 'upload.html');
})

app.post('/file_upload', function (req, res) {
  const files =  req.files[0]
  console.log(req.files)
  console.log(files); // 上传的文件信息
  var desFile = path.join(__dirname, '../public/upload', files.originalname); // 在磁盘中写入上传的文件
  fs.readFile(files.path, function (err, data) {
    fs.writeFile(desFile, data, function (err) {
      if (err) {
        console.log(err)
      } else {
        response = {
          message: '文件上传成功---',
          filename: files.originalname
        }
      }
      console.log(response)
      res.end(JSON.stringify(response))
    });
  })
})

var server = app.listen(8092, function (params) {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，服务访问地址：' + host + port)
})
