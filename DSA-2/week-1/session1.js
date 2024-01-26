//2. Find kth element in a matrix in spiral order

function findK(a, n, m, k) {
  //code here
  let count = 0;
  let rowEnd = n - 1,
    colEnd = m - 1;
  let rowStart = 0,
    colStart = 0;
  let result;
  while (count < n * m) {
    for (let i = colStart; i <= colEnd; i++) {
      count++;
      if (count === k) return a[rowStart][i];
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      count++;
      if (count === k) return a[i][colEnd];
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      count++;
      if (count === k) return a[rowEnd][i];
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      count++;
      if (count === k) return a[i][colStart];
    }
    colStart++;
  }
}

// console.log(
//   findK(
//     [
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//     ],
//     3,
//     4,
//     8
//   )
// );

//------------------------------

//2. Given a matrix (n*m) - print that in a spiral order
function printMatrixInSpiral(matrix, n, m) {
  let rowStart = 0,
    colStart = 0;
  let rowEnd = n - 1,
    colEnd = m - 1;
  let count = 1;

  let resArr = [];

  while (count <= n * m) {
    for (let i = colStart; i <= colEnd; i++) {
      resArr.push(matrix[rowStart][i]);
      count++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      resArr.push(matrix[i][colEnd]);
      count++;
    }
    colEnd--;

    if (count > m * n) break;

    for (let i = colEnd; i >= colStart; i--) {
      resArr.push(matrix[rowEnd][i]);
      count++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      resArr.push(matrix[i][colStart]);
      count++;
    }
    colStart++;
  }
  console.log(resArr);
  return resArr;
}
// printMatrixInSpiral(
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ],
//   3,
//   4
// );

//--------------------------------------
//3. Generate a matrix n*n using a recursive approach
function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => []);
  let rowStart = 0,
    colStart = 0;
  let rowEnd = n - 1,
    colEnd = n - 1;
  let count = 1;
  generateSpiral(rowStart, colStart, rowEnd, colEnd, matrix, count, n);

  console.log(matrix);
  return;
}
function generateSpiral(rowStart, colStart, rowEnd, colEnd, matrix, count, n) {
  if (rowStart > rowEnd || colStart > colEnd) return;

  //fill the spiral
  for (let i = colStart; i <= colEnd; i++) {
    matrix[rowStart][i] = count;
    count++;
  }
  rowStart++;

  for (let i = rowStart; i <= rowEnd; i++) {
    matrix[i][colEnd] = count;
    count++;
  }
  colEnd--;

  if (count > n * n) return;

  for (let i = colEnd; i >= colStart; i--) {
    matrix[rowEnd][i] = count;
    count++;
  }
  rowEnd--;

  for (let i = rowEnd; i >= rowStart; i--) {
    matrix[i][colStart] = count;
    count++;
  }
  colStart++;

  generateSpiral(rowStart, colStart, rowEnd, colEnd, matrix, count, n);

  return;
}

// generateMatrix(3);

//TC-O(n*n)
//SC-O(n*n);

//-------------------------

//4. Maximum Profit in buying and selling stocks optimally
function maxProfit(arr) {
  let buyingPrice = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > buyingPrice) {
      maxProfit += arr[i] - buyingPrice;
    }

    buyingPrice = arr[i];
  }

  console.log(maxProfit);
}

// maxProfit([5, 4, 3, 2, 1]);

//-----------------------------------

//5. Increment number represented as an array
function incrementArr(nums, num) {
  let sum;
  for (let i = nums.length - 1; i >= 0; i--) {
    sum = nums[i] + num;
    nums[i] = sum % 10;
    num = Math.floor(sum / 10);

    if (num === 0) return nums;
  }

  return num > 0 ? [num, ...nums] : nums;
}

// console.log(incrementArr([8, 9, 9], 1));

//--------------------------------

//6.Rotate matrix clockwise by 90 degrees

function rotateMatrixClock(matrix, n) {
  let temp;
  //Transposing
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //Reversing each row
  for (let i = 0; i < n; i++) {
    reverseArr(matrix[i]);
  }
  console.log(matrix);
}

function reverseArr(arr) {
  let l = 0,
    r = arr.length - 1;
  let temp;
  while (l < r) {
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}

// rotateMatrixClock(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   3
// );

//---------------------------
//8. Set rows and columns of a matrix to zero
function setZeroes(matrix) {
  let rowSet = new Set();
  let colSet = new Set();
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  for (let val of rowSet) {
    for (let i = 0; i < n; i++) matrix[val][i] = 0;
  }

  for (let val of colSet) {
    for (let i = 0; i < m; i++) matrix[i][val] = 0;
  }

  console.log(matrix);
}

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
