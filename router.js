/* 路由脚本 */
function route(pathname) {
  console.log('---路由请求传参已经接收----' + pathname)
  console.log('这表明我们的HTTP服务器已经在使用路由模块了，并会将请求的路径传递给路由.')
}
exports.route = route

