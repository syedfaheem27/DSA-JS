//Find the first one
/*
Problem Description
Given a sorted array consisting of 0s and 1s only,
 find the index of the first 1. If there’s no 1 present in the array, return -1
*/

function zeroOnes(n, arr) {
  let l = 0,
    r = n - 1;
  let mid;

  let zeroIdx = -1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === 0) l = mid + 1;
    if (arr[mid] === 1) {
      zeroIdx = mid;
      r = mid - 1;
    }
  }

  return zeroIdx;
}

// console.log(zeroOnes(7, [0, 0, 0, 0, 0, 0, 1]));
// console.log(zeroOnes(16, [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

////////////////////////////////////////////////////////////

//Find First and Last Position of Element in Sorted Array
/*
Given an array of integers nums sorted in non-decreasing order,
 find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

function firstLastIdx(nums, target) {
  let l = 0,
    r = nums.length - 1;
  let mid;

  let res = [-1, -1];

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else if (nums[mid] > target) r = mid - 1;
    else {
      res[0] = mid;
      r = mid - 1;
    }
  }
  (l = 0), (r = nums.length - 1);

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else if (nums[mid] > target) r = mid - 1;
    else {
      res[1] = mid;
      l = mid + 1;
    }
  }
  return res;
}

// firstLastIdx([3, 4, 5, 6, 6, 7, 8], 6);

////////////////////////////////////////////////////////

// Find the peak element
/*
A peak element is an element that is strictly greater than its neighbors.


Given a 0-indexed integer array nums, find a peak element,
and return its index. If the array contains multiple peaks, 
return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, 
an element is always considered to be strictly greater than a
neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
*/

function findPeak(n, nums) {
  if (n === 1) return 0;

  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let l = 1,
    r = n - 2;

  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (
      mid === 0 ||
      mid === n - 1 ||
      (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1])
    )
      return mid;
    //Increasing part
    else if (nums[mid] < nums[mid + 1]) l = mid + 1;
    else r = mid - 1;
  }
}
console.log(findPeak(8, [1, 1, 1, 1, 1, 1, 1, 2]));
