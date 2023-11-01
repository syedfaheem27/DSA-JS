/*
Merge Overlapping Intervals
Input - [[1,3],[2,6],[3,4],[8,10],[15,18]]
Output - [[1,6],[8,10],[15,18]]
Print output in increasing order of the first element of the 
interval
*/

function mergeintervals(n, intervals) {
  let mergeIdx = 0;
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] <= intervals[mergeIdx][1]) {
      //merging
      if (intervals[i][1] > intervals[mergeIdx][1])
        intervals[mergeIdx][1] = intervals[i][1];
    } else {
      mergeIdx++;
      intervals[mergeIdx][0] = intervals[i][0];
      intervals[mergeIdx][1] = intervals[i][1];
    }
  }

  return intervals.slice(0, mergeIdx + 1);
}

// console.log(
//   mergeintervals(5, [
//     [1, 3],
//     [2, 6],
//     [3, 4],
//     [8, 10],
//     [15, 18],
//   ])
// );

//-----------------------------
/*
Minimum number of meeting rooms required
Input - [[0,20],[5,10],[6,15],[10,20],[21,25],[26,30]]
Output - 3, 1st room will have meetings - [[0,20],[21,25],[26,30]]
2nd room - [[5,10],[10,20]]
3rd room - [[6,15]]
*/

function minMeetingRooms(arr) {
  let n = arr.length;
  let timeArr = [];
  for (let i = 0; i < n; i++) {
    timeArr.push([arr[i][0], 1]);
    timeArr.push([arr[i][1], -1]);
  }

  timeArr.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] === b[0]) return a[1] - b[1];
  });
  // timeArr.sort((a, b) => a[0] - b[0]);
  console.log(timeArr);

  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < timeArr.length; i++) {
    count += timeArr[i][1];
    maxCount = Math.max(maxCount, count);
  }

  console.log(maxCount);
}

// minMeetingRooms([
//   [0, 20],
//   [5, 10],
//   [6, 15],
//   [10, 20],
//   [21, 25],
//   [26, 30],
// ]);
// minMeetingRooms([
//   [20, 30],
//   [0, 20],
// ]);

//Note : We need to sort the timeArr in the above way - can't use sort((a,b)=>a[0]-b[0])
//We need to make sure that we close the meeting first before starting a new one if both
//have the same start time and end time

//-------------------------------------------------
/*
Sort Array with string elements
The digits in each element can go upto 10^6
Input-['30','1','124','3','54644']
Output -['1','3','30','124','54644']
*/

function sortStringEls(n, nums) {
  nums.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  console.log(nums);
}

// sortStringEls(5, ["30", "1", "124", "3", "54644"]);
// sortStringEls(5, [
//   "30",
//   "1",
//   "124",
//   "3",
//   "54644",
//   "544",
//   "55555555555555555555555",
//   "6544439281723636363",
//   "65734238478972389723897423987",
// ]);

//----------------------------
/*
Minimum Difference between two elements
Input - 1 2 4
Output - 2-1 = 1;
*/

function minDiff(n, arr) {
  arr.sort((a, b) => a - b);
  let min = arr[n - 1] - arr[0];

  for (let i = 1; i < n; i++) min = Math.min(min, arr[i] - arr[i - 1]);
}

//----------------------------
/*

 Minimum Absolute Difference

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
*/

function minDiffII(arr) {
  arr.sort((a, b) => a - b);

  let min = arr[arr.length - 1] - arr[0];

  for (let i = 1; i < arr.length; i++) min = Math.min(min, arr[i] - arr[i - 1]);

  // let resArr=[];
  // for(let i=1;i<arr.length;i++)
  //     if(arr[i]-arr[i-1]===min)
  //         resArr.push([arr[i-1],arr[i]])

  // return resArr;
  let idx = 0;
  for (let i = 1; i < arr.length; i++)
    if (arr[i] - arr[i - 1] === min) arr[idx++] = [arr[i - 1], arr[i]];

  return arr.slice(0, idx);
}

// console.log(minDiffII([4, 2, 1, 3]));

//The best solution in terms of complexity

function min(arr) {
  arr = arr.sort((a, b) => a - b);
  let minDistanceSoFar = arr[arr.length - 1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    const currentDistance = arr[i] - arr[i - 1];
    if (currentDistance < minDistanceSoFar) {
      minDistanceSoFar = currentDistance;
      result = [[arr[i - 1], arr[i]]];
    } else if (currentDistance === minDistanceSoFar) {
      result.push([arr[i - 1], arr[i]]);
    }
  }

  console.log(result);
}

min([4, 2, 1, 3]);
