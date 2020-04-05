module.exports = function dayJs(params) {
  const fillZero = function (s) {
      return s < 10 ? '0' + s : s
  }
  const d = new Date(params)
  const resDate = d.getFullYear() + '-' + fillZero((d.getMonth() + 1)) + '-' + fillZero(d.getDate())
  const resTime = fillZero(d.getHours()) + ':' + fillZero(d.getMinutes()) + ':' + fillZero(d.getSeconds())
  return `${resDate} ${resTime}`
}
     