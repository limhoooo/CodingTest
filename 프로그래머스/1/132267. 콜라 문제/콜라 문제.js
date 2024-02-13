function solution(a, b, n) {
    
    let 콜라 = n;
    let result = 0;
    while(Math.floor(콜라 / a) > 0){
        result = result + (Math.floor(콜라 / a) * b)
        콜라 = (Math.floor(콜라 / a) * b) + 콜라 % a;
        console.log(콜라)
        
    }
    
    return result;
}
    
    // 20 / 3 = 12 2
    // 14 / 3 = 4 2
    // 6 / 3 = 4 1
    // 5/ 3 = 2 2
    // 4 / 3 = 2 1
    // 3 / 3 = 2