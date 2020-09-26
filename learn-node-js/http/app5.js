const dns = require("dns");

let domain = "bilibili.com";

// resolve() 返回解析出来的IP地址数组
dns.resolve(domain, function (err, address) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(address);
});

dns.lookup(domain, function (err, address) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(address);
});
