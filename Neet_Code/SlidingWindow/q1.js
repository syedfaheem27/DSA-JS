//HARD: SubArrays with k different integers

/*
Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.
*/

function subArrayWithKDiff(nums, k) {
  return distinctIntegers(nums, k) - distinctIntegers(nums, k - 1);
}
function distinctIntegers(nums, k) {
  let l = 0,
    r = 0;
  let count = 0;

  let map = new Map();

  while (l <= r && r < nums.length) {
    map.set(nums[r], map.get(nums[r]) + 1 || 1);

    while (map.size > k) {
      let val = map.get(nums[l]);

      if (val > 1) map.set(nums[l], val - 1);
      else map.delete(nums[l]);

      l++;
    }

    count += r - l + 1;
    r++;
  }

  return count;
}

/*-------------------------------------*/

//HARD: Minimum Window Substring

/*
Given two strings s and t, return the shortest substring of s such that 
every character in t, including duplicates, is present in the substring. 
If such a substring does not exist, return an empty string "".

You may assume that the correct output is always unique.
*/

// TC O(N) && SC O(1)
function minWindow(s, t) {
  let map = new Map();

  for (let i = 0; i < t.length; i++) map.set(t[i], map.get(t[i]) + 1 || 1);

  let start = 0;
  let end = 0;
  let n = s.length;

  let frequency = 0;
  let len = Number.MAX_SAFE_INTEGER;

  let res_start = -1;

  let freq_map = new Map();

  while (end < n && start <= end) {
    freq_map.set(s[end], freq_map.get(s[end]) + 1 || 1);

    if (map.has(s[end]) && map.get(s[end]) === freq_map.get(s[end]))
      frequency++;

    while (start <= end && frequency === map.size) {
      if (len >= end - start + 1) {
        res_start = start;
        len = end - start + 1;
      }

      freq_map.set(s[start], freq_map.get(s[start]) - 1);

      if (map.has(s[start]) && freq_map.get(s[start]) !== map.get(s[start]))
        frequency--;

      start++;
    }

    end++;
  }
  return res_start !== -1 ? s.slice(res_start, res_start + len) : "";
}
