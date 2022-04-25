const http = require("http");
const port = process.argv[2];

http.createServer((req, res) => {

console.log(req.url);
const response={
  "hour":1,
  "minute":2,
  "second":3,
}
const sendresponse=JSON.stringify(response);
res.end(sendresponse);

}).listen(port);