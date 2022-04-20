const mymodule=require('./mymodule');
const path=require('path');

let arr=process.argv;
arr.splice(0,2);

let param1=arr[0];
let param2=arr[1];

mymodule(param1,param2,(err,files)=>{
    if(err){console.log(err);
    }
    
    files.map((file)=>{
        if(path.extname(file)==="."+`${param2}`){
            console.log(file);
        }
      })
})