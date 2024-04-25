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
