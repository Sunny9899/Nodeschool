const http =require("http");
const fs=require("fs");
let arr=process.argv;
const port=arr[2];
const location=arr[3];

http.createServer((req, res)=> {

    let stream=fs.createReadStream(location)
    stream.pipe(res);
    return res;

  }).listen(port);