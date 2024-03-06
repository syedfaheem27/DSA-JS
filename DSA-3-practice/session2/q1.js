//PROBLEM 1

//FIND THE LENGTH OF THE LONGEST VALID PARENTHESIS SUBSTRING

//BRUTE FORCE

//TODO: find out why 4 test cases are failing on crio's platform
//However all cases are passing on leetcode
//TC O(n2) & SC O(1)
function validParenI(str) {
  let n = str.length;

  let max_len = -1,
    len = 0;

  for (let i = 0; i < n - 1; i++) {
    if (str[i] === ")") continue;

    let mod = 1; //( :1
    len = mod;

    for (let j = i + 1; j < n; j++) {
      let add = str[j] === ")" ? -1 : 1;
      len += add;
      if (len < 0) break;
      if (len === 0) max_len = Math.max(j - i + 1, max_len);
    }
  }

  return max_len;
}

/*-----------------------------------*/

//Efficient approach
//Take note of the latest invalid parenthesis index and make use of it
//to find the maximum length
//TC O(n) & SC O(1)
function validParenII(str) {
  let n = str.length;
  let stack = [];
  let max_len = 0;

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      stack.push(i);
      continue;
    }

    let el = str[stack[stack.length - 1]];

    if (`${el}${str[i]}` === "()") {
      stack.pop();
      //checking the first invalid index which will always be at the top of the stack
      max_len =
        stack[stack.length - 1] !== undefined
          ? Math.max(max_len, i - stack[stack.length - 1])
          : Math.max(max_len, i + 1);
    } else stack.push(i);
  }

  return max_len;
}

/*-----------------------*/

//PROBLEM 2

/*
PROBLEM DESCRIPTION

Given an array of N elements and an integer B, you have
 to find the count of distinct numbers in all windows of size B.

You have to return an array of size N-B+1 where i'th element in 
the array is the number of distinct elements in sequence Ai, 
Ai+1 ,..., Ai+B-1. If B > N, return an empty array.
*/

//Efficient approach
//Using sliding window pattern and a map

/**
 *
 * @param {number} n
 * @param {number} b
 * @param {number[]} a
 * @returns {number[]}
 */

function distinctElInWindowI(n, b, arr) {
  let map = new Map();

  let res_arr = [];

  for (let i = 0; i < b; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);

  res_arr.push(map.size);

  for (let i = b; i < n; i++) {
    map.set(arr[i], map.get(arr[i]) + 1 || 1);

    let l = i - b;

    if (map.get(arr[l]) === 1) map.delete(arr[l]);
    else map.set(arr[l], map.get(arr[l]) - 1);

    res_arr.push(map.size);
  }

  return res_arr;
}

/*-----------------------*/

//PROBLEM 3

//FIND MINIMUM ELEMENT IN STACK

/*
PROBLEM DESCRIPTION

You are given to implement a stack which performs pushing, popping, 
and has a function findMin() which returns the minimum element present in the stack.

Push, pop and min should all operate in 0(1) time.
*/

function encodeEl(el, min) {
  return 2n * el - min;
}

class MinStack {
  constructor() {
    this.stack = [];
    this.minEl = -1n;
  }

  push(el) {
    el = BigInt(el);
    if (this.stack.length === 0) {
      this.stack.push(el);
      this.minEl = el;
    } else if (this.minEl >= el) {
      let encodedEl = encodeEl(el, this.minEl);
      this.stack.push(encodedEl);
      this.minEl = el;
    } else this.stack.push(el);
  }

  pop() {
    if (this.stack.length === 0) {
      return "The stack is empty!!";
    }

    if (this.stack.length === 1) {
      this.minEl = -1n;
      return this.stack.pop();
    }

    let el = this.stack[this.stack.length - 1];
    if (el <= this.minEl) {
      let prev_min = 2n * this.minEl - el;
      let to_be_popped = this.minEl;
      this.minEl = prev_min;
      this.stack.pop();
      return to_be_popped;
    }

    return this.stack.pop();
  }

  get getMin() {
    return this.minEl;
  }
  get top() {
    if (this.stack.length === 0) return "The stack is empty!";

    let el = this.stack[this.stack.length - 1];

    if (el < this.minEl) {
      return this.minEl;
    }

    return el;
  }
}

//Since, we are encoding the values to be put in the array, we need to use BIgInt
//to cater for the precision errors

/*--------------------------*/

//PROBLEM 4

//FIRST UNIQUE INTEGER

/*
PROBLEM DESCRIPTION

Given an array of integers, return the first integer with no duplicate.
If there's no such integer, return -1
*/

//Brute force - use two loops TC O(N2) & SC O(1)

//Efficient Approach - TC O(N) & SC O(N)
function uniqueNumbers(arr) {
  let n = arr.length;
  let map = new Map();

  for (let i = 0; i < n; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);

  for (let [key, value] of map) {
    if (value === 1) return key;
  }

  return -1;
}

/*------------------------------*/
