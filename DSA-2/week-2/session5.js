/*
Problem Description
Given a positive integer n, find the smallest integer 
which has exactly the same digits existing in the integer n 
and is greater in value than n. If no such positive integer 
exists, return -1.
*/

//TC-O(N2) and SC-O(N)
function nextGreaterNum(n) {
  let numsArr = n.toString().split("");
  let idx = -1;
  let temp;
  let resArr;

  for (let i = numsArr.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (+numsArr[i] > +numsArr[j]) {
        idx = j;
        break;
      }
    }
    if (idx !== -1) {
      //swap
      temp = numsArr[i];
      numsArr[i] = numsArr[idx];
      numsArr[idx] = temp;
      break;
    }
  }

  if (idx === -1) return -1;

  resArr = numsArr
    .slice(0, idx + 1)
    .concat(numsArr.slice(idx + 1).sort((a, b) => +a - +b));

  return resArr;
}

// console.log(nextGreaterNum(4321));

//------------Same question with an optimised version------------------
//TC - O(N);

function nextGreaterNum2(n) {
  if (n <= 11) return -1;

  //Find breakpoint
  let numsArr = n.toString().split("");
  let swapIdx = -1;
  for (let i = numsArr.length - 1; i > 0; i--) {
    if (numsArr[i] > numsArr[i - 1]) {
      swapIdx = i - 1;
      break;
    }
  }

  if (swapIdx === -1) return -1;

  let minNumIdx = swapIdx + 1;

  for (let i = minNumIdx; i < numsArr.length; i++) {
    if (numsArr[i] > numsArr[swapIdx]) {
      //If we don't put an equal to sign here, we would get an error
      //equal to sign is necessary to ensure that we always get the min. idx even in case
      // the numbers are equal
      minNumIdx = numsArr[minNumIdx] >= numsArr[i] ? i : minNumIdx;
    }
  }

  //swap
  let temp = numsArr[minNumIdx];
  numsArr[minNumIdx] = numsArr[swapIdx];
  numsArr[swapIdx] = temp;

  return numsArr
    .slice(0, swapIdx + 1)
    .concat(numsArr.slice(swapIdx + 1).reverse());
}
// console.log(nextGreaterNum2(781899621));

//------------------------------------------------------------------------------------

/*
Problem Description
A string S is given consisting of lowercase alphabetical characters only.
 You need to return a sorted string using Count Sort.
 */

function countSort(n, str) {
  let resStr = str.split("");
  let map = new Map();

  for (let i = 0; i < n; i++) map.set(str[i], map.get(str[i]) + 1 || 1);

  let count = 0;
  let char;
  for (let i = 97; i <= 122; i++) {
    char = String.fromCharCode(i);
    if (map.has(char)) {
      for (let i = map.get(char); i > 0; i--) {
        resStr[count++] = char;
      }
    }
  }

  console.log(resStr.join(""));
}
// countSort(10, "abcdeedcba");

//-------------------------------------------

//Move all zeroes to the end of an array while
//maintaining the relative order of the elements

function moveZeroesToEnd(arr) {
  let n = arr.length;

  let nonZeroIdx = 0;

  for (let i = 0; i < n; i++) if (arr[i] !== 0) arr[nonZeroIdx++] = arr[i];

  while (nonZeroIdx < n) arr[nonZeroIdx++] = 0;

  console.log(arr);
}
// moveZeroesToEnd([0, 0, 3, 1, 4]);
