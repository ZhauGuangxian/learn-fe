const http = require("http");

/**
 * request：最常用的事件，当客户端请求到来时，该事件被触发，提供req和res两个参数，表示请求和响应信息。
 * connection：当TCP连接建立时，该事件被触发，提供一个socket参数，是net.Socket的实例。
 * close：当服务器关闭时，触发事件（注意不是在用户断开连接时）。
 */

const server = new http.Server();

server.on("request", function (req, res) {
  res.writeHead(200, {
    "content-type": "text/plain",
  });
  res.end("Hello, Nodejs2");
});

server.listen(3399, function () {
  console.log("listening:3399");
});
