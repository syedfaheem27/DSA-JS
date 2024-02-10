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

//QUICK SORT

//APPROACH 1 : Choosing the last element as the pivot
//It has it's downsides - can make TC O(n2)

function quickSortI(arr) {
  let n = arr.length;

  quick(arr, 0, n - 1);

  return arr;
}

function quickI(arr, l, r) {
  if (l >= r) return;

  const pivotIdx = findPivotAndReArrange(arr, l, r);

  quickI(arr, l, pivotIdx - 1);
  quickI(arr, pivotIdx + 1, r);

  return;
}

function findPivotAndReArrange(arr, l, r) {
  let pivot_el = arr[r];
  let leftIdx = l;

  let temp;
  for (let i = l; i < r; i++) {
    if (arr[i] <= pivot_el) {
      temp = arr[leftIdx];
      arr[leftIdx] = arr[i];
      arr[i] = temp;
      leftIdx++;
    }
  }

  //final swap
  temp = arr[leftIdx];
  arr[leftIdx] = pivot_el;
  arr[r] = temp;

  return leftIdx;
}

//APPROACH 2 : Choosing a random Pivot;
// Choosing a random pivot can be seen in two ways
//Inside the function where we choose a pivot and rearrange the array
//according to that pivot, we make sure that we always choose  a random pivot
// and then rearrange according to that. Then return the pivot index
//This method needs some bits of addition to ensure that we're always giving out the pivot Index

//Other method is to choose a random index and swap the last element with the element at
// that index and the rest will remain same

function quickSortII(arr) {
  let n = arr.length;

  quickII(arr, 0, n - 1);

  return arr;
}
function quickII(arr, l, r) {
  if (l >= r) return;

  const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;

  //swapping the last element which we will choose as our pivot
  let temp = arr[randomIndex];
  arr[randomIndex] = arr[r];
  arr[r] = temp;
  const pivotIdx = findPivotAndReArrange(arr, l, r);
  quickII(arr, l, pivotIdx - 1);
  quickII(arr, pivotIdx + 1, r);

  return;
}

quickSortII([1, 2, -9, 0, 100, -10, -99]);
