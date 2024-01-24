//PROBLEM 1

//Find Triplet with maximum sum in an unsorted array

/*
Problem Description

Given an array nums, you need to find the maximum sum of triplet 
(nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. 
If no such triplet exists print 0.
*/

//BRUTE FORCE APPROACH
//TC O(N3) & SC O(1)

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function maxSum(arr) {
  let maxSum = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    //
    for (let j = i + 1; j < n; j++) {
      //
      if (arr[j] > arr[i]) {
        //
        for (let k = j + 1; k < n; k++) {
          //
          if (arr[k] > arr[j])
            maxSum = Math.max(maxSum, arr[i] + arr[j] + arr[k]);
          //
        }
        //
      }
      //
    }
  }

  return maxSum;
}

//BETTER APPROACH

//Keep a mid index and find valid numbers from the left of mid and right of mid

//TC O(N2) & SC O(1)

function maxSumI(arr) {
  let mid = 1;
  let left_el, right_el;

  let maxSum = Number.MIN_SAFE_INTEGER;

  let n = arr.length;

  for (; mid < n - 1; mid++) {
    left_el = -1;
    right_el = -1;
    //
    for (let i = 0; i < mid; i++)
      left_el = arr[i] < arr[mid] ? Math.max(left_el, arr[i]) : left_el;

    //

    for (let i = mid + 1; i < n; i++)
      right_el = arr[i] > arr[mid] ? Math.max(right_el, arr[i]) : right_el;

    //

    if (left_el !== -1 && right_el !== -1)
      maxSum = Math.max(maxSum, left_el + right_el + arr[mid]);
  }

  return maxSum === Number.MIN_SAFE_INTEGER ? 0 : maxSum;
}

////////////////////////////////////////////////////////////////

//PROBLEM 2

// MERGE OVERLAPPING INTERVALS

/*
Problem Description

Given a collection of intervals, merge all overlapping intervals. 
The result should only have mutually exclusive intervals - meaning 
that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of start value.
*/

//Brute fore approach

/**
 *
 * @param {number[][]} arr
 * @returns {number[][]}
 */

function mergeIntervals(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] !== -1 && arr[j][0] <= arr[i][1]) {
        //merge intervals
        arr[i][1] = arr[i][1] >= arr[j][1] ? arr[i][1] : arr[j][1];
        arr[j] = -1;
      }
    }
  }
}

//Better Approach - using a stack
//TC - O(nlogn) and SC - O(n)

function mergeIntervalsI(arr) {
  let n = arr.length;

  let stack = [];
  let top_el, merged_el;

  arr.sort((a, b) => a[0] - b[0]);

  stack.push(arr[0]);

  for (let i = 1; i < n; i++) {
    top_el = stack[stack.length - 1];

    if (top_el[1] >= arr[i][0]) {
      merged_el = top_el;
      merged_el[1] = arr[i][1] >= merged_el[1] ? arr[i][1] : merged_el[1];
      stack.pop();
      stack.push(merged_el);
    } else stack.push(arr[i]);
  }

  return stack;
}

// Best Approach
//TC O(nlogn) & SC O(1)

function mergeIntervalsII(arr) {
  let n = arr.length;

  let i = 0,
    j = 1;

  arr.sort((a, b) => a[0] - b[0]);

  for (; j < n; j++) {
    if (arr[j][0] <= arr[i][1]) {
      arr[i][1] = arr[i][1] > arr[j][1] ? arr[i][1] : arr[j][1];
    } else {
      arr[++i] = arr[j];
    }
  }

  arr.length = i + 1;

  return arr;
}

////////////////////////////////////////////////////////////

//PROBLEM 3

//FIND THE CONTAINER THAT HOLDS THE MOST WATER

/*
Problem Description

You are given an array of N non-negative integers where each represents the height of a line. 
N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. 
Find two lines, which together with the x axis forms a container, such that the container 
holds the most water. Assume the width of lines to be negligible.

Note: You may not slant the container and n is at least 2.
*/

//BRUTE FORCE APPROACH
//TC O(N^2) & SC O(1)

function mostWaterI(arr) {
  let n = arr.length;

  let max_vol = -1;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++)
      max_vol = Math.max(max_vol, Math.min(arr[i], arr[j]) * (j - i));
  }

  return max_vol;
}

//BETTER APPRAOCH
//TC O(N) & SC O(1)

function mostWaterII(arr) {
  let n = arr.length;

  let l = 0,
    r = n - 1;

  let max_vol = -1;

  while (l < r) {
    max_vol = Math.max(max_vol, Math.min(arr[l], arr[r]) * (r - l));

    if (l < r) l++;
    else r--;
  }

  return max_vol;
}

///////////////////////////////////////////////////////////////

//FIND THE MINIMUM NUMBER OF MEETING ROOMS REQUIRED

/*
Problem Description

Given a list of meeting time intervals, you have to find the 
minimum number of rooms required to organize all the meetings.

Sample Input

0 20
5 10
10 15

Sample Output
2

Explanation
One room can host the 1st meeting (0-20) and the other room 
can host both the 2nd meeting (5-10) and 3rd meeting (10-15), 
one after the other.

So, only 2 rooms are required if total for the 3 meetings.
*/

//BRUTE FORCE

//Sorting the intervals based on the starting values and
//take the first element and mark all those instances as marked (let's say with an X)
//that can't be merged at all and then taking the second element if it is not marked and
//marking all the elements with let's say Y that can't be merged at all and so on
//Then add all these values into the set and calculate the size. That will be the answer

//TODO: Some of the test cases are failing. Figure out why
function minMettingRooms(arr) {
  let mark_el = -1,
    arr_el;
  let n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n - 1; i++) {
    if (Array.isArray(arr[i])) {
      arr_el = arr[i];
      mark_el++;
      for (let j = i + 1; j < n; j++) {
        if (arr_el[1] <= arr[j][0]) {
          arr_el = arr[j];
          arr[j] = mark_el;
        }
      }
      arr[i] = mark_el;
    } else continue;
  }
  let set = new Set(arr);

  return set.size;
}

//BETTER APPROACH
//TC O(NlogN) & SC O(N)

function minMettingRoomsI(arr) {
  let times = [];

  arr.forEach((el) => {
    times.push([el[0], 1]);
    times.push([el[1], -1]);
  });

  times.sort((a, b) => {
    if (a[0] < b[0]) return -1;

    if (a[0] > b[0]) return 1;

    if (a[0] === b[0]) return a[1] - b[1];
  });

  let meeting_rooms = 0,
    count = 0;

  for (let i = 0; i < times.length; i++) {
    count += times[i][1];

    meeting_rooms = Math.max(count, meeting_rooms);
  }

  return meeting_rooms;
}

minMettingRoomsI([
  [0, 10],
  [2, 7],
  [6, 9],
  [10, 15],
  [15, 20],
  [18, 24],
]);
