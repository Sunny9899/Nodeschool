const http = require("http");
const url=require("url");
const port = process.argv[2];

http.createServer((req, res) => {

const reqUrl=url.parse(req.url,true);
const reqPath=reqUrl.pathname;
const reqTime=new Date(reqUrl.query.iso);

if(reqPath==='/api/parsetime'){
  result = {
  hour: Number(reqTime.getHours()),
  minute: reqTime.getMinutes(),
  second: reqTime.getSeconds(),    
  };
}
 if(reqPath==='/api/unixtime'){
   result ={
  unixtime:reqTime.getTime(),
  }; 
}

if(result){
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify(result));
  console.log(result);
}else{
  res.writeHead(404);
  res.end();
}

}).listen(port);