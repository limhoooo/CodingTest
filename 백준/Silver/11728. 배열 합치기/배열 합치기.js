const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ");

const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

let result = [];

let i = 0;
let j = 0;

while (i < n && j < m) {
  if (arrA[i] < arrB[j]) {
    result.push(arrA[i]);
    i++;
  } else {
    result.push(arrB[j]);
    j++;
  }
}

while (i < n) {
  result.push(arrA[i]);
  i++;
}
while (j < m) {
  result.push(arrB[j]);
  j++;
}

console.log(result.join(" "));
