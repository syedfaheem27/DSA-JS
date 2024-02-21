//PROBLEM 1

//SORT BASED ON ABSOLUTE VALUES
//USE THE COMPARATOR FUNCTION

//can do it using any sorting technique

function absSort(arr) {
  return [...arr].sort((a, b) => Math.abs(a) - Math.abs(b));
}

/*-------------------------------*/

//PROBLEM 2

//MERGE OVERLAPPING INTERVALS

/*
An interval is a range, with a starting value and ending value. 
[1, 3] indicates elements 1, 2, 3 and so on.

Given a collection of intervals, merge all overlapping intervals. 
The result should only have mutually exclusive intervals - meaning 
that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of 
start value.
*/

//TC O(N) & SC O(1) if we only consider the extrab space required.
//Here it is said not to modify the original array, so we need to use
// a new array and as such are not using extra space

function mergeIntervals(arr) {
  let n = arr.length;
  let res_arr = arr.map((el) => [...el]);

  res_arr.sort((a, b) => a[0] - b[0]);

  let idx = 0;
  for (let i = 1; i < n; i++) {
    if (res_arr[i][0] <= res_arr[idx][1]) {
      res_arr[idx][1] =
        res_arr[idx][1] > res_arr[i][1] ? res_arr[idx][1] : res_arr[i][1];
    } else {
      idx++;
      res_arr[idx] = res_arr[i];
    }
  }

  res_arr.length = idx + 1;
  return res_arr;
}

/*----------------------------*/

//PROBLEM 3

//MINIMUM MEETING ROOMS REQUIRED

// function minRooms(arr) {
//   let count = 0;
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     let meeting = arr[i];
//     if (meeting === 0) continue;

//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] === 0) continue;

//       //check if the intervals are merging or not
//       //if no, mark the interval as 0

//       if (meeting[0] < arr[j][0] && meeting[1] <= arr[j][1]) {
//         arr[j] = 0;
//       }
//     }
//     count++;
//   }

//   return count;
// }

// minRooms([
//   [0, 20],
//   [5, 10],
//   [10, 15],
// ]);

function minRooms(arr) {
  let start_times = [],
    end_times = [];

  for (let [start, end] of arr) {
    start_times.push([start, 1]);
    end_times.push([end, -1]);
  }

  let new_arr = start_times.concat(end_times);

  new_arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let max_count = 0,
    count = 0;
  for (let [time, num] of new_arr) {
    count += num;
    max_count = Math.max(max_count, count);
  }

  return max_count;
}

/*---------------------------*/

//PROBLEM 4

//Sort the array of string elements

/*
Problem Description

Given an array, where integers are written as strings, 
sort the array and return it, with the elements still being strings.

Note that the number of digits in each element may go up to 10^6.
*/

//Use a comparator

//TC O(NlogN) & SC O(1)

function sortStringEls(arr) {
  return arr.sort((a, b) => {
    if (a.length < b.length) return -1;

    if (a.length > b.length) return 1;

    if (a < b) return -1;

    if (a > b) return 1;

    return 0;
  });
}

/*----------------------------*/

//PROBLEM 5

//FIND THE MINIMUM DIFFERENCE BETWEEN TWO ARRAY ELEMENTS

//Brute force - O(n2) & SC O(1)
//Use two loops

//APPROACH 1
function minDIff(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  let min = arr[n - 1] - arr[0];
  for (let i = 1; i < n; i++) min = Math.min(min, arr[i] - arr[i - 1]);

  return min;
}

//APPROACH 2
function minDiffi(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  arr.sort((a, b) => {
    if (a > b) {
      min = Math.min(min, a - b);
      return 1;
    }

    if (a < b) {
      min = Math.min(min, b - a);
      return -1;
    }

    if (a === b) {
      min = Math.min(min, 0);
      return 0;
    }
  });
}
