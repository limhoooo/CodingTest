var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var data = input[0].split(' ')


var a = Number(data[0]);
var b = Number(data[1]);
console.log(a * b);