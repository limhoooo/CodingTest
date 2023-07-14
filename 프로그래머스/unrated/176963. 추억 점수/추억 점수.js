function solution(name, yearning, photo) {
    const obj = {}
    name.forEach((key, index) => {
      obj[key] = yearning[index];
    });
    
  const answer = photo.map((row) => {
    let count = 0;
    row.forEach((item) => {
      if (obj[item] !== undefined) {
        count += obj[item];
      }
    });
    return count;
  });
    
    // for(let i=0; i < photo.length; i++){
    //     let count = 0;
    //     for(let j=0; j < photo[i].length; j++){
    //         if(obj[photo[i][j]] !== undefined) {
    //             count = count + obj[photo[i][j]];
    //         }
    //     }
    //     answer.push(count)
    // }

    return answer;
}