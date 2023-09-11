// 인접한 두 원소를 비교해서 서로의 위치를 변경함
// 한바퀴 돌때마다 제일 뒤부터 정렬완료가 됨

let a = [4, 2, 75, 1, 47];
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(a));
