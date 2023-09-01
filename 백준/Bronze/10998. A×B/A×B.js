var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var data = input[0].split(' ')
var a = parseInt(data[0]);
var b = parseInt(data[1]);
console.log(a * b);