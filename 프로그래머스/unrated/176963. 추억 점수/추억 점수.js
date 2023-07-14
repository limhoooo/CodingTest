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

    return answer;
}