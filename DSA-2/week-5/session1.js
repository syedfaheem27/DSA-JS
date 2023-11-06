//Binary Search and related questions
/*
Find the Index of a number in a sorted array
*/

function binarySearch(arr, k) {
  let l = 0,
    r = arr.length - 1;
  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (k < arr[mid]) {
      r = mid - 1;
    } else if (k > arr[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

// console.log(binarySearch([2, 6, 8, 12, 14, 19], 8));

///////////////////////////////////////////////////////////
//Search in sorted rotated array
//Return the index of the number in the rotated sorted array
//If yes - return index else return -1

//Input - [4 ,5 ,6 ,9, 10,2, 3], 3
//Output - 6

//Input - [4 ,5 ,6 ,9, 10,2, 3], 8
//Output - -1

// Method -1 TC - O(logn) and SC - O(1)

function searchSortedArr(arr, target) {
  let pivotIdx = getPivotIdx(arr);
  let l, r;
  if (pivotIdx !== -1) {
    if (target >= arr[0]) {
      l = 0;
      r = pivotIdx;
    } else {
      l = pivotIdx + 1;
      r = arr.length - 1;
    }
  } else {
    (l = 0), (r = arr.length - 1);
  }

  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] > target) {
      r = mid - 1;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function getPivotIdx(arr) {
  let l = 0,
    r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr?.[mid + 1] < arr[mid]) return mid;
    if (arr?.[mid - 1] > arr[mid]) return mid - 1;

    if (arr[mid] > arr[l]) {
      //we need to move right to find the pivot
      //Before that we need to check
      l = mid + 1;
    } else {
      //we need to move left to find the pivot
      //Before that we need to check
      r = mid - 1;
    }
  }

  return -1;
}

// console.log(searchSortedArr([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(searchSortedArr([1, 2], 2));
// console.log(searchSortedArr([3, 4, 5, 6, 7, 1], 1));
console.log(searchSortedArr([1], 1));
