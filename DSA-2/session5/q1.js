//PROBLEM 1

//WAVE SORT

/*
PROBLEM DESCRIPTION

Given an unsorted array, sort it in wave form. That is, reorder it 
such that nums[0] <= nums[1] >= nums[2] <= nums[3]...


Sample Input
1 5 1 1 6 4

Sample Output 
1 4 1 5 1 6

Explanation 
nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].
*/

//BRUTE FORCE
//TC O(nlogn) & SC O(1)

function waveSortI(arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < n - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

//Efficient approach
//TC O(n) & SC O(1)

function waveSortII(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i += 2) {
    let temp;

    if (arr[i] < arr[i - 1]) {
      temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }

    if (i < n - 1 && arr[i] < arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

/*--------------------------*/
