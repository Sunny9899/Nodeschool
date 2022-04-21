let arr=process.argv;
const net = require('net');

const port= Number(arr[arr.length-1]);
const strftime=require('strftime');

const server = net.createServer(function (socket){
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.end("\n");
})

server.listen(`${port}`);