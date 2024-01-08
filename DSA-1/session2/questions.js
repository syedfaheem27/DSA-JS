//Problem - 1
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

function cyclicRotationII(n, arr, k) {
  k = k % n;
  let temp;

  for (let i = 0; i < k; i++) {
    temp = arr.pop();
    arr.unshift(temp);
  }

  return arr;
}

//Best Approach - TC - O(N), SC - O(1)

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

function cyclicRotationIII(n, arr, k) {
  k = k % n;

  //reverse first n-k-1 elements
  reverse(arr, 0, n - k - 1);

  //reverse last k elements
  reverse(arr, n - k, n - 1);

  //reverse the whole array
  reverse(arr, 0, n - 1);

  console.log(arr);
}

cyclicRotationIII(5, [1, 2, 3, 4, 5], 2);
