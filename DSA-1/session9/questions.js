//PROBLEM 1

//Find Triplet with maximum sum in an unsorted array

/*
Problem Description

Given an array nums, you need to find the maximum sum of triplet 
(nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. 
If no such triplet exists print 0.
*/

//BRUTE FORCE APPROACH
//TC O(N3) & SC O(1)

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function maxSum(arr) {
  let maxSum = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    //
    for (let j = i + 1; j < n; j++) {
      //
      if (arr[j] > arr[i]) {
        //
        for (let k = j + 1; k < n; k++) {
          //
          if (arr[k] > arr[j])
            maxSum = Math.max(maxSum, arr[i] + arr[j] + arr[k]);
          //
        }
        //
      }
      //
    }
  }

  return maxSum;
}

//BETTER APPROACH

//Keep a mid index and find valid numbers from the left of mid and right of mid

//TC O(N2) & SC O(1)

function maxSumI(arr) {
  let mid = 1;
  let left_el, right_el;

  let maxSum = Number.MIN_SAFE_INTEGER;

  let n = arr.length;

  for (; mid < n - 1; mid++) {
    left_el = -1;
    right_el = -1;
    //
    for (let i = 0; i < mid; i++)
      left_el = arr[i] < arr[mid] ? Math.max(left_el, arr[i]) : left_el;

    //

    for (let i = mid + 1; i < n; i++)
      right_el = arr[i] > arr[mid] ? Math.max(right_el, arr[i]) : right_el;

    //

    if (left_el !== -1 && right_el !== -1)
      maxSum = Math.max(maxSum, left_el + right_el + arr[mid]);
  }

  return maxSum === Number.MIN_SAFE_INTEGER ? 0 : maxSum;
}
