const http =require("http");
let arr=process.argv
arr.splice(0,2);

function getData(param){
    return new Promise((resolve)=>{
http.get(param,res=>{
    let ans="";
    res.on('data',d=>{
        ans+=(d);
    })
    res.on('end',()=>{
        resolve(console.log(ans));
    })
})
})
}

async function fetchData(){
 await getData(arr[0]);
 await getData(arr[1]);
 await getData(arr[2]);
}
fetchData();

