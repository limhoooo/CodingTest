function solution(number, k) {
    const stack = []; // 큰 숫자를 저장할 스택
    for (let digit of number) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
            // 스택의 마지막 숫자가 현재 숫자보다 작고, 아직 제거해야 할 숫자가 남아있을 때
            stack.pop(); // 스택에서 마지막 숫자를 제거
            k--; // 제거한 숫자 개수 감소
        }
        stack.push(digit); // 현재 숫자 스택에 추가
    }
    
    // 남은 k개의 숫자 제거
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    return stack.join(''); // 스택에 남은 숫자들을 문자열로 결합하여 반환
}