var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var data = input[0].split(' ')
const H = parseInt(data[0]);
const M = parseInt(data[1]);
if (M - 45 >= 0) {
  console.log(`${H} ${M - 45}`);
} else {
  if (H === 0) {
    console.log(`23 ${60 - 45 + M}`);
  } else {
    console.log(`${H - 1} ${60 - 45 + M}`);
  }
}
