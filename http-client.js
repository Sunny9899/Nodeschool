const http =require("http");
let arr=process.argv
arr.splice(0,2);

http.get(arr[0], function callBack(res){
    res.on('data',function (data){console.log(data.toString())})
})