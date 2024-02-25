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
// console.log(findPeak(8, [1, 1, 1, 1, 1, 1, 1, 2]));

/////////////////////////////////////////////////////////
/*
Problem Description
Given a sorted integer array of length n with possible 
duplicate elements. Find the number of occurrences of an 
integer k using binary search.

Input - [-1,2,2,2,2,3,4,5,6]
output - 4
*/

function countOccurences(n, nums, k) {
  return rightOccurence(n, nums, k) === -1 && leftOccurence === -1
    ? -1
    : rightOccurence(n, nums, k) - leftOccurence(n, nums, k) + 1;
}

function leftOccurence(n, nums, k) {
  let l = 0,
    r = n - 1,
    mid;
  let leftIdx = -1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > k) r = mid - 1;
    else if (nums[mid] < k) l = mid + 1;
    else {
      leftIdx = mid;
      r = mid - 1;
    }
  }

  return leftIdx;
}
function rightOccurence(n, nums, k) {
  let l = 0,
    r = n - 1,
    mid;
  let rightIdx = -1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > k) r = mid - 1;
    else if (nums[mid] < k) l = mid + 1;
    else {
      rightIdx = mid;
      l = mid + 1;
    }
  }

  return rightIdx;
}

// console.log(countOccurences(10, [-1, 2, 3, 4, 4, 4, 4, 4, 8, 9], 4));

//////////////////////////////////////////////////////////
/*
Problem Description
Ujjwal loves to read story books. 
There are n piles of books can be sorted or not, the ith pile has a[i] books.
His mom has gone to market and will come back in h hours.

Ujjwal can decide his books-per-hour reading speed of k. 
Each hour, he chooses some pile of books and reads k books from 
that pile. If the pile has less than k books, he reads all of them
instead and will not read any more books during this hour.

Ujjwal likes to read slowly but still wants to finish reading
all the books before his mom returns.

Return the minimum integer k such that he can read all the
books within h hours.
*/
/**
 *
 * @param {number} n - length of array
 * @param {number} k - market time of mom
 * @param {number[]} a -  array of book piles
 */

function bookReading(n, k, a) {
  let l = 1,
    r = 0,
    mid;

  for (let i = 0; i < n; i++) r = Math.max(r, a[i]);

  let output = r;
  let hoursTaken;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    hoursTaken = getReadingHours(n, mid, a);

    if (hoursTaken <= k) {
      output = Math.min(output, mid);
      r = mid - 1;
    } else l = mid + 1;
  }

  return output;
}
/**
 *
 * @param {number} n - length of array
 * @param {number} currSpeed - current reading speed
 * @param {number} a - array of book piles
 */

function getReadingHours(n, currSpeed, a) {
  let totalReadingHours = 0;
  for (let i = 0; i < n; i++) totalReadingHours += Math.ceil(a[i] / currSpeed);
  return totalReadingHours;
}

// console.log(bookReading(4, 8, [3, 6, 7, 11]));
