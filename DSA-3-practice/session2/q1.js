//PROBLEM 1

//FIND THE LENGTH OF THE LONGEST VALID PARENTHESIS SUBSTRING

//BRUTE FORCE

//TODO: find out why 4 test cases are failing on crio's platform
//However all cases are passing on leetcode
//TC O(n2) & SC O(1)
function validParenI(str) {
  let n = str.length;

  let max_len = -1,
    len = 0;

  for (let i = 0; i < n - 1; i++) {
    if (str[i] === ")") continue;

    let mod = 1; //( :1
    len = mod;

    for (let j = i + 1; j < n; j++) {
      let add = str[j] === ")" ? -1 : 1;
      len += add;
      if (len < 0) break;
      if (len === 0) max_len = Math.max(j - i + 1, max_len);
    }
  }

  return max_len;
}

/*-----------------------------------*/

//Efficient approach
//Take note of the latest invalid parenthesis index and make use of it
//to find the maximum length
//TC O(n) & SC O(1)
function validParenII(str) {
  let n = str.length;
  let stack = [];
  let max_len = 0;

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      stack.push(i);
      continue;
    }

    let el = str[stack[stack.length - 1]];

    if (`${el}${str[i]}` === "()") {
      stack.pop();
      //checking the first invalid index which will always be at the top of the stack
      max_len =
        stack[stack.length - 1] !== undefined
          ? Math.max(max_len, i - stack[stack.length - 1])
          : Math.max(max_len, i + 1);
    } else stack.push(i);
  }

  return max_len;
}

/*-----------------------*/
