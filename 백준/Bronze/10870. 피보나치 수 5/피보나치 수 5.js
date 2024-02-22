const input = require("fs").readFileSync("./dev/stdin").toString();
let num = Number(input);

// 0 1 1 2 3 5 8 13 21 34 55

const d = new Array(21).fill(0);

function fibo(x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  if (d[x] !== 0) {
    return d[x];
  }

  d[x] = fibo(x - 1) + fibo(x - 2);
  return d[x];
}

if (num !== 0) {
  console.log(fibo(num));
} else {
  console.log(0);
}
