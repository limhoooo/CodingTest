function solution(n, m, section) {
    let count = 0;
    let paintArr = []
    for(let i=0; i<n; i++){
        paintArr.push(true)
    }
    for(let i=0; i<section.length; i++){
        paintArr[section[i] -1] = false
    }
    
     for(let i=0; i<paintArr.length; i++){
         if(!paintArr[i]) {
             for(let j=0; j<m; j++){
                 paintArr[i + j] = true;
             }
             count++;
         }
    }
return count    
}