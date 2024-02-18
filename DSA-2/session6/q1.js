//PROBLEM 1

//Move All Zeroes to the right while maintaining the order of
//non-zero elements

//Brute force - TC O(N) & SC O(1)
//Iterate over the array and add non-zero elements to
//the array and then insert 0 at the remaining places

//Another approach TC O(N) & SC O(1)
function moveZeroes(arr) {
  let n = arr.length;

  let i = 0;

  while (i < n) {
    while (arr[i] !== 0) i++;

    let j = i + 1;
    while (arr[j] === 0 && j < n) j++;

    //make a swap
    if (j < n) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    i++;
  }
  return arr;
}

/*-------------------------------------------*/

//PROBLEM 2

//FIND ALL THE UNIQUE TRIPLETS THAT SUM TO 0

function uniqueTriplet(arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  let i = 0;

  let res_arr = [];

  while (i < n) {
    let num_1 = arr[i];
    let sum = -1 * num_1;

    let j = i + 1,
      k = n - 1;
    while (j < k) {
      if (arr[j] + arr[k] > sum) {
        k--;
      } else if (arr[j] + arr[k] < sum) {
        j++;
      } else {
        res_arr.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;
        j++;
        k--;
      }
    }

    //need to do this at last as there can be
    //triplets where the two elements can be identical
    //and if we put this at the start we would skip those.
    //Putting it at the end ensures that we have covered all such cases
    while (arr[i] === arr[i + 1]) i++;

    i++;
  }

  return res_arr;
}

/*------------------------------------*/

//PROBLEM 3

//FIND THE LONGEST SUB ARRAY WITH SUM K

/*
Given an array containing N integers and an integer K, Your task is to find 
the length of the longest subarray and the array itself with the sum of the 
elements equal to the given value K.
*/

//Brute force - use two loops for the same TC O(N2) & SC O(1)

function longestSubArr(arr, k) {
  let n = arr.length;

  let prefix_sum = 0;
  let max_len = -1;

  let start_idx = 0;

  let map = new Map();
  for (let i = 0; i < n; i++) {
    prefix_sum += arr[i];

    if (prefix_sum === k) max_len = i + 1;

    if (!map.has(prefix_sum)) map.set(prefix_sum, i);

    let temp = prefix_sum - k;

    if (map.has(temp)) {
      start_idx = map.get(temp) + 1;
      max_len = Math.max(i - map.get(temp), max_len);
    }
  }

  return {
    maxLen: max_len,
    resArr: arr.slice(start_idx, start_idx + max_len),
  };
}

const { maxLen, resArr } = longestSubArr(
  [10, 5, 2, 7, 1, 9, -5, 5, 5, 5, 5],
  15
);
