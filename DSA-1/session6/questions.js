//PROBLEM 1

//PRINT MATRIX IN SPIRAL ORDER

//Given a natural number n, print an n*n matrix in spiral order
//in a clockwise direction

//ITERATIVE APPROACH

// TC - O(n^2) and SC - O(1)

/**
 *
 * @param {number} n
 * @returns {number[]}
 */

function printSpiral(n) {
  let row_top = 0,
    col_left = 0,
    row_bottom = n - 1,
    col_right = n - 1;

  let count = 0;
  let res_matrix = Array.from({ length: n }, () => []);

  while (count < n * n) {
    //Populate top row
    for (let i = col_left; i <= col_right; i++)
      res_matrix[row_top][i] = ++count;

    //top_row populated, move to the next row
    row_top++;
    console.log(count);

    //Populate right column
    for (let i = row_top; i <= row_bottom; i++)
      res_matrix[i][col_right] = ++count;

    //right_col populated, move back to the next column
    col_right--;

    //Populate the bottom row
    for (let i = col_right; i >= col_left; i--)
      res_matrix[row_bottom][i] = ++count;

    // row_bottom populated, move up to the next row
    row_bottom--;

    //Populate the left column
    for (let i = row_bottom; i >= row_top; i--)
      res_matrix[i][col_left] = ++count;

    col_left++;
  }

  return res_matrix;
}
//TODO:
// RECURSIVE APPROACH

///////////////////////////////////////////////////////

// PROBLEM 2

//Increment number as an array

// Given an array and a number, return an array which has elements as
// the sum of input array elements and the number

//BRUTE FORCE - can convert the array into a number and perform an addition and
//convert the number back to an array and return it. This implementation may break
//in case of large numbers

//TC - O(N) and SC - O(N)
/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns
 */

function incrementArray(arr, num) {
  let carry = num;
  let sum;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (carry === 0) break;

    sum = arr[i] + carry;
    arr[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }

  return carry === 0 ? arr : [carry].concat(arr);
}

//TODO: Do it in a TC of O(N) and SC of O(1) in case of a linked list

//////////////////////////////////////////////////////////

//PROBLEM 3

// Set Matrix columns and rows to zero

/*
PROBLEM DESCRIPTION

Given an m x n matrix, if an element is 0, set its entire row and column to 0.

Do it in-place, that is, modify the same matrix. Do not create a new one.
*/

//BRUTE FORCE - The approach would be to keep an auxillary matrix
// with all elements equal to 1.
//Traverse the input matrix and when you encounter a 0,
// loop through the respective row and column of the auxillary matrix
// and set it's corresponding elements to zero.

//At the end multiply the corresponding elements of the auxillary matrix and the input matrix and
//return the result

//TC - O(N*M(N+M)) and SC - O(N*M)

//TC - O(N*M) and SC - O(N+M)

function setMatrixElsZero(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let row_set = new Set();
  let col_set = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row_set.add(i);
        col_set.add(j);
      }
    }
  }

  for (let row_idx of row_set)
    for (let i = 0; i < n; i++) matrix[row_idx][i] = 0;

  //Return because all the rows have been turned to zero
  //which makes all the col elements also zero
  if (row_set.size === m) return matrix;

  for (let col_idx of col_set)
    for (let i = 0; i < m; i++) matrix[i][col_idx] = 0;

  return matrix;
}
