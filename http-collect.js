const http =require("http");
let arr=process.argv
arr.splice(0,2);


http.get(arr[0],res=>{
    let ans="";
    let sum=0;
    res.on('data',d=>{
        ans+=(d);
        sum+=d.length;
    })
    res.on('end',()=>{
        console.log(sum);
        console.log(ans);
    })
})

