var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split("\n");
var data = input[0].split(" ");

let A1 = parseInt(data[0]);
let A2 = parseInt(data[1]);
let A3 = parseInt(data[2]);

if (A1 === A2 && A1 === A3) {
  console.log(10000 + A1 * 1000);
} else if (A1 === A2) {
  console.log(1000 + A1 * 100);
} else if (A1 === A3) {
  console.log(1000 + A1 * 100);
} else if (A2 === A3) {
  console.log(1000 + A2 * 100);
} else {
  console.log(Math.max(A1, A2, A3) * 100);
}
