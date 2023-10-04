/* 
1.Problem Description
Given a sorted array of integers and a target, find if there’s 
a pair of elements that add up to the target. Return true if 
such a pair can be found, and false otherwise. 
*/
// Brute-force Two loops and calculate sum - TC-O(N2) and SC-O(1)

//Efficient way - TC-O(N) and SC-O(1)
// function findTarget(n, arr, target) {
//   let l = 0,
//     r = n - 1;
//   let tempSum;
//   while (l < r) {
//     tempSum = arr[l] + arr[r];
//     if (tempSum < target) l++;
//     else if (tempSum > target) r--;
//     else return true;
//   }
//   return false;
// }
// console.log(findTarget(5, [2, 4, 5, 8, 9], 7));

//-------------------------------------------------------

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
// function maxTripletSum(n, arr) {
//   let leftEl = -1;
//   let rightEl = -1;
//   let maxSum = 0;

//   //Selecting the middle element and choosing the left and right elements
//   for (let i = 1; i < n - 1; i++) {
//     //selecting the left element
//     for (let j = 0; j < i; j++)
//       if (arr[j] < arr[i]) leftEl = Math.max(leftEl, arr[j]);

//     //selecting the right element
//     for (let j = i + 1; j < n; j++)
//       if (arr[j] > arr[i]) rightEl = Math.max(rightEl, arr[j]);

//     //Checking if there are valid left Elements and right Elements
//     if (leftEl !== -1 && rightEl !== -1)
//       maxSum = Math.max(maxSum, leftEl + arr[i] + rightEl);

//     //Reseting left and right elements for each iteration
//     leftEl = -1;
//     rightEl = -1;
//   }
//   return maxSum;
// }

//-------------------------------------------------

/*
3. Problem Description
Given two sorted arrays of size M and N, 
merge the two arrays and return the final array, sorted.
*/

//TC - O(M+N) and SC - O(M+N)
// function mergeSortedArr(arr1, arr2) {
//   let n = arr1.length,
//     m = arr2.length;
//   let i = 0,
//     j = 0;

//   let resArr = [];
//   while (i < n && j < m) {
//     if (arr1[i] <= arr2[j]) {
//       resArr.push(arr1[i]);
//       i++;
//     } else {
//       resArr.push(arr2[j]);
//       j++;
//     }
//   }

//   for (; i < n; i++) resArr.push(arr1[i]);
//   for (; j < m; j++) resArr.push(arr2[j]);

//   console.log(resArr);
//   return resArr;
// }

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
// function twoSum(nums, target) {
//   let map = new Map();
//   let temp;
//   for (let i = 0; i < nums.length; i++) {
//     temp = target - nums[i];
//     if (map.has(temp)) return [map.get(temp), i];
//     else map.set(nums[i], i);
//   }

//   return [-1, -1];
// }

//-------------------------------------

/*
5.Problem Description
Given a sorted array, remove the duplicates in-place,
 such that each element in the array appears at most 
 twice, and return the new length.

Do not allocate extra space for another array, 
you must do this by modifying the input array 
in-place with O(1) extra memory.
*/
