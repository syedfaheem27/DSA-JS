//PROBLEM 1

//FIND ALL ANAGRAMS IN A STRING

/*
PROBLEM DESCRIPTION

You are given two strings, a main string S, and a pattern P. 
You have to find the starting indices of the anagrams of P in S.

Sample Input
aaba ab

Sample Output
1 2

Explanation
The anagrams of pattern "ab" are “ab” and “ba”. 
These are present at indices 1 and 2 of the input string “aaba”.
*/

//BRUTE FORCE

//TC O(mnlog(n)) & SC O(n)

function totalAnagrams(s, p) {
  let s_ = s.split("").sort().join("");

  let back = 0,
    front = s.length - 1;

  let res_arr = [];

  while (front < p.length) {
    let str = p.slice(back, front + 1);

    if (str.split("").sort().join("") === s_)
      res_arr.push({
        sub_str: str,
        index: back,
      });
    front++;
    back++;
  }

  return res_arr;
}

//Efficient Approach

//Using a map

//TC O(26n) ~ O(n) & SC O(n)
function totalAnagramsI(s, p) {
  let anagram_map = new Map();
  let var_map = new Map();

  for (let i = 0; i < s.length; i++) {
    anagram_map.set(s[i], anagram_map.get(s[i]) + 1 || 1);
    var_map.set(p[i], var_map.get(p[i]) + 1 || 1);
  }

  let res_arr = [];

  if (areEqualMaps(var_map, anagram_map))
    res_arr.push({
      sub_arr: p.slice(0, s.length),
      index: 0,
    });

  for (let i = s.length; i < p.length; i++) {
    let back = i - s.length;
    if (var_map.get(p[back]) === 1) var_map.delete(p[back]);
    else var_map.set(p[back], var_map.get(p[back]) - 1);

    var_map.set(p[i], var_map.get(p[i]) + 1 || 1);

    if (areEqualMaps(var_map, anagram_map))
      res_arr.push({
        sub_arr: p.slice(back + 1, i + 1),
        index: back + 1,
      });
  }

  return res_arr;
}

function areEqualMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    if (!map2.has(key)) return false;

    if (val !== map2.get(key)) return false;
  }

  return true;
}

/*--------------------------------------*/

//PROBLEM 2

//FIND THE LONGEST PALINDROME FROM A STRING

/*
PROBLEM DESCRIPTION

You are given a string consisting of lower and upper case characters.
You need to find the length of the longest palindrome which you can create by using the characters from the string.
Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.
*/

//brute force - to check all the possible substrings - TC O(N2)

//Efficient Approach Using Maps

//TC O(N) & SC O(N)
function longestPalindrome(str) {
  let n = str.length;
  let map = new Map();

  for (let i = 0; i < n; i++) map.set(str[i], map.get(str[i]) + 1 || 1);

  let max_len = 0;
  let isUnique = false;

  for (let [_, val] of map) {
    if (val % 2 === 0) {
      max_len += val;
    } else {
      isUnique = true;
      max_len += val - 1;
    }
  }

  return isUnique ? max_len + 1 : max_len;
}

/*-------------------------------*/

//TODO: Find the longest palindromic substring in a string - leetcode

//PROBLEM 3

//TOP K MOST FREQUENT WORDS

/*
Problem Description

You are given a list of words present in a book. 
Your younger brother is really curious to know the 
K most frequent words in the book, you have to find them.

Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower
alphabetical order should come first.

Sample Input
car bus car
2

Sample Output
car 
bus
*/

//Efficient appraoch using hashing

//TC O(nlog(n)) & SC O(n)
function topK(words, k) {
  let map = new Map();
  for (let i = 0; i < words.length; i++)
    map.set(words[i], map.get(words[i]) + 1 || 1);

  let res_arr = Array.from(map.entries());

  res_arr.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    else {
      if (a[0] <= b[0]) return -1;
      else return 1;
    }
  });

  let new_arr = res_arr.map((el) => el[0]);
  new_arr.length = k;
  return new_arr;
}

/*------------------------------_*/
