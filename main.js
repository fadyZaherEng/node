//build in modules
const osArch = require('node:os');
const path = require('node:path');
console.log(osArch.arch());
console.log(path.dirname.name.toUpperCase());
//user defined modules
const calc = require('./calculator.js');
console.log(calc.add(1, 2));
console.log(calc.sub(2, 1));
console.log(calc.mul(2, 3));
console.log(calc.div(6, 2));
//user defined modules with key and varribles
console.log(calc.title);
//module cache
const cashedCalc = require('./calculator.js');
console.log(cashedCalc.add(1, 2));
const cashedCalc2 = require('./calculator.js');
console.log(cashedCalc2.add(1, 2));
const cashedCalc3 = require('./calculator.js');
console.log(cashedCalc3.add(1, 2));
//npm modules and packages in node by developer npm i package-name or npm i --save-dev package-name
const lodash = require('lodash'); 
console.log(lodash.assignInWith);  
const prettier = require('prettier');
console.log(prettier.getFileInfo); //lodash
//fs Modules
const fs=require("node:fs");
const fsWrite=fs.writeFileSync("./data.text","hell World");
const  fsAppend=fs.appendFileSync("./data.text"," APPEND");
const fsRead=fs.readFileSync("./data.text","utf-8");
console.log(fsRead);
//JSON FILE
var obj={
    "name":"Fady",
    "title":"Software Engineer",
    "old":25
};
const objStrFileJson=JSON.stringify(obj);//convert any type to string if type object convert to string file json
const stringJsonFileToObject=JSON.parse(objStrFileJson);
//form json file
const an=require("fs");
const fsJson=an.readFileSync("./jsonfile.json","utf-8");
const objJson=JSON.parse(fsJson);
console.log(objJson);