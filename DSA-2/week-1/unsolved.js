//Reverse order of words in a string
/*
Input:
S = "i.like.this.program.very.much"
Output: 
i.ekil.siht.margorp.yrev.hcum
*/

function reverseWords(s) {
  let tempStr = "";
  let resStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ".") {
      tempStr += s[i];
      if (s[i - 1] === "." || !s[i - 1]) {
        resStr = tempStr + resStr;
        tempStr = "";
      }
    } else resStr = s[i] + resStr;
  }
  console.log(resStr);
  return resStr;
}

// reverseWords("qhm.ynfxi....xg.kn.u.ff.vr.jrpg..n.ytw.syq");

//---------------------------------------
/*
Given two sorted arrays arr1[] and arr2[] of sizes n and m 
in non-decreasing order. Merge them in sorted order without
 using any extra space. Modify arr1 so that it contains the 
 first N elements and modify arr2 so that it contains the 
 last M elements.
 Input: 
n = 4, arr1[] = [1 3 5 7] 
m = 5, arr2[] = [0 2 6 8 9]
Output: 
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
Explanation:
After merging the two 
non-decreasing arrays, we get, 
0 1 2 3 5 6 7 8 9.
*/
//TC-O(NM) and SC-O(1)
function mergeTwoArrays(arr1, arr2, n, m) {
  let i = 0;

  while (i < n) {
    if (arr1[i] > arr2[0]) {
      [arr1[i], arr2[0]] = [arr2[0], arr1[i]];
    }

    for (let j = 0; j < m - 1; j++) {
      if (arr2[j] > arr2[j + 1]) {
        [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];
      } else break;
    }
    i++;
  }

  console.log(arr1);
  console.log(arr2);
}

// mergeTwoArrays([1, 3, 5, 7], [0, 2, 6, 8, 9], 4, 5);
// mergeTwoArrays([0, 1, 2], [0, 1, 2, 3], 3, 4);

//--------------------------------------
/*
Merge two sorted arrays
Tc-(n+m)log(n+m) and SC - O(1)
*/
function mergetTwoSortedArrays2(a, b, n, m) {
  let i = 0,
    j = 0,
    k = n - 1;
  let temp;

  while (i < k && j < m) {
    if (a[i] < b[j]) i++;
    else {
      temp = a[k];
      a[k] = b[j];
      b[j] = temp;
      k--;
      j++;
    }
  }

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  console.log(a);
  console.log(b);
}
// mergetTwoSortedArrays2([1, 3, 5, 7], [0, 2, 6, 8, 9], 4, 5);

//--------------------
//Find first missing positive integer - another approach without a map
function firstPositive(arr) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      resArr[arr[i] - 1] = arr[i];
    }
  }

  for (let i = 0; i < resArr.length; i++) {
    if (!resArr[i]) return i + 1;
  }

  return resArr.length + 1;
}

// console.log(firstPositive([1, 2, 3, 4, 5, 7]));
