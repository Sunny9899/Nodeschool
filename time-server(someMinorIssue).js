let arr=process.argv;
let date=new Date();
const net = require('net');
let ans="";
const server = net.createServer(function (socket){
socket.end(date.getFullYear()+"-"+"0"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes());
})
const port= Number(arr[arr.length-1])
server.listen(`${port}`);
