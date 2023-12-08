const Stack = require("./stack");

//PROBLEM-1
//REVERSE A STRING USING A STACK
//Faheem - meehaf

function reverseStr(str) {
  const stringStack = new Stack();

  for (let i = 0; i < str.length; i++) stringStack.push(str[i]);
  console.log(stringStack);

  let output = "";
  for (let i = 0; i < str.length; i++) output += stringStack.pop();

  console.log(output);
}

reverseStr("faheem");

///////////////////////////////////////////////////
