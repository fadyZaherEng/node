console.log("hello world");
const add=(a,b)=>a+b;

const sub=(a,b)=>a-b;

const mul=(a,b)=> a*b;

const div=(a,b)=>a/b;
//make method public
const title="calculator";
module.exports={
    title:title,
    add,
    sub,
    mul,
    div    
};
var fileName=__filename;
var dirName=__dirname;