function solution(s, skip, index) {
    var answer = '';
    const text = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for(let i=0; i<skip.length; i++){
        text.splice(text.indexOf(skip[i]), 1)
    }
    for(let i=0; i<s.length; i++){
       const arrIndex =  text.indexOf(s[i])
       if(arrIndex + index >= text.length) {
           console.log(arrIndex + index )
           console.log(text.length)
            answer = answer + text[(arrIndex + index) % text.length]
       }else {
            answer = answer + text[arrIndex + index]
       }
    }
    console.log(text)
    return answer;
}