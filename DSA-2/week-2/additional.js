/*
Length of the largest subarray with contiguous elements | Set 1

Given an array of distinct integers, find length of the longest 
subarray which contains numbers that can be arranged in a continuous sequence. 

Input:  arr[] = {1, 56, 58, 57, 90, 92, 94, 93, 91, 45};
Output: Length of the longest contiguous subarray is 5

*/

function longestSubArr1(arr) {
  let maxLen = 1,
    min,
    max;

  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    max = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      max = Math.max(arr[j], max);

      if (max - min === j - i) maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  console.log(maxLen);
}

longestSubArr1([1, 56, 58, 57, 90, 92, 94, 93, 91, 45]);
