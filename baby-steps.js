let arr=process.argv;
arr.splice(0,2);
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=Number(arr[i]);
    
}
console.log(sum);