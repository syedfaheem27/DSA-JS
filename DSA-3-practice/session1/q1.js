//PROBLEM 1
//FIND THE NEXT SMALLER ELEMENT IN AN ARRAY

/*
PROBLEM DESCRIPTION

Given an array A having N elements, the task is to find the next smaller element(NGE) for each element 
of the array in order of their appearance in the array. If no such element exists, output null. 
This should be achieved with a time complexity of O(n).
*/

//Brute force - pretty easy - run two loops

//Efficient appraoch - TC O(n) & SC O(n)
function nextSmallerEl(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    while (stack.length !== 0 && arr[stack[stack.length - 1]] > el) {
      arr[stack.pop()] = el;
    }

    stack.push(i);
  }

  while (stack.length !== 0) {
    arr[stack.pop()] = null;
  }

  return arr;
}
