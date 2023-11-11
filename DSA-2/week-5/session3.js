/*
Problem Description
Given an array of non negative integers,
arrange the elements, such that if made into
a number, they form the largest number.

For instance,

Given the array [1, 3, 10] , 
this should be arranged to [3, 1, 10] - since 
the largest possible number formed by these numbers 
is 3110.

Note: The number can be large, so return in the form of a string
*/

function largestNumber(arr) {
  arr.sort((a, b) => {
    let ab = a + "" + b;
    let ba = b + "" + a;

    return ba - ab;
  });

  return arr.join("");
}

// console.log(largestNumber([3, 1, 30, 9]));

////////////////////////////////////

/*
Problem Description
Given an array nums containing n
distinct numbers in the range [0, n],
return the only number in the range that 
is missing from the array.

Input-[3,0,2,4]
Output - 1
*/
// Method-1 TC-O(N) and SC-O(1)
function singleMissingNumber(nums) {
  let n = nums.length;

  let totalSum = (Math.pow(n, 2) + n) / 2;

  let currSum = 0;
  for (let i = 0; i < n; i++) currSum += nums[i];

  return totalSum - currSum;
}

// console.log(singleMissingNumber([0, 2, 3, 4]));

//TODO:
//Method-2 based on indexes TC-O(N) and SC-O(1)
//solve it using that method

/////////////////////////////////////
/*
Problem Description
Given a n x n matrix where each of the rows and columns are sorted 
in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.
*/

/*
Sample Input 1
3,8,
[[1, 5, 9],[10 ,11 ,13],[12, 13 ,15]]

Sample Output 1
13

Explanation 1
If written in non-decreasing order, elements are,

1 5 9 10 11 12 13 13 15

Hence, 8th smallest element is 13.
*/

function kthSmallestElementInMatrix(matrix, k) {
  let n = matrix.length;
  if (k > n * n) return;
  let low = matrix[0][0],
    high = matrix[n - 1][n - 1];

  let mid;
  let res;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (getRank(matrix, mid) < k) low = mid + 1;
    else {
      res = mid;
      high = mid - 1;
    }
  }

  return res;
}

function getRank(matrix, el) {
  let n = matrix.length;
  let rank = 0;
  for (let i = 0; i < n; i++) {
    rank += getRowRank(matrix[i], el);
  }
  return rank;
}

function getRowRank(arr, el) {
  let l = 0,
    r = arr.length - 1;
  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] <= el) l = mid + 1;
    else r = mid - 1;
  }

  return l;
}

kthSmallestElementInMatrix(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8
);
