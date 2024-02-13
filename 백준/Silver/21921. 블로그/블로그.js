var input = require("fs").readFileSync(0).toString().split("\n");

let [n, x] = input[0].split(" ");
let arr = input[1].split(" ");

let sum = 0;
let end = 0;
let sumArr = [];

for (let start = 0; start < arr.length; start++) {
  while (end - start < x) {
    sum += Number(arr[end]);
    end++;
  }
  sumArr.push(sum);
  sum -= Number(arr[start]);
}
let sumArr2 = sumArr.filter((item) => !isNaN(item));

const maxNumber = Math.max(...sumArr2);
const countMaxNumber = sumArr2.filter((num) => num === maxNumber).length;

if (maxNumber !== 0) {
  console.log(maxNumber);
  console.log(countMaxNumber);
} else {
  console.log("SAD");
}
