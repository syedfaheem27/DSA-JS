//PROBLEM 1

//FIND PAIR WITH GIVEN SUM IN SORTED ARRAY

/*
Problem Description

Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. 
Return true if such a pair can be found, and false otherwise.
*/

//BRUTE FORCE - USE TWO LOOPS - TC O(N2) & SC O(1)

//BETTER APPRAOCH - USING A MAP - TC O(N) and SC O(N)
/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

function pairSum(arr, target) {
  let map = new Map();
  let n = arr.length;
  let temp;
  for (let i = 0; i < n; i++) {
    temp = target - arr[i];

    if (map.has(temp)) return true;
    else map.set(arr[i], 1);
  }

  return false;
}

//BEST APPROACH - USE TWO POINTERS- TC O(N) and SC O(1)
//This appraoch will only work for sorted arrays

/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

function pairSumI(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let temp_sum = arr[start] + arr[end];

    if (temp_sum > target) end--;
    else if (temp_sum < target) start++;
    else return true;
  }

  return false;
}

///////////////////////////////////////////////////

//PROBLEM 2

//MERGE TWO SORTED ARRAYS

/*
Problem Description

Merge two sorted arrays into a single array 
*/

//APPROACH 1 - Concatenate the arrays and sort and return
//TC O((m+n)log(m+n)) and SC O(m+n)

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);

  //   return [...arr1, ...arr2].sort((a, b) => a - b);
}

//APPROACH 2 - BETTER APPROACH - USING TWO POINTERS
//TC O(m+n) & SC O(m+n)

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function mergeArraysI(arr1, arr2) {
  let res_arr = [];
  let n = arr1.length,
    m = arr2.length;

  let i = 0,
    j = 0;
  for (; i < n && j < m; ) {
    if (arr1[i] <= arr2[j]) {
      res_arr.push(arr1[i]);
      i++;
    } else {
      res_arr.push(arr1[i]);
      j++;
    }
  }

  for (; i < n; i++) res_arr.push(arr1[i]);

  for (; j < m; j++) res_arr.push(arr2[j]);

  return res_arr;
}

//ANOTHER APPROACH - WITHOUT USING ANY SPACE
//TC O(m*n)

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function mergeArraysII(arr1, arr2) {
  let i = 0;
  let n = arr1.length;
  let temp;

  while (i < n) {
    if (arr1[i] <= arr2[0]) i++;
    else {
      temp = arr1[i];
      arr1[i] = arr2[0];
      arr2[0] = temp;

      for (let j = 0; j < n; j++) {
        if (arr2[j] > arr2[j + 1]) {
          temp = arr2[j];
          arr2[j] = arr2[j + 1];
          arr2[j + 1] = temp;
        } else break;
      }
    }
  }

  for (let j = 0; j < n; j++) arr1.push(arr2[j]);

  return arr1;
}

/////////////////////////////////////////

//PROBLEM 3

//REMOVE DUPLICATES SUCH THAT EACH ELEMENT OCCURS ATMOST TWICE IN A SORTED ARRAY

/*
Problem Description

Given a sorted array, remove the duplicates in-place, 
such that each element in the array appears at most twice, 
and return the new length.

Do not allocate extra space for another array, you must do this 
by modifying the input array in-place with O(1) extra memory.
*/

/**
 *
 * @param {number[]} arr
 * @returns {object}
 */

function removeDuplicates(arr) {
  let n = arr.length;
  let count = 1;
  let insert_idx = 0;
  for (let j = 1; j < n; j++) {
    if (arr[j] === arr[j - 1]) count++;
    else count = 1;

    if (count <= 2) {
      insert_idx++;
      if (insert_idx !== j) arr[insert_idx] = arr[j];
    }
  }

  return {
    newLength: insert_idx + 1,
    newArr: arr.slice(0, insert_idx + 1),
  };
}

///////////////////////////////////////////////////////

//PROBLEM 4

// Remove Duplicates such that each element exists atmost twice in an unsorted array

//BRUTE FORCE APPROACH - Use two loops and keep an index which will point to the place where the
//desired element needs to be inserted. TC O(N2) and SC O(1)

//BETTER APPROACH

//USE A MAP
//TC O(N) AND SC O(N)

function removeDuplicatesI(arr) {
  let n = arr.length;

  let map = new Map();

  for (let i = 0; i < n; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);

  let idx = 0;

  for (let [key, val] of map) {
    val = val > 2 ? 2 : val;
    for (let i = 0; i < val; i++) arr[idx++] = key;
  }

  return {
    newLength: idx,
    newArr: arr.slice(0, idx),
  };
}

const { newArr, newLength } = removeDuplicatesI([
  1, 25, 2, 3, 4, 2, 2, -1, 8, 9, 10,
]);

/////////////////////////////////////////////////////////////////

//PROBLEM 5

//FIND PAIR WITH GIVEN SUM IN UNSORTED ARRAY

/*
Problem Description

Given an array of integers as input, output the indices of 
two numbers in the array which add up to a specified target.

Assume that each input would have exactly one solution and 
you cannot use the same element twice. If 2 different 
elements have the same value, they can be used.

Print the indices in increasing order.
*/

//BRUTE FORCE APPROACH - USE TWO LOOPS AND RETURN AS SOON AS YOU FIND THE SUM === TARGET
// TC - O(N2) & SC - O(1)

//BETTER APPROACH - USING MAPS
//TC O(N) & SC O(N)

/**
 *
 * @param {number[]} nums
 * @param {number[]} target
 * @returns
 */
function pairSumII(nums, target) {
  let temp;

  let map = new Map();
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    temp = target - arr[i];

    if (map.has(temp)) return [map.get(temp), i];
    else map.set(arr[i], i);
  }

  return [-1, -1];
}
