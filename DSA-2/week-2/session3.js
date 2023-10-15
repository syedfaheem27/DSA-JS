/*
Problem Description
Given an integer array, find the largest subarray with sum 0.
 If there is more than one subarray with the largest length, 
 return the subarray with the lowest starting index.

If there is no such sub-array print -1.
*/

function largestZeroSubArr(n, arr) {
  let prefMap = new Map();
  let prefSum = 0;
  let start = -1,
    end = -1;
  let currLen,
    maxLen = 0;
  for (let i = 0; i < n; i++) {
    prefSum += arr[i];
    if (prefSum === 0) {
      currLen = i + 1;
      maxLen = Math.max(maxLen, currLen);
      start = 0;
      end = i;
      continue;
    }

    if (prefMap.has(prefSum)) {
      currLen = i - prefMap.get(prefSum);
      if (currLen > maxLen) {
        maxLen = currLen;
        start = i - maxLen + 1;
        end = i;

        //if we had sub arrays with equal length of sum 0 and wanted index of the latest one, then currLen>=maxLen =>condition
      }
    } else prefMap.set(prefSum, i);
  }

  if (start === -1 || end === -1) return [-1];
  let resArr = [];
  for (let i = start; i <= end; i++) resArr.push(arr[i]);

  console.log(resArr);
}
// largestZeroSubArr(8, [2, 3, 1, -4, 1, 6, 2, -8]);

//-----------------------------------------------------

/*
Problem Description
Given a string, find the length of the longest substring that 
contains at most K distinct characters.

Note:
Uppercase and Lowercase characters should be considered as
 different characters.

There can be numbers and special characters as well.
*/

function kDistinctChars(s, k) {
  let map = new Map();
  let left = 0,
    right = 0;
  let maxLen = 0;
  while (right < s.length) {
    map.set(s[right], map.get(s[right]) + 1 || 1);

    //window contract
    while (map.size > k) {
      if (map.get(s[left]) > 1) {
        map.set(s[left], map.get(s[left]) - 1);
      } else {
        map.delete(s[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    //expand window
    right++;
  }

  console.log(maxLen);
}
// kDistinctChars("abacdddefg", 3);

//-----------------------------

/*
Problem Description
Given an array of integers and a number k, find the maximum sum of a subarray of size k.
*/

function maxSumSubArray(N, A, K) {
  let currSum = 0;
  for (let i = 0; i < K; i++) currSum += A[i];

  let maxSum = currSum;

  let r = K,
    l = 0;
  while (r < N) {
    currSum += A[r] - A[l];
    maxSum = Math.max(currSum, maxSum);
    r++;
    l++;
  }

  console.log(maxSum);
}
// maxSumSubArray(5, [100, 200, 300, 400, 500], 2);

//--------------------------------------

/*
 Maximum Sum of Distinct Subarrays With Length K

You are given an integer array nums and an integer k.
 Find the maximum subarray sum of all the subarrays of nums 
 that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
*/

function maxSumSubAr2(nums, k) {
  let n = nums.length;
  let map = new Map();

  let currSum = 0,
    maxSum = 0;

  for (let i = 0; i < k; i++) {
    currSum += nums[i];
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  if (map.size === k) maxSum = Math.max(maxSum, currSum);

  let r = k,
    l = 0;
  while (r < n) {
    currSum += nums[r] - nums[l];

    if (map.get(nums[l]) > 1) map.set(nums[l], map.get(nums[l]) - 1);
    else map.delete(nums[l]);

    map.set(nums[r], map.get(nums[r]) + 1 || 1);

    if (map.size === k) maxSum = Math.max(maxSum, currSum);

    l++;
    r++;
  }
  console.log(maxSum);
}
// maxSumSubAr2(7, [1, 5, 4, 2, 9, 9, 9], 3);
// maxSumSubAr2(3, [4, 4, 4], 3);
// maxSumSubAr2(3, [1, 2, 2], 2);
// maxSumSubAr2([9, 9, 9, 1, 2, 3], 3);

//-----------------------------------------------------

/*
Problem Description
Given a string, find the length of the longest substring 
which has no repeating characters.
*/

function longestSubStr(s) {
  let set = new Set();
  let l = 0,
    r = 0;
  let maxLen = 0;
  while (r < s.length) {
    if (set.has(s[r])) {
      //shrink the window
      set.delete(s[l++]);
    } else {
      //expand window
      set.add(s[r++]);
      maxLen = Math.max(maxLen, set.size);
    }
  }

  console.log(maxLen);
}

longestSubStr(
  "jyvzhkkodacgpkiegodoasxdsaakbahjdczjatkvpgbheawvdjxiegsoalddbtoxuaataniraqslgbjvgz"
);
