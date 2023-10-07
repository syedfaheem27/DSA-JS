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
