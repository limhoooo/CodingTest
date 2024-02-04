function solution(k, m, score) {
    let answer = 0;
    
    score.sort()
    
    console.log(score)
    let box = Math.floor(score.length / m)
    console.log(box)

    let arr = []
    for(let i= 0 ; i < box; i++){
        if(score.length === m){
            arr.push(score)
        }else {
            arr.push(score.splice(-m,score.length -1))
        }
            
    }
    
    for(let i=0; i< arr.length; i++) {
       const min =  Math.min.apply(null, arr[i]);
        answer = answer + min * m
    }
    console.log(arr)
    return answer;
}

