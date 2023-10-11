//Agenda - Prefix and Postfix sum and Kadane's algorithm
//1.Find prefix and postfix sum array
function prePostArr(arr) {
  let prefSum = [],
    postSum = [];
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) totalSum += arr[i];

  let pref = 0,
    post = 0;
  for (let i = 0; i < arr.length; i++) {
    pref += arr[i];
    post = totalSum + arr[i] - pref;
    prefSum.push(pref);
    postSum.push(post);
  }

  console.log(prefSum);
  console.log(postSum);
}

// prePostArr([1, 2, 3, 4, 5]);

//2.Find the partitioning Index in linear time and constant space
//The extreme elements can't be the partition elements.Incase of no answer, return -1

function partitionIndex(arr) {
  let n = arr.length;
  let prefSum = 0,
    postSum;
  let totalSum = 0;
  for (let i = 0; i < n; i++) totalSum += arr[i];

  for (let i = 0; i < n; i++) {
    prefSum += arr[i];
    if (i >= 1 && i < n - 1) {
      postSum = totalSum + arr[i] - prefSum;
      if (prefSum === postSum) return i;
    }
  }

  return -1;
}

// console.log(partitionIndex([1, 4, 2, 5]));
//The end elements can be the partition elements if prefSum[0]=totalSum

//-------------------------------------------------------

//3.Largest Sum contigous sub array
/*
Problem Description
Given an array, find a non-empty contiguous subarray with the largest sum.
*/

//Solving using kadane's algorithm TC-O(N) & SC-O(1)
function maxSumSubArr(n, arr) {
  let sum = arr[0],
    maxSum = arr[0];

  for (let i = 1; i < n; i++) {
    sum += arr[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
  }

  console.log(maxSum);
}

// maxSumSubArr(8, [-2, -3, 4, -1, -2, 1, 5, -3]);
// maxSumSubArr(5, [-1, -2, -3, -2, -5]);

//---------------------------------------

//4.Now your task is to find the array with the maxSum
function maxSumSubArr2(n, arr) {
  let sum = arr[0],
    maxSum = arr[0];
  let endIdx;
  for (let i = 1; i < n; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
      endIdx = i;
    }
    if (sum < 0) sum = 0;
  }

  let temp = maxSum,
    startIdx;
  for (let i = endIdx; i >= 0; i--) {
    temp -= arr[i];

    if (temp === 0) {
      startIdx = i;
      break;
    }
  }

  console.log(arr.slice(startIdx, endIdx + 1));
}
// maxSumSubArr2(8, [-2, -3, -4, -1, -2, -1, 5, -3]);

//---------------------------------------------
