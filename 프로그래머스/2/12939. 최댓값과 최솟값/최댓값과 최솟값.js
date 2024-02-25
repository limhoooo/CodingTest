function solution(s) {
    const arr = s.split(' ').map(Number)
    
    var answer = `${Math.min(...arr)} ${Math.max(...arr)}`;
    return answer;
}