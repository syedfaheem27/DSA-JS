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
