function solution(cards1, cards2, goal) {
    let result = ''
    for(let i=0;i<goal.length;i++){
        if(goal[i] === cards1[0]){
            cards1.shift()
        }else if(goal[i] === cards2[0]){
            cards2.shift()
        }
        else {
            return result = 'No'
        }
    }
    
    return result = result ? 'no' : 'Yes'
    
}