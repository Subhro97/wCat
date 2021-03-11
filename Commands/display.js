let fs=require("fs");

function dispFn(input){
let data="";

function toDisplay(filepath){
    return fs.readFileSync(filepath,'utf8');
}

for(let idx=0;idx<input.length;idx++){
    data=data+"\n"+toDisplay(input[idx]);

}
console.log(data);
}

module.exports={
    dispFun:dispFn
}
