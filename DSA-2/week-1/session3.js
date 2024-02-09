/*
2. Problem Description
Given an array nums, you need to find the maximum sum of 
triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k 
and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

constraints
1 <= nums[i] <= 10^9
*/

//Brute-force - three nested loops - TC-O(N3) and SC-O(1)

//Efficient one - TC-O(N2) and SC-O(1)
function maxTripletSum(n, arr) {
  let leftEl = -1;
  let rightEl = -1;
  let maxSum = 0;

  //Selecting the middle element and choosing the left and right elements
  for (let i = 1; i < n - 1; i++) {
    //selecting the left element
    for (let j = 0; j < i; j++)
      if (arr[j] < arr[i]) leftEl = Math.max(leftEl, arr[j]);

    //selecting the right element
    for (let j = i + 1; j < n; j++)
      if (arr[j] > arr[i]) rightEl = Math.max(rightEl, arr[j]);

    //Checking if there are valid left Elements and right Elements
    if (leftEl !== -1 && rightEl !== -1)
      maxSum = Math.max(maxSum, leftEl + arr[i] + rightEl);

    //Reseting left and right elements for each iteration
    leftEl = -1;
    rightEl = -1;
  }
  return maxSum;
}

//------------------------------------------------------

/*
4.Problem Description
Given an array of integers as input, output the indices of
two numbers in the array which add up to a specified target.

Assume that each input would have exactly one solution and 
you cannot use the same element twice. If 2 different elements 
have the same value, they can be used.

Print the indices in increasing order.
*/
//TC- O(N) and SC- O(N)
function twoSum(nums, target) {
  let map = new Map();
  let temp;
  for (let i = 0; i < nums.length; i++) {
    temp = target - nums[i];
    if (map.has(temp)) return [map.get(temp), i];
    else map.set(nums[i], i);
  }

  return [-1, -1];
}

//-------------------------------------

/*
5.Problem Description
Given a sorted array, remove the duplicates in-place,
 such that each element in the array appears at most 
 twice, and return the new length and the required array in an object
 {newLength,newArr}

Do not allocate extra space for another array, 
you must do this by modifying the input array 
in-place with O(1) extra memory.
*/

function removeDuplicates1(n, nums) {
  let reqIndex = 0;
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      //   reqIndex++;
      //   nums[reqIndex] = nums[i];
      //single line instead of the above two lines
      nums[++reqIndex] = nums[i];
    }
  }

  return {
    newLength: reqIndex + 1,
    newArr: nums.slice(0, reqIndex + 1),
  };
}

// removeDuplicates1(7, [2, 2, 2, 3, 4, 4, 9]);
