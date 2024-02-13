function solution(s) {
    
    let numberArr = [
        'zero','one','two','three','four','five','six','seven','eight','nine'
    ]
    
    for(let i=0; i<numberArr.length; i++){
        for(let j=0; j<5; j++){            
        if(s.indexOf(numberArr[i]) !== -1){
           s = s.replace(numberArr[i], i)
        }
        }
            
    }
    
    return Number(s)
}