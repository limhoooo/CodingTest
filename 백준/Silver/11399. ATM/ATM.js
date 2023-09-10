var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = input[1].split(" ").map(Number);

let arr = k.sort((a, b) => a - b);

let sum = 0;
let conut = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  conut += sum;
}
console.log(conut);
