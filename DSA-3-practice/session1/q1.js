//PROBLEM 1
//FIND THE NEXT SMALLER ELEMENT IN AN ARRAY

/*
PROBLEM DESCRIPTION

Given an array A having N elements, the task is to find the next smaller element(NGE) for each element 
of the array in order of their appearance in the array. If no such element exists, output null. 
This should be achieved with a time complexity of O(n).
*/

//Brute force - pretty easy - run two loops

//Efficient appraoch - TC O(n) & SC O(n)
function nextSmallerEl(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    while (stack.length !== 0 && arr[stack[stack.length - 1]] > el) {
      arr[stack.pop()] = el;
    }

    stack.push(i);
  }

  while (stack.length !== 0) {
    arr[stack.pop()] = null;
  }

  return arr;
}

/*-----------------------------*/

//PROBLEM 2
//FIND THE NEXT LARGER ELEMENT

//Brute force - use two loops

//Efficient approach TC O(N) & SC O(N)
function nextGreaterEl(arr) {
  let n = arr.length;
  let stack = [];

  for (let i = 0; i < n; i++) {
    let el = arr[i];

    for (; stack.length !== 0 && arr[stack[stack.length - 1]] < el; )
      arr[stack.pop()] = el;

    stack.push(i);
  }

  while (stack.length !== 0) arr[stack.pop()] = -1;

  return arr;
}

/*--------------------*/

//PROBLEM 3

/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the 
next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

*/

function nextGreaterElI(nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) map.set(nums2[i], i);

  let stack = [];
  for (let i = 0; i < nums2.length; i++) {
    let el = nums2[i];

    while (stack.length !== 0 && nums2[stack[stack.length - 1]] < el)
      nums2[stack.pop()] = el;

    stack.push(i);
  }

  while (stack.length !== 0) nums2[stack.pop()] = -1;

  for (let i = 0; i < nums1.length; i++) {
    let idx = map.get(nums1[i]);
    nums1[i] = nums2[idx];
  }

  return nums1;
}

/*------------------------*/
//PROBLEM 4

/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), 
return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in 
the array, which means you could search circularly to find its next greater number. If it doesn't 
exist, return -1 for this number.
*/

//TODO: Optimise it

//Better Approach
//TC O(N) & SC O(N)
function nextGreaterElII(nums) {
  let new_nums = [...nums, ...nums];

  let stack = [];

  for (let i = 0; i < new_nums.length - 1; i++) {
    while (
      stack.length !== 0 &&
      new_nums[stack[stack.length - 1]] < new_nums[i]
    )
      new_nums[stack.pop()] = new_nums[i];

    stack.push(i);
  }

  while (stack.length !== 0) new_nums[stack.pop()] = -1;

  new_nums.length = nums.length;
  return new_nums;
}
