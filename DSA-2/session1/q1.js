// PROBLEM 1

//GENERATE A SQUARE MATRIX IN SPIRAL ORDER

//APPROACH 1: ITEARTIVE

//TC O(n2) & SC O(1) including only the additional memory used.

/**
 *
 * @param {number} n
 * @returns {number[][]}
 */

function generateMatrix(n) {
  let num = 1;

  let res_matrix = Array.from({ length: n }, () => []);
  let top_row = 0,
    bottom_row = n - 1,
    left_col = 0,
    right_col = n - 1;

  while (num <= n * n) {
    //Populate the top row of the matrix
    for (let i = left_col; i <= right_col; i++) res_matrix[top_row][i] = num++;
    top_row++;

    //populate the right column
    for (let i = top_row; i <= bottom_row; i++)
      res_matrix[i][right_col] = num++;
    right_col--;

    //populate the bottom row in reverse
    for (let i = right_col; i >= left_col; i--)
      res_matrix[bottom_row][i] = num++;
    bottom_row--;

    //populate the left column in reverse
    for (let i = bottom_row; i >= top_row; i--) res_matrix[i][left_col] = num++;
    left_col++;
  }

  return res_matrix;
}

//APPROACH 2: RECURSIVE APPROACH

//TC - O(n) & SC O(1) excluding auxillary space and including only the additional memory used

/**
 *
 * @typedef {Object} array_ops
 * @property {number[][]} res_arr
 * @property {number} count
 * @param {number} top_row
 * @param {number} right_col
 * @param {number} bottom_row
 * @param {number} left_col
 * @return {undefined}
 */
function populateMatrix(array_ops, top_row, right_col, bottom_row, left_col) {
  if (top_row > bottom_row || left_col > right_col) return;

  let { res_arr, count } = array_ops;

  //Populate the top row of the current spiral
  for (let i = left_col; i <= right_col; i++) res_arr[top_row][i] = ++count;
  top_row++;

  //Populate the right column of the current spiral
  for (let i = top_row; i <= bottom_row; i++) res_arr[i][right_col] = ++count;
  right_col--;

  //Populate the bottom row of the current spiral in reverse
  for (let i = right_col; i >= left_col; i--) res_arr[bottom_row][i] = ++count;
  bottom_row--;

  //Populate the left clumn of the current spiral in reverse
  for (let i = bottom_row; i >= top_row; i--) res_arr[i][left_col] = ++count;
  left_col++;

  array_ops.count = count;
  populateMatrix(array_ops, top_row, right_col, bottom_row, left_col);
}

/**
 *
 * @param {number} n
 * @returns {number[][]}
 */

function generateMatrixI(n) {
  let res_arr = Array.from({ length: n }, () => []);
  let left_col = 0,
    right_col = n - 1,
    top_row = 0,
    bottom_row = n - 1;

  let array_ops = {
    res_arr,
    count: 0,
  };

  populateMatrix(array_ops, top_row, right_col, bottom_row, left_col);
  return res_arr;
}

////////////////////////////////////////////////////

//PROBLEM 2

// Find kth element in a matrix in spiral order

//Iterative Approach - a better one over the traditional iterative
//reduces the number of iterations

function findK(a, n, m, k) {
  if (k > n * m) return "Enter a valid position";

  let top_row = 0,
    bottom_row = n - 1,
    left_col = 0,
    right_col = m - 1;

  while (top_row <= bottom_row && left_col <= right_col) {
    //Searching the top row
    if (k <= m)
      for (let i = left_col; i <= right_col; i++) {
        k--;
        if (k === 0) return a[top_row][i];
      }
    else k -= right_col - left_col + 1;

    top_row++;

    //Search the right column
    if (k <= n)
      for (let i = top_row; i <= bottom_row; i++) {
        k--;
        if (k === 0) return a[i][right_col];
      }
    else k -= bottom_row - top_row + 1;

    right_col--;

    //Search the bottom row
    if (k <= m)
      for (let i = right_col; i >= left_col; i--) {
        k--;
        if (k === 0) return a[bottom_row][i];
      }
    else k -= right_col - left_col + 1;

    bottom_row--;

    //Search the left column
    if (k <= n)
      for (let i = bottom_row; i >= top_row; i--) {
        k--;
        if (k === 0) return a[i][left_col];
      }
    else k -= bottom_row - top_row + 1;

    left_col++;
  }
}

//////////////////////////////////////////////////////////////////
