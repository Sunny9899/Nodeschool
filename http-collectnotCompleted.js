const http =require("http");
let arr=process.argv
arr.splice(0,2);


http.request(arr[0], function callBack(res){
    let ans1="";
    let sum=0;
    res.on('data',function (data){
        ans1+=(data.toString());
        sum+=data.toString().trim().split("").length;
    })
    res.on('end',function(){
        return(JSON.parse(ans1));
        return(sum);
    })

}).end()
