//PROBLEM 1

/*
Problem Description

You are given a string which comprises lower case alphabets (a-z), 
upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

You are supposed to find out which character occurs the maximum number of times 
and its occurrence count in the given string. If two characters occur equal number 
of times, you have to output the character with the lower ASCII value.

For example, if your string was: aaaaAAAA, your output would be: 
A 4, because A has lower ASCII value than a.
*/

// METHOD 1 : Using Objects - TC - O(N) and SC - O(N)

//Iterate over the array and store the frequency in an object

/**
 * @param {string} text
 * @return {[character, number]}
 */

function mostFrequentI(str) {
  let freq_obj = {};

  for (let i = 0; i < str.length; i++)
    freq_obj[str[i]] = freq_obj[str[i]] + 1 || 1;

  let max_count = 0,
    res_char;

  for (let [key, value] of Object.entries(freq_obj)) {
    if (value > max_count) {
      max_count = value;
      res_char = key;
    }

    if (value === max_count)
      res_char = key.charCodeAt() < res_char.charCodeAt() ? key : res_char;
  }

  return [res_char, max_count];
}

// METHOD 2 : Using maps TC-O(N) and SC-O(N)

function mostFrequentII(str) {
  let freq_map = new Map();

  for (let i = 0; i < str.length; i++)
    freq_map.set(str[i], freq_map.get(str[i]) + 1 || 1);

  let max_count = 0,
    res_char;

  for (let [key, value] of freq_map) {
    if (value > max_count) {
      max_count = value;
      res_char = key;
    }

    if (value === max_count)
      res_char = key.charCodeAt() < res_char.charCodeAt() ? key : res_char;
  }

  return [res_char, max_count];
}

///////////////////////////////////////////////

//PROBLEM 2

//DISTINCT NUMBERS

/*
Problem Description

Given an array of integers, calculate the total number of unique integers in the array
*/

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */

function distinctNums(nums) {
  const res_map = new Map();

  for (let i = 0; i < nums; i++)
    if (!res_map.has(nums[i])) res_map.set(nums[i], 1);

  return res_map.size;
}

/////////////////////////////////////////////

// PROBLEM 3

// INTERSECTION OF TWO ARRAYS

/*
Problem Description

Given two arrays A and B, write a function to compute their intersection.

Note: Each element in the result should appear as many times as it shows in 
both arrays. The result needs to be in sorted order.
*/

// METHOD 1 : BRUTE FORCE

//TC - O(N2) and SC - O(1). While writing SC, i am only considering the extra space that i might require

/**
 *
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number[]}
 */

function intersectionOfArraysI(A, B) {
  let res_arr = [];

  for (let i = 0; i < A.length; i++) {
    let temp = A[i];

    for (let j = 0; j < B.length; j++)
      if (B[j] === temp) {
        res_arr.push(B[j]);
        B.splice(j, 1);
        break;
      }
  }

  return res_arr.sort((a, b) => a - b);
}

//METHOD 2

//Using maps - TC - O(NlogN) and SC - O(N)

function intersectionOfArraysII(A, B) {
  let freqA_map = new Map();

  for (let i = 0; i < A.length; i++)
    freqA_map.set(A[i], freqA_map.get(A[i]) + 1 || 1);

  let res_arr = [];

  for (let i = 0; i < B.length; i++) {
    let temp = B[i];

    if (freqA_map.has(temp) && freqA_map.get(temp) > 0) {
      res_arr.push(temp);
      freqA_map.set(temp, freqA_map.get(temp) - 1);
    }
  }

  return res_arr.sort((a, b) => a - b);
}
