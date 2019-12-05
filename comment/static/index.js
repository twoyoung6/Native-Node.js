let btn = document.getElementById('btn-publish')
btn.onclick = function () {
  console.log(__dirname + '/post')
  window.location.reload(true)
  window.location = __dirname + '/post'
}
