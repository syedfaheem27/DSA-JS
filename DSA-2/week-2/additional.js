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

// longestSubArr1([1, 56, 58, 57, 90, 92, 94, 93, 91, 45]);

//--------------------------------------

/*
Find duplicates in an array
Given an array a of size N which contains elements from 0 to N-1,
 you need to find all the elements occurring more than once in the 
 given array. Return the answer in ascending order. If no such element 
 is found, return list containing [-1]. 

Note: The extra space is only for the array to be returned. 
Try and perform all operations within the provided array. 
*/
function removeDuplicates(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) arr[arr[i] % n] += n;

  let resArr = [];
  for (let i = 0; i < n; i++) if (Math.floor(arr[i] / n) > 1) resArr.push(i);

  console.log(resArr);
}

// removeDuplicates([3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5]);

//-------------------------------------
function largestSubArrZeroOne(nums) {
  let n = nums.length;
  let map = new Map();

  for (let i = 0; i < n; i++) if (nums[i] === 0) nums[i] = -1;

  let prefSum = 0,
    maxLen = 0;
  for (let i = 0; i < n; i++) {
    prefSum += nums[i];
    if (prefSum === 0) maxLen = Math.max(maxLen, i + 1);

    if (map.has(prefSum)) maxLen = Math.max(maxLen, i - map.get(prefSum));
    else map.set(prefSum, i);
  }
  return maxLen;
}

// largestSubArrZeroOne([0, 0, 1, 1, 0]);
// largestSubArrZeroOne([1, 0, 1, 1, 1, 0, 0]);
// largestSubArrZeroOne([0, 1, 0, 1]);
