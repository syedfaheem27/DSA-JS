//BUBBLE SORT

function bubbleSort(arr) {
  let n = arr.length;

  let temp;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

//SELECTION SORT

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++)
      min_idx = arr[min_idx] > arr[j] ? j : min_idx;

    let temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

//INSERTION SORT
function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i - 1;

    let temp_num = arr[i];

    while (arr[j] > temp_num && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp_num;
  }

  return arr;
}
