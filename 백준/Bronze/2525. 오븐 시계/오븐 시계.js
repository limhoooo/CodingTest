var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split("\n");
var data = input[0].split(" ");
let H = parseInt(data[0]);
let M = parseInt(data[1]);
let cook = parseInt(input[1]);

let time = M + cook;
if (time >= 60) {
  H = H + parseInt(time / 60);
  M = time % 60;
  if (H >= 24) {
    H -= 24;
  }
  console.log(`${H} ${M}`);
} else {
  console.log(`${H} ${time}`);
}
