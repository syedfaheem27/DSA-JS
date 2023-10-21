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

// longestSubArr(7, 10, [1, 2, 3, -2, 2, 10, 5]);
//Test cases to follow
//7, 10, [1, 2, 3, -2, 2, 10, 5]
//13 12 [-14,10,-15,17,4,18,3,-18,-7,-4,-8,8,-8]
//10 3 [2, -2, 3, -3 ,3 ,3 ,4 ,-4 ,5, -5]

// Same question as above but find the subArray
function findLongestSubArr(N, K, nums) {
  let endIdx;
  let prefSum = 0;
  let maxLen = 0;
  let temp;
  let map = new Map();
  for (let i = 0; i < N; i++) {
    prefSum += nums[i];

    if (prefSum === K) {
      maxLen = i + 1;
      endIdx = i;
    }

    if (!map.has(prefSum)) map.set(prefSum, i);

    temp = prefSum - K;
    if (map.has(temp)) {
      endIdx = i - map.get(temp) > maxLen ? i : endIdx;
      maxLen = Math.max(maxLen, i - map.get(temp));
    }
  }

  let startIdx = endIdx - maxLen + 1;
  let subArr = nums.slice(startIdx, endIdx + 1);
  console.log(maxLen);
  console.log(subArr);
}

// findLongestSubArr(7, 10, [1, 2, 3, -2, 2, 10, 5]);
// findLongestSubArr(13, 12, [-14, 10, -15, 17, 4, 18, 3, -18, -7, -4, -8, 8, -8]);

//-----------------------------------------

/*
Problem Description
Given an array *nums*, find all unique triplets (group of 3 numbers) such that their sum is 0. 
There should be no duplicates i.e. no triplet should be repeated.
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let temp;
  let l, r;
  let n = nums.length;
  let resArr = [];
  for (let i = 0; i < n; i++) {
    //Skipping duplicates while choosing the first element of the triplet
    if (nums?.[i - 1] === nums[i]) continue;

    temp = -nums[i];
    l = i + 1;
    r = n - 1;

    while (l < r) {
      if (nums[l] + nums[r] > temp) r--;
      else if (nums[l] + nums[r] < temp) l++;
      else {
        resArr.push([nums[i], nums[l], nums[r]]);

        //Skipping duplicates while choosing the second element of the triplet
        while (nums[l] === nums?.[l + 1]) l++;

        //Skipping duplicates while choosing the third element of the triplet
        while (nums[r] === nums?.[r - 1]) r--;

        l++;
        r--;
      }
    }
  }

  console.log(resArr);
}
// threeSum([-1, 0, 1, 2, -1, -4]);
// test case - [-2,0,0,2,2]

//----------------------------------

/*
Check if an array has triplets that sum to zero.
If it does, return 1, else return 0
*/

function hasZeroSumTriplets(arr, n) {
  let hasZeroSumTriplets = false;

  arr.sort((a, b) => a - b);
  let temp, l, r;

  for (let i = 0; i < n; i++) {
    //Guard class
    if (hasZeroSumTriplets) break;

    temp = -1 * arr[i];
    l = i + 1;
    r = n - 1;

    while (l < r) {
      if (arr[l] + arr[r] > temp) r--;
      else if (arr[l] + arr[r] < temp) l++;
      else {
        hasZeroSumTriplets = true;
        break;
      }
    }
  }

  console.log(hasZeroSumTriplets);
  return hasZeroSumTriplets ? 1 : 0;
}

hasZeroSumTriplets([0, -1, 2, -3, 1], 5);
