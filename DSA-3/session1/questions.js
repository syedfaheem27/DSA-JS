/*
Problem Description

Given an array A having N elements, the task is to find the next greater 
element(NGE) for each element of the array in order of their appearance in the array. 
If no such element exists, output -1. This should be achieved with a time complexity of O(n).

Sample Input 1
1 3 2 4

Sample Output 1
3 4 4 -1

*/

const { StackI } = require("../stack/stack");

function nextGreaterElI(n, arr) {
  let stack = new StackI();

  let curr_val;
  let res_arr = [];

  for (let i = 0; i < n; i++) {
    curr_val = arr[i];

    while (!stack.isEmpty() && curr_val > arr[stack.peek()]) {
      res_arr[stack.pop()] = curr_val;
    }
    stack.push(i);
  }

  let len = stack.size();

  for (let i = 0; i < len; i++) res_arr[stack.pop()] = -1;

  console.log(res_arr);
}

// nextGreaterElI(4, [1, 3, 2, 4]);

//method-2
function nextGreaterElII(n, arr) {
  let stack = [];

  let curr_val;
  let resArr = [];

  for (let i = 0; i < n; i++) {
    curr_val = arr[i];

    while (stack.length !== 0 && arr[stack[stack.length - 1]] < curr_val) {
      resArr[stack.pop()] = curr_val;
    }
    stack.push(i);
  }

  let len = stack.length;

  for (let i = 0; i < len; i++) {
    resArr[stack.pop()] = -1;
  }

  return resArr;
}

////////////////////////////////////////////////////////

/*
Problem Description
Given 2 strings S and T containing lowercase and '#' characters. 
You have to check whether these 2 strings are same or not when 
typed into an editor('#' being the backspace character).


Note: Backspacing an empty string remains an empty string only.

For eg. a#bc means bc, and a##bcd means bcd.
*/

function backspaceStringCompare(s, t) {
  let stackI = new StackI(),
    stackII = new StackI();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      if (!stackI.isEmpty()) stackI.pop();
    } else {
      stackI.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      if (!stackII.isEmpty()) stackII.pop();
    } else {
      stackII.push(t[i]);
    }
  }

  if (stackI.size() !== stackII.size()) return false;

  let len = stackI.size();
  for (let i = 0; i < len; i++)
    if (stackI.pop() !== stackII.pop()) return false;

  return true;
}

// console.log(
//   backspaceStringCompare(
//     "hhbjrq#####wtdk##buovnlseliqk##uhzudjlakgruuuwgugddz#huqoj####uamx#gpbxapplzcgn###ljwd###",
//     "hwtlur###buovnlseliuhzudjlakgruuuwgugdddbfq####hkt##uamgpbxapplzxo##lg#"
//   )
// );

console.log(backspaceStringCompare("as#sddff#", "aa#sddf"));
