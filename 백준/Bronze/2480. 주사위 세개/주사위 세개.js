var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split("\n");
var data = input[0].split(" ");
let A1 = parseInt(data[0]);
let A2 = parseInt(data[1]);
let A3 = parseInt(data[2]);

let count = 0;
let same = 0;
if (A1 === A2) {
  count++;
  same = A1;
} else if (A1 === A3) {
  count++;
  same = A1;
}
if (A2 === A3) {
  count++;
  same = A2;
}

if (count === 0) {
  let big = 0;
  if (A1 >= A2) {
    big = A1;
  } else {
    big = A2;
  }

  if (big <= A3) {
    big = A3;
  }
  console.log(big * 100);
} else if (count === 1) {
  console.log(1000 + same * 100);
} else if (count === 2) {
  console.log(10000 + same * 1000);
}

