/*
Problem Description
You are given two strings, a main string P, and a pattern S. 
You have to find the starting indices of the anagrams of P in S.


Anagrams are permutations of a string. For P="abc”, 
its anagrams are abc,acb,bca,bac,cba,cab.


Note that indexing starts at 0.

Sample Input 1
aaba ab

Sample Output 1
2

1 2

Explanation 1
The anagrams of pattern "ab" are “ab” and “ba”. 
These are present at indices 1 and 2 of the input string “aaba”.
*/

//TC-O(nmlog(m)) and SC-O(n+m)
function anagramPatternI(s, p) {
  let n = s.length;

  let front = n - 1,
    back = 0;
  let resArr = [];
  let s_ = s.split("").sort().join("");
  let temp;
  while (front < p.length) {
    temp = p
      .slice(back, front + 1)
      .split("")
      .sort()
      .join("");

    if (temp === s_) {
      resArr.push(back);
      front++;
      back++;
      continue;
    }

    front++;
    back++;
  }

  console.log(resArr);
}

// anagramPattern("abcd", "bacdgabcda");

/////////////////////////////////////

//EFFICIENT APPROACH FOR THE SAME QUESTION
//TC-O(26n) or O(n)
function anagramPatternII(s, p) {
  let k = s.length;
  let patternMap = new Map();
  let varMap = new Map();
  let resArr = [];

  for (let i = 0; i < k; i++)
    patternMap.set(s[i], patternMap.get(s[i]) + 1 || 1);

  for (let i = 0; i < k - 1; i++) varMap.set(p[i], varMap.get(p[i]) + 1 || 1);

  for (let i = k - 1; i < p.length; i++) {
    varMap.set(p[i], varMap.get(p[i]) + 1 || 1);

    if (areEqualMaps(varMap, patternMap)) resArr.push(i - k + 1);

    let count = varMap.get(p[i - k + 1]);

    if (count === 1) varMap.delete(p[i - k + 1]);
    else varMap.set(p[i], varMap.get(p[i - k + 1]) - 1);
  }

  console.log(resArr);
  return resArr;
}

function areEqualMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) if (value !== map2.get(key)) return false;

  return true;
}

// anagramPatternII("abcd", "bacdgabcda");

//////////////////////////////////////

/*
Problem Description
You are given a string consisting of lower and upper case characters.
You need to find the length of the longest palindrome which you can create by using the characters from the string.
Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.

Input format
There are 2 lines of input

First line contains the size of the string

Second line contains the string.

Output format
return the length of the longest possible palindrome

Sample Input 1
4 bbde

Sample Output 1
3

Explanation
The possible 3 size palindrome strings are :- beb and bdb
*/

function longestPalindrome(n, str) {
  let maxLen = 0;
  let isOdd = false;
  let freqMap = new Map();

  for (let i = 0; i < n; i++) freqMap.set(str[i], freqMap.get(str[i]) + 1 || 1);

  for (let [_, value] of freqMap) {
    if (value % 2 === 0) maxLen += value;
    else {
      isOdd = true;
      maxLen += value - 1;
    }
  }

  return isOdd ? maxLen + 1 : maxLen;
}

// console.log(longestPalindrome(4, "bbde"));

////////////////////////////////////////////////////

/*
Problem Description
You are given a list of words present in a book. 
Your younger brother is really curious to know the 
K most frequent words in the book, you have to find them.


Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower
alphabetical order should come first.


Sample Input - car bus car

Sample Output - car bus

*/

function frequentWords(words, k) {
  let n = words.length;

  let freqMap = new Map();
  for (let i = 0; i < n; i++)
    freqMap.set(words[i], freqMap.get(words[i]) + 1 || 1);

  let resArr = [];

  for (let [key, value] of freqMap)
    resArr.push({
      name: key,
      count: value,
    });

  return resArr
    .sort((a, b) => {
      if (a.count < b.count) return 1;
      else if (a.count > b.count) return -1;
      else {
        return a.name < b.name ? -1 : 1;
      }
    })
    .map((el) => el.name)
    .slice(0, k);
}

console.log(frequentWords(["car", "bus", "car"], 2));
///////////////////////////////////////////////////////////
