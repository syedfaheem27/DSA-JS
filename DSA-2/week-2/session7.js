// Merge Sort
//Using array slices
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let l = 0,
    r = arr.length - 1;

  mid = Math.floor((l + r) / 2);
  let leftArr = arr.slice(0, mid + 1);
  let rightArr = arr.slice(mid + 1);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(arr1, arr2) {
  let resArr = [];
  let n = arr1.length;
  let m = arr2.length;

  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      resArr.push(arr1[i]);
      i++;
    } else {
      resArr.push(arr2[j]);
      j++;
    }
  }

  while (i < n) resArr.push(arr1[i++]);
  while (j < m) resArr.push(arr2[j++]);

  return resArr;
}
// console.log(mergeSort([1, -1, 3, 2, 4, 6, 0]));

//Merge sort
//Using indices

function mergeSortII(arr, left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);

  mergeSortII(arr, left, mid);
  mergeSortII(arr, mid + 1, right);

  mergeII(arr, left, mid, right);
  return arr;
}

function mergeII(arr, left, mid, right) {
  let resArr = [];
  let i = left,
    j = mid + 1;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) resArr.push(arr[i++]);
    else resArr.push(arr[j++]);
  }

  while (i <= mid) resArr.push(arr[i++]);
  while (j <= right) resArr.push(arr[j++]);

  for (let k = left; k <= right; k++) arr[k] = resArr[k - left];
}

console.log(mergeSortII([1, -1, 3, 2, 4, 6, 0], 0, 6));
