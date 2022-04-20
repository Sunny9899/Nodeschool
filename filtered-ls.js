
const fs = require('fs');
const path=require('path');

let arr=process.argv;
arr.splice(0,2);

let param1=arr[0];
let param2=arr[1];

fs.readdir(param1,(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
           files.forEach((file)=>{
               if(path.extname(file)==`.${param2}`){
                   console.log(file);
               }
           })
    }
})
