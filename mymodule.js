const fs = require('fs');
const path=require('path');

module.exports = function (param1,param2,callback){

 fs.readdir(param1,(err,files)=>{
     if(err){
         return callback(err);
     }
     const filteredFiles=[];
          files.map((file)=>{
            if(path.extname(file)==="."+`${param2}`){
                filteredFiles.push(file);
                return file;
            }
          })
          return callback(null,filteredFiles);
 })

}
