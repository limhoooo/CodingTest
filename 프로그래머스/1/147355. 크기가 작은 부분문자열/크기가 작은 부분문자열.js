function solution(t, p) {
    const pLength = p.length;
    let arr=[]
    let answer = 0;
    for(let i=0;i<t.length-pLength+1; i++){
        arr.push(t.slice(i,pLength+i))
    }
    
    for(let i=0;i<arr.length;i++){
        if(Number(arr[i]) <= Number(p)){
            answer++
        }
    }
    
    return answer;
}