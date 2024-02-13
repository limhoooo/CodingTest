const input = require("fs")
  .readFileSync("../dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = [];
let sum = 0;

// 초기 sum 계산
for (let i = 0; i < K; i++) {
  sum += arr[i];
}

result.push(sum);

// 이후부터는 기존 sum에서 이전 값 빼고 새로운 값 더하기
for (let i = K; i < N; i++) {
  sum = sum - arr[i - K] + arr[i];
  result.push(sum);
}

let max = Math.max(...result);

console.log(max);