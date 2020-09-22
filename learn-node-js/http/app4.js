// 客户端向HTTP服务器发起请求
const http = require("http");

let reqData = "";
http.request(
  {
    host: "127.0.0.1",
    port: 3399,
    method: "get",
  },
  function (res) {
    res.on("data", function (chunk) {
      reqData += chunk;
    });
    res.on("end", function () {
      console.log(reqData);
    });
  }
);
// 或者
/**
 * http.get({
 *  host: '127.0.0.1,
 *  port: 3399
 * })
 */
