var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => b - a);

let money = k;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (money > 0 && Math.floor(money / arr[i]) > 0) {
    count += Math.floor(money / arr[i]);
    money = money % arr[i];
  }
}

console.log(count);
