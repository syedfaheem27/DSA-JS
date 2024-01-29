//3. Reverse the order of words in a string

function reverseWords(str) {
  let tempStr = "";
  let resStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      tempStr += str[i];

      if (!str[i + 1] || str[i + 1] === " ") {
        resStr = str[i + 1] === " " ? " " + tempStr + resStr : tempStr + resStr;
        tempStr = "";
      }
    }
  }

  console.log(resStr);
}

// reverseWords("Hello world!");

//-------------------------------------------------------------

//4. Reverse each word in a string
// Input: S = "i.like.this.program.very.much";
// Output: i.ekil.siht.margorp.yrev.hcum;

//some-test cases are failing
//my......name.....is...faheem - ym.....eman....si..meehaf

function reverseWordsI(s) {
  //code here
  let tempStr = "";
  let resStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ".") {
      tempStr += s[i];
      if (!s[i - 1] || s[i - 1] === ".") {
        resStr = s[i - 1] === "." ? "." + tempStr + resStr : tempStr + resStr;
        tempStr = "";
      }
    }
  }
  console.log(resStr);
}

reverseWords("i.like.this.program.very.much");
// reverseWords("my.name.is");

//------------------------------------

//5. First missing positive integer
// TC-O(n) and SC-O(n)

function findFirstMissingPositiveInt(nums) {
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++)
    if (nums[i] > 0) numsMap.set(nums[i], 1);

  let maxNum = 0;
  for (let [key, _] of numsMap) maxNum = Math.max(maxNum, key);

  for (let i = 1; i <= maxNum; i++) {
    if (!numsMap.has(i)) return i;
  }

  return maxNum + 1;
}

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
