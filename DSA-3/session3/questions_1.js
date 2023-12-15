/*
PROBLEM DESCRIPTION

Given an array, print the next smaller element for every element. 
The next smaller element for an element x is the first smaller 
element on the right side of x in the array. Elements for which 
no next smaller element exists, consider it as -1.

Sample Input 1
5

8 2 5 10 4

Sample Output 1
2 -1 4 4 -1

*/

function nextSmallerEl(n, A) {
  let stack = [];
  let ans = Array.from({ length: n }, () => -1);

  for (let i = 0; i < n; i++) {
    if (stack.length !== 0) {
      while (stack.length !== 0 && A[stack[stack.length - 1]] > A[i]) {
        ans[stack[stack.length - 1]] = A[i];
        stack.pop();
      }

      stack.push(i);
    } else stack.push(i);
  }

  console.log(ans);
}

nextSmallerEl(5, [8, 2, 5, 10, 4]);

////////////////////////////////////

/*
Problem Description
You are given a string s, consisting of lowercase letters. 
You need to make duplicate removal on s until you no longer can.


A duplicate removal consists of choosing two adjacent equal characters
 and removing both of them.Return the final string after all such 
 duplicate removals have been made.

 Sample Input 1
abbaca

Sample Output 1
ca

Explanation
Initial String: abbaca

After removing "bb" : aaca

After removing "aa" : ca (There are no more duplicates)
*/

function removeAdjacentDuplicates(s) {
  let stack = [];
  let resStr = "";

  for (let i = 0; i < s.length; i++) {
    if (stack.length !== 0) {
      let el = stack[stack.length - 1];
      if (el === s[i]) stack.pop();
      else stack.push(s[i]);
    } else stack.push(s[i]);
  }

  for (let i = 0; i < stack.length; i++) resStr += stack[i];

  console.log(resStr);
  return resStr;
}

removeAdjacentDuplicates("abbaca");

//////////////////////////////

/*
PROBLEM DESCRIPTION

You are given two strings and an integer k,find whether 
the given two strings are similar or not. Two given 
strings s1 and s2 are similar if for each character 
the difference between the frequency of that character 
in s1 and s2 is at most k. If the given strings are similar 
then print Yes otherwise print No. (Note : Both strings s1 
and s2 are in lowercase )

Sample Input 1

5 3 2
aaabc
abc

12 3 3
xyzzzbbbbbxx
bxy

Sample Output 1
Yes

No

EXPLANATION

In the first test case, the difference between each and every 
characters frequency in both the strings is at most 2. 
Hence, they are similar strings.

In the second test case, the difference between the frequency
 of letter b in first string and the frequency of letter b in
  second string is 4. Hence, they are not similar strings.


*/

function similarString(n, s1, m, s2, k) {
  let freqMap = new Map();

  for (let i = 0; i < n; i++) {
    if (!freqMap.has(s1[i])) freqMap.set(s1[i], 0);

    freqMap.set(s1[i], freqMap.get(s1[i]) + 1);
  }

  for (let i = 0; i < m; i++) {
    if (!freqMap.has(s2[i])) freqMap.set(s2[i], 0);

    freqMap.set(s2[i], freqMap.get(s2[i]) - 1);
  }

  for (let [_, value] of freqMap) if (Math.abs(value) > k) return "No";

  return "Yes";
}

console.log(similarString(12, "xyzzzbbbbbxx", 3, "bxy", 3));
