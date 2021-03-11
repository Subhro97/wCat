let fs=require("fs");
let readline = require('readline');


function numbSFn(input){
  let a;
  if(input[1]=='-b'){
    a=2;
  }else{
    a=1;
  
  }

  let data="";
    
  function toDisplay(filepath){
      return fs.readFileSync(filepath,'utf8');
  }
  
  for(let idx=a;idx<input.length;idx++){
      let res=toDisplay(input[idx]);
      data=data+res+"\n";
  
  }
  
  let res=data.split("\n");
  for(let idx=0;idx<res.length-1;idx++){
   console.log(idx+1+"."+res[idx]);
  }  
/*let lineno = 0;
for(let idx=a;idx<input.length;idx++){
let myInterface = readline.createInterface({
  input: fs.createReadStream(input[idx])
});



myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
}*/
}

module.exports={
    numbSFun:numbSFn
}