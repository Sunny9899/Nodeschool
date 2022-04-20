const fs = require('fs');
const path=require('path');

module.exports = function (param1,param2,callback){

 fs.readdir(param1,(err,files)=>{
     if(err){
         return callback(err);
     }
          files.map((file)=>{
            if(path.extname(file)==="."+`${param2}`){
                return file;
            }
          })
          return callback(null,files);
 })

}
