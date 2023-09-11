var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split("\n");
var data = input[0].split(" ").map(Number);

for (let i = 0; i < data.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < data.length; j++) {
    if (data[minIndex] > data[j]) {
      minIndex = j;
    }
  }
  let temp = data[i];
  data[i] = data[minIndex];
  data[minIndex] = temp;
}

let result = "";
for (let i = 0; i < data.length; i++) {
  result = result + data[i] + " ";
}

console.log(result);
