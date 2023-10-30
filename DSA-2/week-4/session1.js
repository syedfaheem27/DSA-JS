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

function meetingRooms(arr) {
  let n = arr.length;
  let boolArr = Array.from({ length: n }, () => false);

  let map = new Map();
  let temp;
  let count = 1;
  for (let i = 0; i < n - 1; i++) {
    if (boolArr[i]) continue;

    map.set(count, [arr[i]]);
    boolArr[i] = true;
    temp = arr[i][1];
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] >= temp) {
        if (!boolArr[j]) {
          map.set(count, [...map.get(count), arr[j]]);
          boolArr[j] = true;
        }
      }
    }
    count++;
  }

  console.log(map.size);
}

// meetingRooms([
//   [0, 20],
//   [5, 10],
//   [6, 15],
//   [10, 20],
//   [21, 25],
//   [26, 30],
// ]);
meetingRooms([
  [0, 20],
  [5, 10],
  [20, 15],
]);
