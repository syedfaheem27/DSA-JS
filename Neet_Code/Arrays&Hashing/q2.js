// PROBLEM 1

//TOP K FREQUENT ELEMENTS

/*
PROBLEM DESCRIPTION

Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.

CONSTRAINTS

-  k is in the range [1, the number of unique elements in the array].
-  It is guaranteed that the answer is unique.
*/

//BRUTE FORCE APPROACH
//TC O(NlogN) & SC O(N)

function kMostFreqEls(arr, k) {
  const n = arr.length;

  const map = new Map();

  for (let i = 0; i < n; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);

  const sorted_freqEls = [...map].sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      return b[0] - a[0];
    }
  });

  const res_arr = [];
  for (let i = 0; i < sorted_freqEls.length && k > 0; i++) {
    res_arr.push(sorted_freqEls[i][0]);
    k--;
  }

  return res_arr;
}

//TODO: Go through bucket sort to add the optimised solution for this

/*---------------------------------------*/
//PROBLEM 2

// Given an integer numRows, return the first numRows of Pascal's triangle.

//Input: numRows = 5
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//TC O(n2) & SC O(n2)

function pyramidPrinting(k) {
  let res_arr = [];
  res_arr.push([1]);

  for (let i = 1; i < k; i++) {
    res_arr.push([1]);

    for (let j = 1; j < i; j++) {
      res_arr[i][j] = res_arr[i - 1][j] + res_arr[i - 1][j - 1];
    }
    res_arr[i].push(1);
  }

  return res_arr;
}

/*-------------------------------------------*/

//PROBLEM 3

//REMOVE ELEMENT

/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

//OPTIMAL APPROACH
//TC O(N) & SC O(1)

function removElement(nums, val) {
  let n = nums.length;

  for (let i = 0; i < n; i++) if (nums[i] === val) nums[i] = "_";

  let front = 0,
    back = 0;

  while (front < n) {
    if (nums[front] !== "_") {
      nums[back] = nums[front];
      back++;
    }

    front++;
  }

  return back;
}

//Best Approach
//Although the TC didn't change but we're using a single loop here
function remEl(nums, val) {
  let n = nums.length;
  let ptr = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== val) nums[ptr++] = nums[i];
  }

  return ptr;
}
