function solution(sequence, k) {
    var answer = [];
    
    
    let end = 0;
    let sum = 0;

    for(let start=0; start<sequence.length; start++){
        while(k > sum && end < sequence.length){
            sum = sum + sequence[end]
            end++;
        }
        if(sum === k) answer.push([start,end-1]);
        sum -= sequence[start]
    }
    
    if(answer.length > 0) {
        let calc = answer[0][1] - answer[0][0];
        let result = [answer[0][0], answer[0][1]];
        for(let i=0; i<answer.length; i++){
           if(calc > answer[i][1] - answer[i][0]){
               calc = answer[i][1] - answer[i][0];
               result = [answer[i][0], answer[i][1]];
           } 
        }
        return result;
    }
        
    
    return answer;
}