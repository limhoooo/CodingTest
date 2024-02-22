const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const x = Number(input[2]);

let end = N - 1;
let count = 0;

for (let start = 0; start < N; start++) {
  while (end > start && arr[start] + arr[end] > x) {
    end--;
  }
  if (start >= end) break;
  if (arr[start] + arr[end] === x) {
    count++;
    end--;
  }
}

console.log(count);
