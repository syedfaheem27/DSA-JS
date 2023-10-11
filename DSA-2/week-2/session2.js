//1. Container holding the most water

function containerWaterMax(arr) {
  let maxArea = 0,
    area = 0;
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    area = Math.min(arr[l], arr[r]) * (r - l);
    maxArea = Math.max(area, maxArea);

    //move forward
    if (arr[l] < arr[r]) l++;
    //move backward
    else r--;
  }

  console.log(maxArea);
}

// containerWaterMax([1, 8, 6, 2, 5, 4, 8, 3, 7]);

//2. Find if there exists a sub Array with sum 0
//Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

function isZeroSubArr(n, arr) {
  let map = new Map();
  let prefSum = 0;
  for (let i = 0; i < n; i++) {
    prefSum += arr[i];

    if (prefSum === 0) return true;

    if (map.has(prefSum)) return true;
    else map.set(prefSum, i);
  }

  return false;
}
// console.log(isZeroSubArr(4, [4, 2, -1, 5]));
