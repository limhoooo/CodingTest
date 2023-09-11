// 매 단계에서 가장 작은 원소를 선태갷서 앞으로 보내는 정렬 방법
// 단계마다 배열 인덱스 훑으면서 가장 작은 값(인덱스)비교후 맨앞으로 스왑

// 오름차순
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// 라이브러리 이용
let result = data.sort(function (a, b) {
  // 오름차순
  return a - b;
  // 내림차순
  return b - a;
});

const arr = [
  1, 2, 3, 4, 45, 6, 5, 7453, 774, 578, 6786, 7, 5678, 567456, 534, 523, 4532,
  456, 78, 7956, 74, 4563, 54, 3, 534, 24, 25324, 534, 53224, 5, 53, 637, 763,
];

console.log(selectionSort(arr));
