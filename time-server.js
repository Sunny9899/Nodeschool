let arr=process.argv;
let date=new Date();
const net = require('net');
let ans="";
const server = net.createServer(function (socket){
ans+=date.getFullYear()+"-"+"0"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
socket.end(ans);
})
server.listen(`${arr[arr.length-1]}`);
