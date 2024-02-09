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
