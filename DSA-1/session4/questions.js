// Nth Fibonacci Number

/*
Problem Description

Given an integer n, you have to find the nth fibonacci number. 
The fibonacci sequence is given by 0,1,1,2,3,5,8,... where 0 
and 1 are the 0th and 1st fibonacci numbers respectively and 
every consecutive number is the sum of the previous two numbers in the sequence.
*/

//METHOD - 1 : ITERATIVE APPROACH

//TC-O(n) and SSC-O(1)

/**
 *
 * @param {number} n
 * @returns {number}
 */

function nthFibI(n) {
  if (n === 0) return 0;

  let a = 0,
    b = 1;
  let output = a + b;

  for (let i = 1; i < n; i++) {
    output = a + b;
    a = b;
    b = output;
  }

  return output;
}

// METHOD 2 : RECURSIVE APPROACH

//SC - O(1), auxillary SC-O(n). TC-O(2^n)

/**
 *
 * @param {number} n
 * @returns {number}
 */
function nthFibII(n) {
  if (n === 0 || n === 1) return n;

  return nthFibII(n - 1) + nthFibII(n - 2);
}

///////////////////////////////////////////////////////

// PROBLEM 2

//Nth Tribonacci Number

/*
Problem Description

The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
*/

//METHOD 1 : Iterative approach

//TC - O(N) and SC - O(1)

/**
 *
 * @param {number} n
 * @returns {number}
 */
function nthTribonacciI(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0,
    b = 1,
    c = 1,
    output;

  for (let i = 3; i <= n; i++) {
    output = a + b + c;
    a = b;
    b = c;
    c = output;
  }

  return output;
}

//METHOD 2 : Recursive approach

//TC-O(3^n) and SC - O(1), auxillary - SC-O(N)

/**
 *
 * @param {number} n
 * @returns {number}
 */
function nthTribonacciII(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  return (
    nthTribonacciII(n - 1) + nthTribonacciII(n - 2) + nthTribonacciII(n - 3)
  );
}

/////////////////////////////////////////////

//PROBLEM 3

//Factorial

// METHOD 1 : Iterative approach
//TC - O(N) and SC-O(1)

/**
 *
 * @param {number} n
 * @returns {number}
 */
function findFactorialI(n) {
  //guard clause
  if (n < 0) return;

  if (n === 0) return 1;

  let res = 1;
  for (let i = n; i > 0; i--) res *= i;

  return res;
}

//METHOD 2 : Recursive approach

// TC - O(N) and SC - O(1), auxillary SC - O(N)

/**
 *
 * @param {number} n
 * @returns {number}
 */

function findFactorialII(n) {
  //guard clause
  if (n < 0) return;

  if (n === 0) return 1;

  return n * findFactorialII(n - 1);
}

///////////////////////////////////////

// PROBLEM 3

// Addition of Matrices

/*
Problem Description

Given two n*m matrices, add the two and return the resultant matrix
*/

/**
 *
 * @param {number[][]} matrix1
 * @param {number[][]} matrix2
 * @returns {number[][]}
 */

function addMatrices(matrix1, matrix2) {
  let row_len = matrix1.length,
    col_len = matrix1[0].length;

  let res_matrix = [];

  for (let i = 0; i < row_len; i++) {
    res_matrix.push([]);

    for (let j = 0; j < col_len; j++)
      res_matrix[i].push(matrix1[i][j] + matrix2[i][j]);
  }

  return res_matrix;
}

addMatrices(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [1, 2],
    [3, 4],
  ]
);

/////////////////////////////////////////////////

// PROBLEM 4

// Count Words in a string

/*
Problem Description

You are given a string of words present in a book. 
Find out the count of words present in that book.
*/

// METHOD 1: Brute Force approach

//TC - O(N) and SC - O(1)

/**
 *
 * @param {string} s
 * @returns {number}
 */
function countWords(s) {
  //   return s.split(/\s+/).length;

  let count = 0;

  for (let i = 0; i < s.length; i++)
    if ((s[i - 1] === undefined || s[i - 1] === " ") && s[i] !== " ") count++;

  return count;
}
