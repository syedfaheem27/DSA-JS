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

//-------------------------------------------------------------

// Quick sort based on picking a random pivot everytime
function quickSortII(arr) {
  quickII(arr, 0, arr.length - 1);
  return arr;
}

function quickII(arr, l, r) {
  if (l >= r) return;

  /*
  We can either choose a random pivot inside the 
  function findPivot or we can always select the 
  last element as pivot but swapping the last element 
  everytime before invoking the find pivot function.
  */

  const randomPivotIdx = createRandomPivot(arr.length);

  //swap the right most element with the random pivot element
  [arr[randomPivotIdx], arr[r]] = [arr[r], arr[randomPivotIdx]];

  const pivotIdx = findPivotII(arr, l, r);

  quickII(arr, l, pivotIdx - 1);
  quickII(arr, pivotIdx + 1, r);
}
function createRandomPivot(n) {
  return Math.floor(Math.random() * n);
}

function findPivotII(arr, l, r) {
  let temp;
  let leftIdx = l;
  let pivotEl = arr[r];

  for (let i = l; i < r; i++) {
    if (arr[i] < pivotEl) {
      temp = arr[i];
      arr[i] = arr[leftIdx];
      arr[leftIdx] = temp;
      leftIdx++;
    }
  }

  //last swap to bring the pivot el to its correct position
  temp = arr[r];
  arr[r] = arr[leftIdx];
  arr[leftIdx] = temp;

  return leftIdx;
}

// console.log(quickSortII([0, 10, -1, 2, 1, 6, 3]));

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
console.log(sortArrayAbsolute(5, [2, -5, 1, -2, 4]));
