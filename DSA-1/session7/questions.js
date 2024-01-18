// PROBELM 1

//Find the first missing positive number

// BRUTE FORCE METHOD : Run a loop from 1 till the number that
//is missing in the array - TC - O(N^2) and SC - O(1)

// Better Approach - use a map to store the elements of the array
// It reduces the TC and brings it to O(N) and SC O(N)

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

function firstMissingPosI(arr) {
  let n = arr.length;

  if (n === 0) return 1;

  let map = new Map();

  for (let i = 0; i < n; i++) map.set(arr[i], true);

  for (let i = 1; ; i++) if (!map.has(i)) return i;
}

//BEST APPROACH
//TC O(N) & SC O(1)

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function firstMissingPosII(arr) {
  let n = arr.length;

  //Converting all 0's and numbers greater than n to a negative number - i picked -1
  //The reason i am converting 0's as well is becasue 0 won't be a valid answer
  for (let i = 0; i < n; i++) if (arr[i] === 0 || arr[i] > n) arr[i] = -1;

  //Now, the valid numbers left in the array are from [1,n] and we can make use of those
  //to actually mark the places visited by utilising the modulo operator

  //for booleans and numbers < 0 , just go to the next iteration
  for (let i = 0; i < n; i++) {
    if (arr[i] === true || arr[i] < 0) continue;

    let idx = arr[i] % n;
    if (arr[idx] < 0 || typeof arr[idx] === "boolean") arr[idx] = true;
    else arr[idx] += n;
  }

  let missing_num = n + 1;

  //Now, any element that's going to be less than or equal to n
  //will be obviously at an unvisited index => that the element equal to that
  //index was never present in the original array
  for (let i = 0; i < n; i++)
    if (arr[i] <= n && typeof arr[i] !== "boolean") {
      missing_num =
        i === 0 ? Math.min(missing_num, n) : Math.min(missing_num, i);
    }

  return missing_num;
}

// console.log(
//   firstMissingPosII([
//     12, 18, 7, -6, 2, 13, 17, -7, -2, 9, 16, -10, 5, -20, -17, 11, -1, -8, -16,
//     3, -13, -11, -4, 10, 19, -5, 6, 1, 14, 4, -18, 0, 8,
//   ])
// );

// console.log(firstMissingPosII([2, 2, 4]));

//////////////////////////////////////////////////////////////////////////

//PROBLEM 2

//Find if string permutation can form a palindrome

/*
PROBLEM DESCRIPTION

Given a string S which consists of both lowercase and uppercase alphabetical letters, 
you have to write a function to check if string S is a permutation of a palindrome or 
not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.
*/

//BRUTE FORCE APPROACH - Calculate all the permutations of the string and check if each of them
// is a palindrome or not

//Efficient method : Use a map to calculate the frequency of each character and if the number of
// characters with the frequency 1 exceed 1, then it's not a palindrome

/**
 *
 * @param {string} str
 * @returns {boolean}
 */

function isPalindrome(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++)
    map.set(str[i], map.get(str[i]) + 1 || 1);

  let uniq_occurrences = 0;

  for (let [_, val] of map) {
    if (val % 2 !== 0) uniq_occurrences++;

    if (uniq_occurrences > 1) return false;
  }

  return true;
}
// console.log(isPalindrome("hello"));
