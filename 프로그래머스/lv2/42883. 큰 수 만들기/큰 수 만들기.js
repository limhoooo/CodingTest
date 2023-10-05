function solution(number, k) {
  const stack = []; // 큰 숫자를 저장할 스택
  for (let num of number) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  return stack.join(''); // 스택에 남은 숫자들을 문자열로 결합하여 반환
}
