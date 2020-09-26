## Category 4， Nodejs 自带的核心模块

### dns 模块

dns 模块的功能是域名处理和域名解析，常用的方法有

- `dn2.resolve():` 将一个域名解析为指定类型数组。
- `dns.lookup():` 返回第一个被发现的 IPV4 或者 IPV6 地址
- `dns.reverse():` 通过 IP 解析域名

通过 dns.resolve() 方法解析一下网站的 ipv4 地址

```javascript
const dns = require("dns");
let domain = "bilibili.com";
dns.resolve(domain, function (err, address) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(address);
});
```
