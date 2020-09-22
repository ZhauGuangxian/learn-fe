const http = require("http");

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {
//     "content-type": "text/plain",
//   });
//   res.end("Hello,Node.js");
// });

// server.listen(3399, function () {
//   console.log("listening port 3399");
// });

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "content-type": "text/plain",
  });
  res.end("Hello, nodejs2");
});

server.listen(3339, function () {
  console.log("listening port 3339");
});
