var dns = require('dns');
// 解析为一个 rrtype 指定记录类型的数组
dns.resolve('www.sougou.com', 'A', function onResolve(err, address, family) {
  console.log(err, address, family)
})
// 域名解析为ip记录
dns.lookup('www.sougou.com', function onLookup(err, address, family) {
  console.log('ip 地址----', address);
  // 反向解析 IP 地址成 域名
  dns.reverse(address, function (err, hostnames) {
    if (err) { console.log(err.stack) };
    console.log('反向解析----' + address + ': ' + JSON.stringify(hostnames))
  })
})

