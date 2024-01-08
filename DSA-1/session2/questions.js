//PROBLEM - 1
/*
Problem Description
Given an array of n strings, sort the array in lexicographical order.

Lexicographical order is the order in which words appear in a dictionary.
*/

//we can use merge sort, quick sort or any other sort
//I will add those different types of sorts later in a
//separate folder

/**
 *
 * @param {string[]} arr
 * @returns {string[]}
 */

function sortStringsI(arr) {
  //Bubble Sort
  let temp;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

//Insertion sort

/**
 *
 * @param {string[]} arr
 * @returns {string[]}
 */
function sortStringsII(arr) {
  let idx;
  let temp;

  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    temp = arr[idx];
    arr[idx] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

//////////////////////////////////////////////////

//PROBLEM - 2

/*
Problem Description

Given an array of n integers and an integer k, 
rotate the array k times in clockwise order.

Sample Input 1
5
1 2 3 4 5
2

Sample Output 1
4 5 1 2 3

Explanation 
After first rotation array will be 5 1 2 3 4

After second rotation array will be 4 5 1 2 3
*/

//TC - O(kn), SC - O(1)

/**
 *
 * @param {number} n
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

function cyclicRotationI(n, arr, k) {
  k = k % n;
  let temp, swap;

  for (let i = 0; i < k; i++) {
    temp = arr.pop();
    for (let j = 0; j < n; j++) {
      swap = arr[j];
      arr[j] = temp;
      temp = swap;
    }
  }

  return arr;
}

//Better Approach  - using unshift
//TC - TC of Unshift * k, SC - O(1)

/**
 *
 * @param {number} n
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

function cyclicRotationII(n, arr, k) {
  k = k % n;

  for (let i = 0; i < k; i++) arr.unshift(arr.pop());

  return arr;
}

//Best Approach - TC - O(N), SC - O(1)

/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 */

function reverse(arr, left, right) {
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
 * @param {number} n
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

function cyclicRotationIII(n, arr, k) {
  k = k % n;

  //reverse first n-k-1 elements
  reverse(arr, 0, n - k - 1);

  //reverse last k elements
  reverse(arr, n - k, n - 1);

  //reverse the whole array
  reverse(arr, 0, n - 1);

  return arr;
}

cyclicRotationIII(5, [1, 2, 3, 4, 5], 2);

//////////////////////////////////////////////

//PROBLEM - 3

//CAPITALIZE

/*
Problem Description

Given a paragraph of words, capitalise the first character 
of each word and return the updated paragraph.

Note : No inbuilt function such as split() to be used.
*/

//TC - O(N), SC - O(N)

/**
 *
 * @param {string} para
 * @returns {string}
 */

function capitalize(para) {
  let n = para.length;

  let first_char_code = 0;

  if (para[0] !== "") first_char_code = para[0].charCodeAt();

  let res_str = "";

  if (first_char_code && first_char_code >= 97 && first_char_code <= 122)
    res_str += para[0].toUpperCase();
  else res_str += para[0];

  for (let i = 0; i < n; i++) {
    if (i === 0) continue;

    if (para[i] !== " " && para?.[i - 1] === " ") {
      res_str += para[i].toUpperCase();
    } else res_str += para[i];
  }

  return res_str;
}

//////////////////////////////

//PROBLEM -4

//Toggle the case of every character in a given word

//TC - O(N) and SC-O(N)

/**
 *
 * @param {string} str
 * @returns {string}
 */

function toggleCase(str) {
  let diff = "a".charCodeAt() - "A".charCodeAt();

  let n = str.length;
  let code;
  let res_str = "";

  for (let i = 0; i < n; i++) {
    code = str[i].charCodeAt();

    if (code >= 65 && code <= 90) code = code + diff;

    if (code >= 97 && code <= 122) code = code - diff;

    res_str += String.fromCharCode(code);
  }

  return res_str;
}

///////////////////////////////////////

//PROBLEM - 5

/*
Problem Description

Write a program that outputs the string representation of numbers from 1 to N.

But for multiples of three it should output "Fizz" instead of the number and 
for the multiples of five output “Buzz”. For numbers which are multiples of 
both three and five output “FizzBuzz”.
*/

/**
 *
 * @param {number} n
 * @returns {string[]}
 */

function fizzBuzz(n) {
  let res_arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res_arr.push("FizzBuzz");
      continue;
    }

    if (i % 5 === 0) res_arr.push("Buzz");
    else if (i % 3 === 0) res_arr.push("Fizz");
    else res_arr.push(i + "");
  }

  return res_arr;
}

///////////////////////////////////////

//PROBLEM - 6

//Pyramid Printing

/*
Problem Description

Given a number n, you have to print a triangle-shaped 
pattern with n rows using space separated '*'.

*/

/**
 *
 * @param {number} n
 */

function pyramidPrinting(n) {
  let col_count = 0;
  let res_str = "";

  for (let i = 0; i < n; i++) {
    col_count++;
    res_str = "";

    for (let j = 0; j < col_count; j++) res_str += "*";

    console.log(res_str);
  }
}

pyramidPrinting(4);
