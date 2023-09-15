const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let weight = parseInt(line);
  let result = 0;

  for (let i = 3; i <= 15; i += 3) {
    if (weight % 5 === 0) {
      result += weight / 5;
      weight = 0;
      break;
    }
    weight -= 3;
    if (weight >= 0) result += 1;
    else break;
  }

  console.log(weight === 0 ? result : -1);
  process.exit();
});
