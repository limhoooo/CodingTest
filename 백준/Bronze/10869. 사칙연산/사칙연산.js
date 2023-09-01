var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var data = input[0].split(' ')

let a = parseInt(data[0]);
let b = parseInt(data[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);