const MinStack = require("../stack/minStack");

/*
Problem Description
Given an array of N elements and an integer B, 
you have to find the count of distinct numbers in all windows of size B.

You have to return an array of size N-B+1 where i'th element in the array 
is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. 
If B > N, return an empty array.


Sample Input 1
6 3

1 2 1 3 4 3

Sample Output 1
2 3 3 2

Explanation
First range will be [1,2,1] , in which number of distinct elements are 2

Second range will be [2,1,3], in which number of distinct elements are 3

Third range will be [1,3,4], in which number of distinct elements are 3

Fourth range will be [3,4,3], in which number of distinct elements are 2
*/

function countDistinctElements(n, b, arr) {
  let map = new Map();
  let resArr = [];

  if (b > n) return resArr;

  let front = 0,
    back = 0;

  while (front < b) {
    map.set(arr[front], map.get(arr[front]) + 1 || 1);
    front++;
  }

  console.log(map);

  resArr.push(map.size);

  while (front < n) {
    map.set(arr[front], map.get(arr[front]) + 1 || 1);

    if (map.get(arr[back]) === 1) map.delete(arr[back]);
    else map.set(arr[back], map.get(arr[back]) - 1);

    resArr.push(map.size);

    front++;
    back++;
  }

  console.log(resArr);
  console.log(map);
}

// countDistinctElements(5, 6, [1, 2, 1, 3, 4]);

///////////////////////////////////////////////
/*
Problem Description

You are given an array of integers and the array can have repeating 
elements. Find out the occurence of the first integer which only occurs
once in the entire array. If no unique element, return -1

Sample Input 1
4

9 6 7 6

Sample Output 1
9

Explanation: 9 and 7 are elements that occur only once in the array
but since 9 is the first one in the array, we return 9
*/

function firstUniqueInteger(n, arr) {
  let map = new Map();
  for (let i = 0; i < n; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);

  for (let [key, value] of map) if (value === 1) return key;

  return -1;
}

// console.log(firstUniqueInteger(4, [9, 6, 7, 6]));

///////////////////////////////////////////////////////////

//TESTING OUT THE MIN STACK

// const minStack = new MinStack();

// minStack.push(8).push(10).push(6).push(3).push(7);

// // console.log(minStack);

// minStack.pop();
// minStack.pop();

// console.log(minStack);
// console.log(minStack.minElement);

////////////////////////////////////////////////////////////
