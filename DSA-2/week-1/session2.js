//1. Rotate matrix by 90 degree anti clockwise

// function rotateAnti(matrix) {
//   transpose(matrix, matrix.length);
//   columnMirror(matrix, matrix.length);
//   console.log(matrix);
// }

// function transpose(matrix, n) {
//   let temp;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
// }

// function columnMirror(matrix, n) {
//   let temp;
//   let top = 0,
//     bottom = n - 1;

//   while (top <= bottom) {
//     for (let i = 0; i < n; i++) {
//       temp = matrix[top][i];
//       matrix[top][i] = matrix[bottom][i];
//       matrix[bottom][i] = temp;
//     }
//     top++;
//     bottom--;
//   }
// }

// rotateAnti([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

//-----------------------------------------------------------

//2. Check if the permutation of a string can form a palindrome

// function checkPalindrome(str) {
//   let map = new Map();
//   for (let i = 0; i < str.length; i++)
//     map.set(str[i], map.get(str[i]) + 1 || 1);

//   let uniq = 0;
//   for (let [_, value] of map) {
//     if (value % 2 !== 0) uniq++;
//     if (uniq >= 2) return false;
//   }

//   return true;
// }

// console.log(checkPalindrome("Aab"));

//-----------------------------------------------------------

//3. Reverse the order of words in a string

// function reverseWords(str) {
//   let tempStr = "";
//   let resStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       tempStr += str[i];

//       if (!str[i + 1] || str[i + 1] === " ") {
//         resStr = str[i + 1] === " " ? " " + tempStr + resStr : tempStr + resStr;
//         tempStr = "";
//       }
//     }
//   }

//   console.log(resStr);
// }

// reverseWords("Hello world!");

//-------------------------------------------------------------

//4. Reverse each word in a string
// Input: S = "i.like.this.program.very.much";
// Output: i.ekil.siht.margorp.yrev.hcum;

//some-test cases are failing
//my......name.....is...faheem - ym.....eman....si..meehaf

// function reverseWords(s) {
//   //code here
//   let tempStr = "";
//   let resStr = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== ".") {
//       tempStr += s[i];
//       if (!s[i - 1] || s[i - 1] === ".") {
//         resStr = s[i - 1] === "." ? "." + tempStr + resStr : tempStr + resStr;
//         tempStr = "";
//       }
//     }
//   }
//   console.log(resStr);
// }

reverseWords("i.like.this.program.very.much");
// reverseWords("my.name.is");

//------------------------------------

//5. First missing positive integer
// TC-O(n) and SC-O(n)

// function findFirstMissingPositiveInt(nums) {
//   let numsMap = new Map();
//   for (let i = 0; i < nums.length; i++)
//     if (nums[i] > 0) numsMap.set(nums[i], 1);

//   let maxNum = 0;
//   for (let [key, _] of numsMap) maxNum = Math.max(maxNum, key);

//   for (let i = 1; i <= maxNum; i++) {
//     if (!numsMap.has(i)) return i;
//   }

//   return maxNum + 1;
// }

// console.log(findFirstMissingPositiveInt([1, 2, 3, 4, 5, 10]));

//-----------------------------------------

// 6.Check if one string is an anagram of the other
function validAnagrams(s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let i = 0; i < s.length; i++) map.set(s[i], map.get(s[i]) + 1 || 1);

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i]) || map.get(t[i]) <= 0) return false;
    else {
      map.set(t[i], map.get(t[i]) - 1);
    }
  }

  return true;
}

console.log(validAnagrams("rat", "car"));
