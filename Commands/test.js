let fs=require("fs");


function testFn(input){
let data="";
    
function toDisplay(filepath){
    return fs.readFileSync(filepath,'utf8');
}

for(let idx=2;idx<input.length;idx++){
    let res=toDisplay(input[idx]);
    data=data+res.replace(/[\r\n]+/gm,"\n")+"\n";

}

let res=data.split("\n");
for(let idx=0;idx<res.length-1;idx++){
 console.log(idx+1+"."+res[idx]);
}
}
module.exports={
    testFun:testFn
}





