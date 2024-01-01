//Leap year

/**
 *
 * @param {number} year
 * @returns {boolean}
 */
function leapYear(year) {
  if (year % 4 !== 0) return false;

  if (year % 100 === 0 && year % 400 !== 0) return false;

  return true;
}

////////////////////////////////

/*
PROBLEM DESCRIPTION

Given an array of n elements and an integer x,find the 
index where x is present in the array. If there are multiple 
occurrences, find the leftmost one. If x is not present, return -1.
*/

function findElement(n, arr, x) {
  //method-1
  //   return arr.findIndex((el) => el === x);

  //method-2
  for (let i = 0; i < n; i++) if (arr[i] === x) return i;

  return -1;
}

//////////////////////////////////

//Check Magic Square

/*

PROBLEM DESCRIPTION
Given a matrix of dimensions n x n having elements 1 to n*n 
distinct elements, check whether the matrix is magic square 
or not.

Magic square is a square that has the same sum along all rows, 
columns and diagonals.

*/

function magicSquare(n, matrix) {
  let pref_sum = (n * (n + 1)) / 2;

  let diagonal_1 = 0,
    diagonal_2 = 0;

  for (let i = 0; i < n; i++) {
    diagonal_1 = matrix[i][i];
    diagonal_2 = matrix[i][n - 1 - i];
  }

  if (diagonal_1 !== diagonal_2) return false;

  let row_sum, col_sum;
  for (let i = 0; i < n; i++) {
    row_sum = 0;
    col_sum = 0;
    for (let j = 0; j < n; j++) {
      row_sum = matrix[i][j];
      col_sum = matrix[j][i];
    }
    if (row_sum !== diagonal_1 || col_sum !== diagonal_1) return false;
  }

  return true;
}
