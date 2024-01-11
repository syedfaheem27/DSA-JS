// PROBLEM 1

//FIND THE GCD OF TWO NUMBERS

// METHOD 1 : ITERATIVE APPROACH

// TC - O(|a-b|) which is a linear time complexity and thus, it can fail certain tests
// SC- O(1)

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function gcdI(a, b) {
  if (a === b) return a;

  let large_num = a > b ? a : b;
  let small_num = a > b ? b : a;
  let temp;

  while (large_num !== small_num) {
    if (large_num < small_num) {
      temp = large_num;
      large_num = small_num;
      small_num = temp;
    }

    large_num -= small_num;
  }

  return small_num;
}

// METHOD 2 : BETTER ITERATIVE APPROACH

//The time here is increased by repeated subtractions which can be avoided by a single operation
//which is the modulo operator - it does exactly what we did but in a single operation and thus
//skipping all the unnecessary steps in between.

// TC - O(log(min(a,b))) , the input data is being divided in every iteration, resulting in a
//logarithmic variation and you can clearly see how changing the min. of the two changes the TC

//SC - O(1)

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function gcdII(a, b) {
  if (a === b) return a;

  let large_num = a > b ? a : b;
  let small_num = a > b ? b : a;
  let temp;

  while (large_num > 0) {
    if (large_num < small_num) {
      temp = large_num;
      large_num = small_num;
      small_num = temp;
    }

    large_num = large_num % small_num;
  }

  return small_num;
}

/////////////////////////////////////////////////

//Now, the above two codes can be written using recursion and nothing will
//change except for the auxillary SC.

// METHOD 3 RECURSIVE APPROACH

//TC - O(log(min(a,b))) and SC - O(min(a,b))

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function gcdIII(a, b) {
  if (b === 0) return a;

  //   return a > b ? gcdIII(b, a % b) : gcdIII(a, b % a);
  return gcdIII(b, a % b);

  //   if you carefully look at the two return statements
  //   they are doing the same thing

  //  The first one is quite clear what it does
  //  The second one works perfectly when b is the smallest of the two
  //  and in the case where b is the largest, it flips the numbers and makes
  //  sure that b always becomes the smallest one
}

//////////////////////////////////////////////////

// PROBLEM 2 LEFT ROTATION OF AN ARRAY

/*
Problem Description

Given an array of length N, rotate the array to the left by d steps, 
where d is non-negative.

Smample Input
3 [1,2,3,4,5,6,7]

Sample Output
[4,5,6,7,1,2,4]
*/

// BRUTE FORCE APPROACH

//TC - O(n) and SC - O(n)
/**
 *
 * @param {number[]} arr
 * @param {number} d
 * @returns {number}
 */

function leftRotate(arr, d) {
  let n = arr.length;

  d = d % n;

  let ans_arr = new Array(n);

  let new_idx;

  for (let i = 0; i < n; i++) {
    new_idx = n - d + i;

    if (new_idx >= n) ans_arr[new_idx - n] = arr[i];
    else ans_arr[new_idx] = arr[i];
  }

  return ans_arr;
}

// OPTIMAL APPROACH
// TC - O(n) AND SC - O(1)

/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 */

function reverseArray(arr, left, right) {
  let temp;

  while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

/**
 *
 * @param {number[]} arr
 * @param {number} d
 * @returns {number[]}
 */

function leftRotateI(arr, d) {
  let n = arr.length;

  d = d % n;

  reverseArray(arr, 0, d - 1);

  reverseArray(arr, d, n - 1);

  reverseArray(arr, 0, n - 1);

  return arr;
}
