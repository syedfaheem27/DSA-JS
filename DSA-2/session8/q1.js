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

/*------------------------------------*/

//PROBLEM 2

//FIND THE FIRST ONE

/*
PROBLEM DESCRIPTION

Given a sorted array consisting of 0s and 1s only, find the 
index of the first 1. If there’s no 1 present in the array, return -1
*/

function findFirstOne(arr) {
  let n = arr.length;

  let l = 0,
    r = n - 1;

  let res = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] === 0) l = mid + 1;
    else {
      r = mid - 1;
      res = mid;
    }
  }

  return res;
}

/*-------------------------*/

//PROBLEM 3

//FIND THE PEAK ELEMENT

/*
PROBLEM DESCRIPTION

A peak element is an element that is strictly greater than its neighbors. 
Given an integer array nums that is strictly increasing or decreasing or both, 
find a peak element, and return its index. If the array contains multiple peaks, 
return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. 
You must write an algorithm that runs in O(log n) time.
*/

function findPeakEl(arr) {
  let n = arr.length;

  if (n === 1 || arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let l = 0,
    r = n - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (
      mid === 0 ||
      mid === n - 1 ||
      (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1])
    )
      return mid;
    else if (arr[mid] < arr[mid + 1]) l = mid + 1;
    else r = mid - 1;
  }
}

/*--------------------------*/

//PROBLEM 3

//FIND THE OCCURRENCES OF AN INTEGER

/*
PROBLEM DESCRIPTION

Given a sorted integer array of length n with possible duplicate elements. 
Find the number of occurrences of an integer k using binary search.
*/

function countOccurences(arr, k) {
  let n = arr.length;

  let l = 0,
    r = n - 1;

  let left_idx, right_idx;

  //Find the left index

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] < k) l = mid + 1;
    else if (arr[mid] > k) r = mid - 1;
    else {
      left_idx = mid;
      r = mid - 1;
    }
  }

  (l = 0), (r = n - 1);

  //Find the right index
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] < k) l = mid + 1;
    else if (arr[mid] > k) r = mid - 1;
    else {
      right_idx = mid;
      l = mid + 1;
    }
  }
  return left_idx && right_idx ? right_idx - left_idx + 1 : 0;
}
