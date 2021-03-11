let fs=require("fs");

function lineBrFn(input){
    
function toDisplay(filepath){
    return fs.readFileSync(filepath,'utf8');
}

for(let idx=1;idx<input.length;idx++){
    let res=toDisplay(input[idx]);
    console.log(res.replace(/[\r\n]+/gm,"\n"));

}

}

module.exports={
    lineBrFun:lineBrFn
}