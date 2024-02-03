function solution(s) {
    const result = [];
    const lastIndexMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastIndexMap.has(char)) {
            result.push(i - lastIndexMap.get(char));
        } else {
            result.push(-1);
        }
        lastIndexMap.set(char, i);
    }
    
    return result;
}

// 예시 테스트
console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
