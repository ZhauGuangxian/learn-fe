const request = require("request");
const path = require("path");
const config = require("./config");
const analyze = require("./analyze");
const fs = require("fs");
function start() {
  request(config.url, function (err, res, body) {
    console.log("start");

    if (!err && res) {
      // console.log('')
      analyze.findImg(body, download);
    }
  });
}

function download(imgUrl, i) {
  let ext = imgUrl.split(".").pop();
  let correctUrl = imgUrl;
  const ImgDir = path.join(config.imgDir, i + "." + ext);

  if (imgUrl.indexOf("data:image") >= 0) {
    let base64Data = correctUrl.replace(/^data:image\/\w+;base64,/, "");

    let dataBuffer = new Buffer.from(base64Data, "base64");
    console.log(correctUrl, "is-base64");
    fs.writeFile(
      path.join(config.imgDir, i + ".png"),
      dataBuffer,
      function () {}
    );
  } else {
    // correctUrl = "https:" + correctUrl;
    console.log(correctUrl, "not-base64");
    try {
      request(correctUrl).pipe(
        fs.createWriteStream(ImgDir, {
          encoding: "utf8",
        })
      );
    } catch (err) {
      console.error(err);
    }
  }
}

start();
