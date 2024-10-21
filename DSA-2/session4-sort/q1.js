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

//MERGE SORT

//APPROACH 1: here we are using indices but still using additional
// space as compared to the efficient merge sort algorithm

function mergeSort(arr, left, right) {
  if (left >= right) return [arr[left]];

  let mid = Math.floor((left + right) / 2);

  const arr1 = mergeSort(arr, left, mid);
  const arr2 = mergeSort(arr, mid + 1, right);

  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  let n = arr1.length,
    m = arr2.length;

  let i = 0,
    j = 0;

  let res_arr = [];

  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) res_arr.push(arr1[i++]);
    else res_arr.push(arr2[j++]);
  }

  for (; i < n; i++) res_arr.push(arr1[i]);

  for (; j < m; j++) res_arr.push(arr2[j]);
  return res_arr;
}

//APPROACH 2 : Efficient one

function mergeSortII(arr, left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);

  mergeSortII(arr, left, mid);
  mergeSortII(arr, mid + 1, right);

  mergeII(arr, left, mid, right);

  return arr;
}

function mergeII(arr, left, mid, right) {
  let i = left,
    j = mid + 1;

  let res_arr = [];

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) res_arr.push(arr[i++]);
    else res_arr.push(arr[j++]);
  }

  for (; i <= mid; i++) res_arr.push(arr[i]);

  for (; j <= right; j++) res_arr.push(arr[j]);

  for (let k = left; k <= right; k++) arr[k] = res_arr[k - left];
}

/*--------------------------------*/

// Quick Sort
//TC O(nlogn) & SC O(1)

function quickSort(arr, start, end) {
  if (start >= end) return;
  //helper
  const getPivot = (arr, start, end) => {
    let pivot = start;
    let pivotEl = arr[pivot];
    let insertionIdx = start;

    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotEl) {
        if (arr[insertionIdx] === pivotEl) pivot = i;

        [arr[insertionIdx], arr[i]] = [arr[i], arr[insertionIdx]];
        insertionIdx++;
      }
    }

    [arr[insertionIdx], arr[pivot]] = [arr[pivot], arr[insertionIdx]];

    return insertionIdx;
  };

  let pivotIdx = getPivot(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
}
