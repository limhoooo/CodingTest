function solution(keymap, targets) {
    let answer = [];
    let sum = 0;

    // 1)
    // ABCD
    targets.forEach(e => {
        // 2)
        // A B C D
        for(let i=0; i<e.length; i++) {

            // 3)
            let min = Infinity;

            // 4)
            // ABACD
            keymap.forEach((ele) => {
                // 5)
                let index = ele.indexOf(e[i])

                // 6)
                if(index > -1){
                    min = Math.min(min, index+1)
                }
            })
            // 7)
            sum += min;
        }
        answer.push(sum)
        // 8)
        sum = 0;
    })

    // 9)
    answer = answer.map(e=>{
        if(e == Infinity) {
            e = -1
        }
        return e
    })
    return answer;
}