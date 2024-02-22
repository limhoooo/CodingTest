const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ");
const arr = input[1].split(" ").map(Number);

let end = 0;
let sum = 0;
let result = [];

for (let start = 0; start < N; start++) {
  while (end - start < K) {
    sum += arr[end];
    end++;
  }
  result.push(sum);
  sum -= arr[start];
}

result = result.filter((item) => !isNaN(item));
const maxResult = Math.max(...result);
const resultLength = result.filter((item) => item === maxResult).length;

if (maxResult === 0) {
  console.log("SAD");
} else {
  console.log(maxResult);
  console.log(resultLength);
}
