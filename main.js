//build in modules
const osArch = require('node:os');
const fs = require('node:fs');
const path = require('node:path');
console.log(osArch.arch());
console.log(fs.ReadStream);
console.log(path.dirname.name.toUpperCase());
//user defined modules
const calc = require('./calculator.js');
console.log(calc.add(1, 2));
console.log(calc.sub(2, 1));
console.log(calc.mul(2, 3));
console.log(calc.div(6, 2));
//user defined modules with key and varribles
console.log(calc.title);