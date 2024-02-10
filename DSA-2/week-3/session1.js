// Quick sort - picking always the last element as an index

function quickSort(arr) {
  let l = 0,
    r = arr.length - 1;
  quick(arr, l, r);
  return arr;
}

function quick(arr, l, r) {
  if (l >= r) return;

  const pivotIdx = findPivot(arr, l, r);

  quick(arr, l, pivotIdx - 1);
  quick(arr, pivotIdx + 1, r);
}

function findPivot(arr, l, r) {
  const pivot = arr[r];

  let leftIdx = l;
  let temp;

  for (let i = l; i < r; i++) {
    if (arr[i] < pivot) {
      //swap
      temp = arr[i];
      arr[i] = arr[leftIdx];
      arr[leftIdx] = temp;
      leftIdx++;
    }
  }

  //final swap
  temp = arr[leftIdx];
  arr[leftIdx] = arr[r];
  arr[r] = temp;

  return leftIdx;
}

// console.log(quickSort([0, 10, -1, 2, 1, 6, 3]));

//------------------------------------------------------
//Using in built js sort function and it's comparartor callback

function sortArrayAbsolute(n, nums) {
  nums.sort((a, b) => {
    let _a = Math.abs(a);
    let _b = Math.abs(b);
    return _a - _b;
  });

  return nums;
}
