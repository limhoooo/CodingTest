// 선택정렬
// 매 단계에서 가장 작은 원소를 선태갷서 앞으로 보내는 정렬 방법
// 단계마다 배열 인덱스 훑으면서 가장 작은 값(인덱스)비교후 맨앞으로 스왑

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
}
