//PROBLEM 1

//CONTAINS DUPLICATES

//Given an integer array nums, return true if any value appears
//at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  //Using Sets
  //TC O(n) & SC O(n)

  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }

  return false;

  //Sorting
  // TC O(N) & SC O(1)
  // nums.sort((a,b)=>a-b);

  // for(let i=1;i<nums.length;i++)
  //     if(nums[i]===nums[i-1])
  //         return true;

  // return false;
}

/*-----------------------------------------*/

//PROBLEM 2

//CONCATENTATION OF AN ARRAY

/*
Given an integer array nums of length n, you want to create an array ans of 
length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
*/

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function concatenateArray(nums) {
  //Method 1
  // return [...nums, ...nums]
  //Method 2 : Not considered good to modify the input
  // let n = nums.length;
  // for (let i = n; i < 2 * n; i++) nums[i] = nums[i - n];
  // return nums;

  let res_arr = [];
  for (let i = 0; i < nums.length; i++) res_arr.push(nums[i]);

  return nums.concat(res_arr);
}

/*-----------------------------------------*/

//PROBLEM 3

//Replace Elements with Greatest Element on Right Side

/*
Given an array arr, replace every element in that array with the 
greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
*/

//BRUTE FORCE

//TC O(N2)  & SC O(N)

function replaceElementsI(arr) {
  let n = arr.length;

  let res_arr = [];
  let max_num;

  for (let i = 0; i < n - 1; i++) {
    max_num = Number.MIN_SAFE_INTEGER;

    for (let j = i + 1; j < n; j++) max_num = Math.max(max_num, arr[j]);

    res_arr.push(max_num);
  }

  res_arr.push(-1);

  return res_arr;
}

//Better approach using a stack

//TC O(N) & SC O(N)

function replaceElementsII(arr) {
  let n = arr.length;

  let max_stack = [-1];

  for (let i = n - 1; i > 0; i--) {
    let num = max_stack[max_stack.length - 1];

    if (arr[i] > num) max_stack.push(arr[i]);
    else max_stack.push(num);
  }

  return max_stack.reverse();
}

//Best Appraoch TC O(N) & SC O(1)

function replaceElementsIII(arr) {
  let n = arr.length;

  let max_num = -1;
  let temp_num;

  for (let i = n - 1; i >= 0; i--) {
    temp_num = arr[i];
    arr[i] = max_num;

    max_num = Math.max(max_num, temp_num);
  }

  return arr;
}

/*-----------------------------------------*/
