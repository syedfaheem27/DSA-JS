/*
Problem Description
Given an array containing N integers and an integer K, 
Your task is to find the length of the longest subarray 
with the sum of the elements equal to the given value K.
*/

function longestSubArr(N, K, nums) {
  let map = new Map();
  let prefSum = 0;
  let maxLen = 0;
  let temp;
  for (let i = 0; i < N; i++) {
    prefSum += nums[i];
    if (prefSum === K) maxLen = i + 1; //it will always be the largest one
    if (!map.has(prefSum)) {
      map.set(prefSum, i);
    }
    temp = prefSum - K;
    if (map.has(temp)) maxLen = Math.max(maxLen, i - map.get(temp));
  }

  console.log(maxLen);
}

longestSubArr(7, 10, [1, 2, 3, -2, 2, 10, 5]);
//Test cases to follow 7, 10, [1, 2, 3, -2, 2, 10, 5]
//13 12 [-14,10,-15,17,4,18,3,-18,-7,-4,-8,8,-8]
//10 3 [2, -2, 3, -3 ,3 ,3 ,4 ,-4 ,5, -5]

// Same question as above but find the subArray
