//PROBLEM 1 : GENERATE THE PREFIX SUM AND SUFFIX SUM

//prefSum(i)=prefSum(i-1) + arr[i]
//suffSum(i)=suffSum(i+1) + arr[i]
//prefSum(i) + suffSum(i)=totalSum + arr[i]
//suffSum(i)=totalSum+arr[i]-prefSum(i)

/**
 * @typedef {Object} prefSuffObj
 * @property {number[][]} prefixSum
 * @property {number[][]} suffixSum
 */

/**
 *
 * @param {number[][]} arr
 * @returns {prefSuffObj}
 */
function prefAndSuffSum(arr) {
  let n = arr.length;

  let pref_sum = [],
    suff_sum = [];

  let sum = 0;
  for (let i = 0; i < n; i++) sum += arr[i];

  let temp_sum = 0;

  for (let i = 0; i < n; i++) {
    temp_sum += arr[i];
    pref_sum.push(temp_sum);
    suff_sum.push(sum + arr[i] - temp_sum);
  }

  return {
    prefixSum: pref_sum,
    suffixSum: suff_sum,
  };
}

/* ------------------------------------------------------------- */

// PROBLEM 2 : FIND THE EQUI-PARTITION INDEX

/*
PROBLEM DESCRIPTION

Partitioning an array means to split an array along an element, 
such that it divides the array into two parts with some specific 
property. 
The element that partitions the array is called the partitioning element.

Given an array, find the element, partitioning along which, the sum of elements 
to its left, equals the sum of elements to its right. The partition element itself 
is to be excluded from both sums.

Return the index of the partitioning element. If no such element exists, return -1.
*/

//METHOD 1 : BRUTE FORCE APPROACH
//TC - O(N2) & SC - O(1)

/**
 *
 * @param {number[][]} arr
 * @returns {number}
 */
function equiPartition(arr) {
  let l_sum = 0,
    r_sum = 0;

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    //Calculate the left_sum
    l_sum = 0;
    for (let j = 0; j < i; j++) l_sum += arr[j];

    //Calculate the right sum
    r_sum = 0;
    for (let j = i + 1; j < n; j++) r_sum += arr[j];

    if (l_sum === r_sum) return i;
  }

  return -1;
}

// console.log(equiPartition([1, 4, 2, -6]));
// [5, 4, -9, 4];

// APPROACH 2 : BETTER APPROACH
//TC - O(N) & SC - O(N)
// Create a prefix sum and a suffix sum array and
// return the index which satisfies pref_sum[i-1]=suff_sum[i+1]
// and for i=0 || i=n-1 , take pref_sum[i-1]=0 & suff_sum[i+1]=0 respectively

//APPROACH 3 : BEST APPROACH
//TC O(N) & SC O(1)

/**
 *
 * @param {number[][]} arr
 * @returns {number}
 */
function equiPartitionII(arr) {
  let n = arr.length;

  let total_sum = 0;
  for (let i = 0; i < n; i++) total_sum += arr[i];

  let pref_sum = 0,
    suff_sum;

  for (let i = 0; i < n; i++) {
    suff_sum = total_sum - pref_sum - arr[i];

    if (pref_sum === suff_sum) return i;

    pref_sum += arr[i];
  }

  return -1;
}

/* ------------------------------------------------------------- */

//PROBLEM 3 : LARGEST SUM CONTIGOUS SUB-ARRAY

/*
Problem Description
Given an array, find a non-empty contiguous subarray with the largest sum.

Sample Input 1
[-2, -3, 4, -1, -2, 1, 5, -3]

Sample Output 1
[4, -1, -2, 1, 5] 7

Explanation 1
The subarray [4, -1, -2, 1, 5] has sum 7, which is the maximum possible.
*/

//BRUTE FORCE APPROACH
