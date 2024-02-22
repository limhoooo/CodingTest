const input = require("fs").readFileSync("./dev/stdin").toString();
function df(n) {
  let num1 = BigInt(0);
  let num2 = BigInt(1);
  let result = n === 0 ? BigInt(0) : BigInt(num1) + BigInt(num2);

  for (let i = 1; i < n; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }

  return result;
}

console.log(df(Number(input)).toString());
