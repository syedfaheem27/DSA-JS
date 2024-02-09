//4.  Sort in wave form
/*
Problem Description
Given an unsorted array, sort it in wave form. 
That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
*/

//Method-1 TC-O(nlogn) and SC-O(n)
function waveSort(n, arr) {
  let resArr = [];
  let mid = Math.floor(n / 2);
  let l = 0,
    r = mid;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      resArr.push(arr[l++]);
    } else {
      resArr.push(arr[r++]);
    }
  }
  console.log(resArr);
}

// waveSort(6, [1, 5, 1, 1, 6, 4]);

//Method-2 TC-O(n) and SC-O(1)  Here we don't need to sort the array
function waveSort2(n, arr) {
  let temp;
  for (let i = 1; i < n - 1; i += 2) {
    if (arr[i - 1] > arr[i]) {
      temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }

    if (i < n - 1 && arr[i + 1] > arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  console.log(arr);
}
// waveSort2(6, [1, 5, 1, 1, 6, 4]);
