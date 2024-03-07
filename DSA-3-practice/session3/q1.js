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
