function solution(A,B){
    const arr1 = A.sort((a,b) => a-b);
    const arr2 = B.sort((a,b) => a-b);
    let result = 0;
    for(let i= 1; i<arr1.length+1; i++){
        result += arr1[i-1] * arr2[arr1.length-i]
    }
    return result
}

