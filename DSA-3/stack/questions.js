const { StackI, StackII } = require("./stack");
const { StackQueueI, StackQueueII } = require("./stackQueue");

//PROBLEM-1
//REVERSE A STRING USING A STACK
//Faheem - meehaf

function reverseStr(str) {
  const stringStack = new StackI();

  for (let i = 0; i < str.length; i++) stringStack.push(str[i]);
  console.log(stringStack);

  let output = "";
  for (let i = 0; i < str.length; i++) output += stringStack.pop();

  console.log(output);
}

// reverseStr("faheem");

///////////////////////////////////////////////////

//PROBLEM-2
//NOT EFFICIENT - SORT A STACK

function sortStack(inputStack) {
  console.log(inputStack);
  let temp;
  let tempStack = new StackI();

  while (inputStack.size() !== 0) {
    temp = inputStack.pop();

    while (tempStack.size() !== 0 && tempStack.peek() < temp) {
      inputStack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  console.log(tempStack);
}

const inp = new StackI();

//Not returning the object itself from the push() in Stcak class
// inp.push(2);
// inp.push(-1);
// inp.push(-3);
// inp.push(2);
// inp.push(4);
// inp.push(10);

//If i return the object itself from the push method inside the Stack class,
//i will be able to chain push() calls
inp.push(2).push(-1).push(-3).push(2).push(4).push(10);

// sortStack(inp);

////////////////////////////////////////////////////
//IMPLEMENT TWO STACKS USING THE SAME ARRAY
//Add a stack of a given size
const twoStacks = new StackII(12);

// twoStacks.push1(2);
// twoStacks.push1(3);
// twoStacks.push1(4);
// twoStacks.push1(5);

// twoStacks.push2(6);
// twoStacks.push2(7);
// twoStacks.push2(8);
// twoStacks.push2(9);

// twoStacks.push2(6);
// twoStacks.push2(7);
// twoStacks.push2(8);
// twoStacks.push2(9);

// console.log(twoStacks.peek1());
// console.log(twoStacks.peek2());

// console.log(twoStacks.isEmpty1());
// console.log(twoStacks.isEmpty2());

// console.log(twoStacks);

//////////////////////////////////////////////
//IMPLEMENTING STACK USING TWO QUEUES

//ADD HEAVY
const stackQI = new StackQueueI();

// stackQI.push(4).push(5).push(6).push(8).push(9);

// console.log(stackQI.size());

// console.log(stackQI.pop());
// console.log(stackQI.size());

// console.log(stackQI.pop());
// console.log(stackQI.pop());
// console.log(stackQI.pop());
// console.log(stackQI.size());

// console.log(stackQI);

//REMOVE HEAVY
const stackQII = new StackQueueII();
// stackQII.push(4).push(5).push(6).push(8).push(9);

// console.log(stackQII.size());

// console.log(stackQII.pop());
// console.log(stackQII.size());

// console.log(stackQII.pop());
// console.log(stackQII.pop());
// console.log(stackQII.pop());
// console.log(stackQII.size());

// console.log(stackQII);
// stackQII.pop();

// console.log(stackQII.isEmpty());
