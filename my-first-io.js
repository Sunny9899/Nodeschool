const fs=require('fs');

try{
    const data=fs.readFileSync(`${process.argv[2]}`)
    const data2=data.toString();
    let data3=data2.trim().split("\n");
    console.log(data3.length-1);
} catch(err){
    console.log(err);
}