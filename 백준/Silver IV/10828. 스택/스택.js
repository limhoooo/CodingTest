const input = require("fs")
  .readFileSync("../dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input.slice(1);

let stack = [];
let result = "";
for (let i = 0; i < arr.length; i++) {
  let command = arr[i].split(" ")[0].trim();
  let txt = "";
  switch (command) {
    case "push":
      stack.push(arr[i].split(" ")[1]);
      break;
    case "top":
      txt = stack.length > 0 ? stack[stack.length - 1] : "-1";
      result += txt.trim() + " ";
      break;
    case "size":
      txt = stack.length;
      result += txt + " ";
      break;
    case "empty":
      txt = stack.length > 0 ? "0" : "1";
      result += txt + " ";
      break;
    case "pop":
      txt = stack.splice(-1);
      let tet2 = txt.length > 0 ? txt + "" : "-1";
      result += tet2.trim() + " ";
      break;
    default:
      break;
  }
}

console.log(result.split(" ").join("\n").trim());
