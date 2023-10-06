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
// function sortColouredObjects(nums) {
//   //Appraoch-1
//   let zeroIdx = 0,
//     twoIdx = nums.length - 1;
//   let i = 0;
//   while (i < nums.length) {
//     //move zeroIdx to an element which is not zero
//     while (nums[zeroIdx] === 0) zeroIdx++;

//     //move twoIdx to an element which is not two
//     while (nums[twoIdx] === 2) twoIdx--;

//     if (nums[i] === 0 && i > zeroIdx) {
//       [nums[i], nums[zeroIdx]] = [nums[zeroIdx], 0];
//     } else if (nums[i] === 2 && i < twoIdx) {
//       [nums[i], nums[twoIdx]] = [nums[twoIdx], 2];
//     } else i++;
//   }

//   console.log(nums);
// }

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
//Finish everything from session 3 on crio before proceeding

//Intersection of two arrays
//TC-O(N) and SC-O(N)

function intersectionOfTwoArrays(N, M, nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < N; i++) map.set(nums1[i], map.get(nums1[i]) + 1 || 1);

  let resArr = [];
  for (let i = 0; i < M; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
      resArr.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1);
    }
  }

  console.log(resArr);
}

// intersectionOfTwoArrays(4, 2, [1, 2, 2, 1], [2, 2]);

//Optimizing the problem if the arrays were sorted
function intersectionOfTwoArrays2(N, M, nums1, nums2) {
  let resArr = [];
  let i = 0,
    j = 0;
  while (i < N && j < M) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      resArr.push(nums1[i]);
      i++;
      j++;
    }
  }

  console.log(resArr);
}

// intersectionOfTwoArrays2(8, 5, [1, 2, 2, 2, 3, 3, 3, 4], [2, 2, 3, 3, 4]);

//----------------------------------------------
//Group angrams together
// Input- an array of words
//Output - an array of arrays with similar anagrams in one

function groupAnagrams(n, strings) {
  let map = new Map();
  let temp;
  for (let i = 0; i < strings.length; i++) {
    temp = strings[i].split("").sort().join("");
    if (map.has(temp)) {
      map.set(temp, map.get(temp).concat([strings[i]]));
    } else {
      map.set(temp, [strings[i]]);
    }
  }
  let groupArr = [];
  for (let [_, value] of map) {
    groupArr.push(value);
  }

  console.log(groupArr);
}

// groupAnagrams(5, ["act", "god", "cat", "dog", "tac"]);
//SC - O(NM) and TC-O(NMlogM) - M the max length of the word in a string

//-----------------------------------------------------

// Remove Duplicates from a sorted array
function removeDuplicates1(n, arr) {
  let reqIdx = 0;
  let i = 1;
  while (i < n) {
    if (arr[i] !== arr[i - 1]) arr[++reqIdx] = arr[i];

    i++;
  }
  console.log(reqIdx + 1);
  console.log(arr);
}

removeDuplicates1(7, [2, 4, 4, 4, 6, 8, 8]);
