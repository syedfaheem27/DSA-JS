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

//TODO:
