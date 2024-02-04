//PROBLEM 1 : FIND THE LARGEST SUB ARRAY WITH SUM 0

/*
PROBLEM DESCRIPTION

Given an integer array, find the largest subarray with sum 0. 
If there is more than one subarray with the largest length, 
return the subarray with the lowest starting index.

If there is no such sub-array print -1.
*/

// [4,3,2,-2,10,1,3,1,-4]

//BRUTE FORCE
//TC O(n2) & SC O(n)

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function largestSubArrZeroSumI(arr) {
  let n = arr.length;

  let start,
    max_len = -1;

  for (let i = 0; i < n; i++) {
    let temp_sum = arr[i];

    if (temp_sum === 0 && max_len < 1) {
      max_len = 1;
      start = i;
    }

    for (let j = i + 1; j < n; j++) {
      temp_sum += arr[j];
      let curr_len = j - i + 1;

      if (temp_sum === 0 && max_len < curr_len) {
        max_len = curr_len;
        start = i;
      }
    }
  }

  return max_len === -1 ? max_len : arr.slice(start, start + max_len);
}

//Optimised Approach - using a hash map
//TC O(N) & SC O(N)

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function largestSubArrZeroSumII(arr) {
  let n = arr.length;

  let pref_map = new Map();
  let pref_sum = 0;

  let start,
    max_len = -1;

  for (let i = 0; i < n; i++) {
    pref_sum += arr[i];

    if (pref_sum === 0) {
      start = 0;
      max_len = i + 1;

      continue;
    }

    if (pref_map.has(pref_sum)) {
      let curr_len = i - pref_map.get(pref_sum);

      if (max_len < curr_len) {
        max_len = curr_len;
        start = pref_map.get(pref_sum) + 1;
      }
    } else pref_map.set(pref_sum, i);
  }

  return max_len === -1 ? max_len : arr.slice(start, start + max_len);
}

/*----------------------------------------*/

//PROBLEM 2 : FIND THE LONGEST SUBSTRING WITH AT MOST K DISTINCT CHARACTERS

/*
Problem Description

Given a string, find the length of the longest substring and 
the corresponding substring that contains at most K distinct characters.

Note:

Uppercase and Lowercase characters should be considered as different characters.

There can be numbers and special characters as well.
*/

//BRUTE FORCE
//TC O(N2) & SC O(1) as there are a maximum of 256 characters

/**
 * @typedef {Object} result
 * @property {string} subStr
 * @property {number} len
 */

/**
 *
 * @param {string} str
 * @param {number} k
 * @returns {result}
 */
function longestSubStrKDistinctI(str, k) {
  let n = str.length;
  let res_str = "";

  for (let i = 0; i < n; i++) {
    let map = new Map();
    let temp_str = "";

    for (let j = i; j < n; j++) {
      map.set(str[j], map.get(str[j]) + 1 || 1);
      if (map.size <= k) temp_str += str[j];
      else break;
    }
    res_str = res_str.length > temp_str.length ? res_str : temp_str;
  }

  return {
    subStr: res_str,
    len: res_str.length,
  };
}

//Optimal Approach : TC O(N) & SC O(1) using hash map and sliding window pattern
// dynamic window size

/**
 * @typedef {Object} result
 * @property {string} subStr
 * @property {number} len
 */

/**
 *
 * @param {string} str
 * @param {number} k
 * @returns {result}
 */

function longestSubStrKDistinctII(str, k) {
  let n = str.length;
  let left_idx;
  let max_len = -1;

  let map = new Map();

  let front = 0,
    back = 0;
  while (front < n) {
    map.set(str[front], map.get(str[front]) + 1 || 1);

    while (map.size > k) {
      let val = map.get(str[back]);

      if (val === 1) map.delete(str[back]);
      else map.set(str[back], map.get(str[back]) - 1);

      back++;
    }
    let len = front - back + 1;

    if (max_len < len) {
      max_len = len;
      left_idx = back;
    }

    front++;
  }

  return {
    subStr: str.slice(left_idx, left_idx + max_len),
    len: max_len,
  };
}

/*--------------------------------------*/

//PROBLEM 3

//FIND THE MAXIMUM SUM AND THAT SUBARRAY POSSIBLE OUT OF ALL THE SUBARRAYS OF SIZE K

/*
Problem Description

Given an array of integers and a number k, find the maximum sum of a subarray of size k and the subarray.
*/

//BRUTE FORCE
//TC O(N*K) & SC O(K)
/**
 * @typedef {Object} result
 * @property {number[]} resArr
 * @property {number} maxSum
 */
/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {result}
 */

function maxSumKI(arr, k) {
  let n = arr.length;
  let start;
  let max_sum = -1;

  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < i + k; j++) sum += arr[j];

    if (max_sum < sum) {
      max_sum = sum;
      start = i;
    }
  }

  return {
    resArr: arr.slice(start, start + k),
    maxSum: max_sum,
  };
}

//Optimal Approach - Sliding window
//TC O(N) & SC O(K)

function maxSumKII(arr, k) {
  let n = arr.length;

  let sum = 0,
    max_sum;

  for (let i = 0; i < k; i++) sum += arr[i];

  max_sum = sum;

  let start = 0,
    front = k,
    back = 0;

  while (front < n) {
    sum += arr[front++] - arr[back++];

    if (max_sum < sum) {
      start = back;
      max_sum = sum;
    }
  }

  return {
    resArr: arr.slice(start, start + k),
    maxSum: max_sum,
  };
}
