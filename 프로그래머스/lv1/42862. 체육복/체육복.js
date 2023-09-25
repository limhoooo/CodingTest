// reserve 의 값 앞뒤로만 빌려줄수있음 4 = 3,5
// 맨앞 맨뒤 예외처리 해야함
// lost reserve 에 중복된 숫자있을수있음

function solution(n, lost, reserve) {
  let result = 0;
  result = n - lost.length;
  let lostList = lost.sort((a, b) => a - b);
  let reserveList = reserve.sort((a, b) => a - b);

  for (let i = 0; i < lostList.length; i++) {
    for (let j = 0; j < reserveList.length; j++) {
      if (lostList[i] === reserveList[j]) {
        result++;
        lostList[i] = -1;
        reserveList[j] = -1;
      }
    }
  }
  for (let i = 0; i < reserveList.length; i++) {
    if (reserveList[i] === -1) continue;
    const plus = reserveList[i] + 1;
    const minus = reserveList[i] - 1;
    if (lostList.includes(minus)) {
      result++;
      lostList = lostList.filter(item => item !== minus);
    } else if (lostList.includes(plus)) {
      result++;
      lostList = lostList.filter(item => item !== plus);
    }
  }
  return result;
}

