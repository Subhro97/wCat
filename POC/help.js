function helperFn(){
    console.log(`List of commands
    1- node wcat.js filepath 
    2- node wcat.js filepath1 filepath2 filepath3... 
    3- node wcat.js -s filepath 
    4- node wcat -n filepath  
    5- node wcat -b filepath `);
}
module.exports={
    helperFun:helperFn
}