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

//PROBLEM 2

//FIND THE NEXT GREATER ELEMENT
/*
PROBLEM DESCRIPTION

Problem Description
Given a positive integer n, find the smallest integer which has exactly the same digits 
existing in the integer n and is greater in value than n. If no such positive integer 
exists, return -1.

Input format
A 32 bit integer N

Output format
A single number

*/

//TC O(n) & SC O(1)

function nextGreaterElement(num) {
  let num_arr = num.toString().split("");
  let n = num_arr.length;

  let swap_idx;
  for (let i = n - 1; i > 0; i--)
    if (+num_arr[i] > +num_arr[i - 1]) {
      swap_idx = i - 1;
      break;
    }

  if (!swap_idx) return -1;

  let break_pt = swap_idx + 1;

  //Now we need to check if there is a number that is closest to
  //num_arr[swap_idx] and also greater than it
  //Finding a break point ensures that we are always finding the next greater
  //number

  for (let i = break_pt; i < n - 1; i++) {
    if (num_arr[i] >= num_arr[swap_idx]) {
      break_pt = num_arr[break_pt] > num_arr[i] ? i : break_pt;
    }
  }

  //make a swap
  let temp = num_arr[break_pt];
  num_arr[break_pt] = num_arr[swap_idx];
  num_arr[swap_idx] = temp;

  const return_arr = num_arr
    .slice(0, swap_idx + 1)
    .concat(num_arr.slice(swap_idx + 1).reverse());

  return +return_arr.join("");
}
