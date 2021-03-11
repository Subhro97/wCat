let input=process.argv.slice(2);

let dispFileObj=require("./commands/display");
let lineBrFileObj=require("./commands/lineBr");
let numbFileObj=require("./commands/numbering");
let numbSFileObj=require("./commands/numbspace");
let testObj=require("./commands/test");

if(input[0]=='-s'){
    if(input[1]=='-b'){
        testObj.testFun(input);
    }
    else if(input[1]=='-n'){
        testObj.testFun(input);

    }
    else{
    lineBrFileObj.lineBrFun(input);
    }

}else if(input[0]=='-b'){
    if(input[1]=='-n'){
        numbFileObj.numbFun(input);
    }else{
        numbFileObj.numbFun(input);
    }

}else if(input[0]=='-n'){
    if(input[1]=='-b'){
    numbSFileObj.numbSFun(input);
    }else{
    numbSFileObj.numbSFun(input);
    }

}else{
    dispFileObj.dispFun(input);

}

