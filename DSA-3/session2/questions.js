const { StackI } = require("../stack/stack");

//PROBLEM DESCRIPTION
//CHECK IF THE GIVEN STRING IS A VALID PARENTESIS

function validParenthesis(str) {
  let stack = new StackI();

  let temp;

  for (let i = 0; i < str.length; i++) {
    temp = str[i];

    if (`${stack.peek()}${temp}` === "()") {
      stack.pop();
    } else {
      stack.push(temp);
    }
  }

  return stack.isEmpty() ? true : false;
}

// console.log(validParenthesis("(())())"));

////////////////////////////////////////
/*

Problem Description

Given a string S containing just the characters '(' and ')', 
find the total number of well formed parenthesis

*/
function validParenthesisI(str) {
  let output = 0;

  let stack = new StackI();
  let temp;
  for (let i = 0; i < str.length; i++) {
    temp = str[i];

    if (!stack.isEmpty()) {
      if (`${stack.peek()}${temp}` === "()") {
        stack.pop();
        output += 2;
      } else {
        stack.push(temp);
      }
    } else stack.push(temp);
  }

  return output / 2;
}
// console.log(validParenthesisI("()(()(())"));

////////////////////////////////////////

//PROBLEM DESCRIPTION
//FIND THE LENGTH OF THE LONGEST VALID PARENTHESIS SUBSTRING BUT A CONTINOUS ONE
// - ((())) AND ()((())) 6 IS THE ANSWER FOR BOTH

function validParenthesisII(str) {
  let stack = new StackI();
  let temp,
    maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    temp = str[i];

    if (!stack.isEmpty()) {
      if (`${str[stack.peek()]}${temp}` === "()") {
        maxLen = Math.max(maxLen, i - stack.peek() + 1);
        stack.pop();
      } else {
        stack.push(i);
      }
    } else stack.push(i);
  }

  return maxLen;
}

// console.log(validParenthesisII("()(()(())"));

////////////////////////////////////////////

//PROBLEM DESCRIPTION
//FIND THE LENGTH OF THE LONGEST VALID SUBSTRING
//NOT NECESSARY TO FIND A CONTINOUS ONE
//EXAMPLE - ()(()(()) - 6(ANS) AND IF YOU WANTED A CONTINOUS ONE - 4(ANS)

//we need to add -1 here to ensure that we are getting the length of the
//longest valid substring and that substring may not be a continous one
//for a continous one - pushing -1 in the stack isn't necessary

function validParenthesisIII(str) {
  let stack = new StackI();
  stack.push(-1);

  let temp,
    maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    temp = str?.[i] ?? ")"; //to handle things when index = -1

    if (`${str[stack.peek()]}${temp}` === "()") {
      stack.pop();
      maxLen = Math.max(maxLen, i - stack.peek());
    } else stack.push(i);
  }

  console.log(maxLen);
}

validParenthesisIII("()(()(())");
