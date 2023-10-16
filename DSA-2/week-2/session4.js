//Sorting Algorithms
// 1.  Bubble sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  console.log(arr);
}

// bubbleSort([2, 9, -1, 0, 3, 1, 6, -9]);

//2.  Selection sort
function selectionSort(arr) {
  let n = arr.length;
  let minIdx, temp;

  for (let i = 0; i < n - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < n; j++) {
      minIdx = arr[minIdx] > arr[j] ? j : minIdx;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  console.log(arr);
}

// selectionSort([2, 9, -1, 0, 3, 1, 6, -9]);
// selectionSort([4, 1, 3, 9, 7]);

//3.  Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  let x;
  let j;

  for (let i = 1; i < n; i++) {
    j = i - 1;
    x = arr[i];

    while (x < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = x;
  }

  console.log(arr);
}
// insertionSort([2, 9, -1, 0, 3, 1, 6, -9]);

//4.  Sort in wave form
/*
Problem Description
Given an unsorted array, sort it in wave form. 
That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
*/

//Method-1 TC-O(nlogn) and SC-O(n)
function waveSort(n, arr) {
  let resArr = [];
  let mid = Math.floor(n / 2);
  let l = 0,
    r = mid;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      resArr.push(arr[l++]);
    } else {
      resArr.push(arr[r++]);
    }
  }
  console.log(resArr);
}

// waveSort(6, [1, 5, 1, 1, 6, 4]);

//Method-2 TC-O(n) and SC-O(1)  Here we don't need to sort the array
function waveSort2(n, arr) {
  let temp;
  for (let i = 1; i < n - 1; i += 2) {
    if (arr[i - 1] > arr[i]) {
      temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }

    if (i < n - 1 && arr[i + 1] > arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  console.log(arr);
}
// waveSort2(6, [1, 5, 1, 1, 6, 4]);
