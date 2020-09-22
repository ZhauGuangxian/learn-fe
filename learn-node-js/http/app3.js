const http = require("http");

const server = new http.Server();
server.on("request", function (req, res) {
  let data = "";
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    let method = req.method;
    let url = req.url;
    let httpVersion = req.httpVersion;
    let headers = JSON.stringify(req.headers);
    res.writeHead(200, {
      "content-type": "text/html",
    });
    let temp0 = `<p>data:${data}</p>`;
    let temp1 = `<p>method:${method}</p>`;
    let temp2 = `<p>url:${url}</p>`;
    let temp3 = `<p>httpVersion: ${httpVersion}</p>`;
    let temp4 = `<p>headders: ${headers} </p>`;
    let resData = temp0 + temp1 + temp2 + temp3 + temp4;

    res.end(resData);
  });
});

server.listen(3399, function () {
  console.log("listening:3399");
});
