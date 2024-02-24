//PROBLEM 1

//SEARCH IN SORTED ARRAY

/*
PROBLEM DESCRIPTION

An array sorted in ascending order is rotated about a pivot unknown to you. 
Such an array is referred to as a rotated sorted array or a sorted-pivoted array. 
For example : [1,2,3,4,5] is a sorted array while [3,4,5,1,2] is a rotated sorted array.


You are given a rotated sorted array, and some integer values. 
You have to find each value’s location in the array. If the value is present, 
return the index in which it is stored ( 0 based indexing) , otherwise if not found return -1.
*/

function searchSortedArr(arr, k) {
  let n = arr.length;

  let pivot_idx = findPivotIndex(arr);

  if (pivot_idx === -1) return binarySearch({ arr, num: k, l: 0, r: n - 1 });

  if (k > arr[0]) return binarySearch({ arr, num: k, l: 0, r: pivot_idx - 1 });

  if (k < arr[0])
    return binarySearch({ arr, num: k, l: pivot_idx + 1, r: n - 1 });

  if (k === arr[0]) return 0;
}

function findPivotIndex(arr) {
  let n = arr.length,
    l = 0,
    r = n - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] < arr?.[mid - 1]) return mid - 1;
    if (arr[mid] > arr?.[mid + 1]) return mid;

    if (arr[l] < arr[mid]) l = mid + 1;
    if (arr[l] >= arr[mid]) r = mid - 1;
  }

  return -1;
}

function binarySearch(input) {
  let { arr, num, l, r } = input;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (num < arr[mid]) r = mid - 1;
    else if (num > arr[mid]) l = mid + 1;
    else return mid;
  }

  return -1;
}

console.log(searchSortedArr([4, 5, 6, 7, 0, 1, 2], 0));
