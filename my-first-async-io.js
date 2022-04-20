const fs=require('fs');

fs.readFile(`${process.argv[2]}`,'utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let data3=data.trim().split("\n");
    console.log(data3.length-1);
})
