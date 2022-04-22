const http = require("http");
const throughMap = require("through2-map");
const port = process.argv[2];

http
  .createServer((req, res) => {
    let data = req
      .pipe(
        throughMap(function (chunk) {
          return chunk.toString().split("").join("").toUpperCase();
        })
      )
      .pipe(res);
    return data;
  })
  .listen(port);
