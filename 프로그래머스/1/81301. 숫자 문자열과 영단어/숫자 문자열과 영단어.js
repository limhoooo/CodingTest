function solution(s) {
    
    let numberArr = [
        'zero','one','two','three','four','five','six','seven','eight','nine'
    ]
    
    for(let i=0; i<numberArr.length; i++){
            if(s.indexOf(numberArr[i]) !== -1){
               s = s.replaceAll(numberArr[i], i)
            }
            
    }
    
    return Number(s)
}