const input = require("fs")
  .readFileSync("../dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const commands = input.slice(1);

// 문제 풀이
function solution(n, commands) {
	const stack = [];
	let top = 0;
	let answer = '';

	for (let i = 0; i < n; i += 1) {
		const command = commands[i].split(' ')[0];
		let result = '';

		switch (command) {
			case 'push':
				const pushItem = commands[i].split(' ')[1];
				stack[top++] = pushItem;
				break;
			case 'pop':
				if (top) {
					top -= 1;
					result = stack.splice(-1);
					answer += result + ' ';
				} else {
					result = -1;
					answer += result + ' ';
				}
				break;
			case 'top':
				result = top ? stack[top - 1] : -1;
				answer += result + ' ';
				break;
			case 'empty':
				result = top ? 0 : 1;
				answer += result + ' ';
				break;
			case 'size':
				result = top;
				answer += result + ' ';
				break;
			default:
				break;
		}
	}

	console.log(answer.split(' ').join('\n'));
}

// 제출
solution(n, commands);