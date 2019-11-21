/* node 工具类 node 版本 V10.8.0 */
var util = require('util');
function Person (params) {
  this.name = ''
  this.user = {
    family: [{
      members: {
        'name': 'jack'
      }
    }]
  }
  this.toString = function (params) {
    return this.name
  }
}
// isArray
console.log('[] isArray---', util.isArray([]))
console.log('{} isArray---', util.isArray({}))
// inspect
var obj = new Person()
console.log(util.inspect(obj))
console.log((util.inspect(obj, true, null, true)))
// isRegExp
console.log('isRegExp---', util.isRegExp(/.\n/))
// isDate
console.log('isDate---', util.isDate(new Date()))
// isError
console.log('isError---', util.isError(new Error()))
