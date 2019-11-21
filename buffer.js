/* Buffer 类 */

// 0 填充的 Buffer
const buf1 = Buffer.alloc(14)
// 0x1填充的 Buffer
const buf2  =Buffer.alloc(10, 1)

// 创建一个长度为 10 但未初始化的 Buffer
const buf3 = Buffer.allocUnsafe(10)
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
const buf4 = Buffer.from([1, 2, 3])
// 复制 Buffer 实例 返回一个新的 实例
const buf5 = Buffer.from(buf4)

console.log('buf1---', buf1)
console.log('buf2---', buf2)
console.log('buf3---', buf3)
console.log('buf4---', buf4)
console.log('buf5---', buf5)

// 写入缓存
len = buf1.write('www.baidu.com')
console.log(`写入字节---${len}`)
// 读取缓存
console.log(buf1.toString('utf-8', 0, 11))
console.log(buf1.toString('ascii', 0, 4))

// 将 Buffer 实例 转成 JSON 对象
console.log('JSON---', buf2.toJSON())
// 合并缓存
var buf6 = Buffer.concat([buf1, Buffer.from('node基础教程')])
console.log(buf6.toString())

// 缓存比较
var buffer1 = Buffer.from('YZ');
var buffer2 = Buffer.from('LTY');
var result = buffer1.compare(buffer2);
if (result < 0) {
  console.log(result, buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
  console.log(result, buffer1 + " 与 " + buffer2 + "相同");
} else {
  console.log(result, buffer1 + " 在 " + buffer2 + "之后");
}

// 拷贝缓存区
var buf7 = Buffer.from('学习实战')
buf7.copy(buf6, 18)
console.log('buf6---', buf6.length, buf6.toString())

// 缓冲区剪裁
console.log(buf6.slice(0, 13).length, buf6.slice(0, 13).toString())

console.log('fill06---', buffer2.fill(6))
