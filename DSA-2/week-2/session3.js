/*
Problem Description
Given an integer array, find the largest subarray with sum 0.
 If there is more than one subarray with the largest length, 
 return the subarray with the lowest starting index.

If there is no such sub-array print -1.
*/

function largestZeroSubArr(n, arr) {
  let prefMap = new Map();
  let prefSum = 0;
  let start = -1,
    end = -1;
  let currLen,
    maxLen = 0;
  for (let i = 0; i < n; i++) {
    prefSum += arr[i];
    if (prefSum === 0) {
      currLen = i + 1;
      maxLen = Math.max(maxLen, currLen);
      start = 0;
      end = i;
      continue;
    }

    if (prefMap.has(prefSum)) {
      currLen = i - prefMap.get(prefSum);
      if (currLen > maxLen) {
        maxLen = currLen;
        start = i - maxLen + 1;
        end = i;

        //if we had sub arrays with equal length of sum 0 and wanted index of the latest one, then currLen>=maxLen =>condition
      }
    } else prefMap.set(prefSum, i);
  }

  if (start === -1 || end === -1) return [-1];
  let resArr = [];
  for (let i = start; i <= end; i++) resArr.push(arr[i]);

  console.log(resArr);
}
// largestZeroSubArr(8, [2, 3, 1, -4, 1, 6, 2, -8]);

//-----------------------------------------------------

/*
Problem Description
Given a string, find the length of the longest substring that 
contains at most K distinct characters.

Note:
Uppercase and Lowercase characters should be considered as
 different characters.

There can be numbers and special characters as well.
*/

function kDistinctChars(s, k) {
  let map = new Map();
  let left = 0,
    right = 0;
  let maxLen = 0;
  while (right < s.length) {
    map.set(s[right], map.get(s[right]) + 1 || 1);

    //window contract
    while (map.size > k) {
      if (map.get(s[left]) > 1) {
        map.set(s[left], map.get(s[left]) - 1);
      } else {
        map.delete(s[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    //expand window
    right++;
  }

  console.log(maxLen);
}
// kDistinctChars("abacdddefg", 3);

//-----------------------------
