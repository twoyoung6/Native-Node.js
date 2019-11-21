/* 内置事件 */
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var eventHandler = function connected() {
  console.log('|1.0 链接成功！|')
  // 触发绑定的 dataReceived 事件
  eventEmitter.emit('dataReceived');
}
// 绑定 connection 事件
eventEmitter.on('connection', eventHandler); // connection 事件监听器
// 使用匿名函数 绑定 dataReceived 事件
eventEmitter.on('dataReceived', () => { // dataReceived 事件监听器
  console.log('|2.0 数据接收成功|');
});

// 定义事件处理函数
var listenerInput = function listenerInput() {
  console.log('监听器 listenerInput 执行。');
}
// 绑定事件
eventEmitter.addListener('connection', listenerInput)

var eventListeners = eventEmitter.listenerCount('connection'); // 返回指定事件的监听器数量

// 触发 connection 事件
eventEmitter.emit('connection');
// eventEmitter.emit('error'); // 错误事件

console.log(`${eventListeners} 个监听器监听连接事件。`);

console.log('|3.0 程序执行完毕|')
