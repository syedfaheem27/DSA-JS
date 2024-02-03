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
