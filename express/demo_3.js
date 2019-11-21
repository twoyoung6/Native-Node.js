const express = require('express')
const app = express()
const port = 8091

app.use('/public', express.static('public'));

app.get('/index.html', (req, res) => res.sendFile(__dirname + "/" + 'index.html'))

app.get('/progress_get', function (req, res) {
  var resQ = {
    'name': req.query.name,
    'pws': req.query.pws
  }
  console.log(resQ)
  res.end(JSON.stringify(resQ))
})
var server = app.listen(port, () => console.log(`Example app listening on port：` + port))

