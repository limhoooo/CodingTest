const input = require("fs")
  .readFileSync("../dev/stdin")
  .toString()
  .trim()
  .split("\n");
const numL = input[0];
const arr = input.slice(1).map(Number);

let stack = [];
let result = 0;
for (let i = 0; i < numL; i++) {
  if (arr[i] === 0) {
    stack.splice(-1);
  } else {
    stack.push(arr[i]);
  }
}

stack.forEach((item) => (result += item));

console.log(result);
