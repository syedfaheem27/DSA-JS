//Additional problems
/*
Problem Description
Given an array with n objects colored red, white or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this problem.

Input format
First-line will contain the number of objects n.

Output format
A single line that contains the numbers in the sorted order.

Constraints
1 <= length(S) <= 200000

*/
function sortColouredObjects(nums) {
  //Appraoch-1
  let zeroIdx = 0,
    twoIdx = nums.length - 1;
  let i = 0;
  while (i < nums.length) {
    //move zeroIdx to an element which is not zero
    while (nums[zeroIdx] === 0) zeroIdx++;

    //move twoIdx to an element which is not two
    while (nums[twoIdx] === 2) twoIdx--;

    if (nums[i] === 0 && i > zeroIdx) {
      [nums[i], nums[zeroIdx]] = [nums[zeroIdx], 0];
    } else if (nums[i] === 2 && i < twoIdx) {
      [nums[i], nums[twoIdx]] = [nums[twoIdx], 2];
    } else i++;
  }

  console.log(nums);
}

// sortColouredObjects([2, 0, 1, 2, 0, 1, 0, 2]);

//This is also called the dutch national flag algorithm
function sortColouredObjects(nums) {
  let left = 0,
    mid = 0,
    right = nums.length - 1;
  while (mid <= right) {
    if (nums[mid] === 0) {
      [nums[mid], nums[left]] = [nums[left], 0];
      left++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[right]] = [nums[right], 2];
      right--;
    } else mid++;
  }

  console.log(nums);
}
// sortColouredObjects([2, 0, 1, 2, 0, 1, 0, 2]);

//---------------------------------------------------
