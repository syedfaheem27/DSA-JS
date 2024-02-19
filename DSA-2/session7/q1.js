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
