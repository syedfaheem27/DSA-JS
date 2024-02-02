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
