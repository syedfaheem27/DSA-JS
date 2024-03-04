//Design a stack with a sort method

class Stack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    this.stack.push(el);
    return this;
  }

  pop() {
    if (this.isEmpty)
      return console.log("Can't remove items from an empty stack");

    return this.stack.pop();
  }

  get isEmpty() {
    return this.stack.length === 0 ? true : false;
  }

  sort() {
    let temp_stack = [];

    while (!this.isEmpty) {
      let num = this.pop();
      let count = 0;
      while (
        temp_stack.length !== 0 &&
        temp_stack[temp_stack.length - 1] > num
      ) {
        this.push(temp_stack.pop());
        count++;
      }

      temp_stack.push(num);

      while (count > 0) {
        temp_stack.push(this.pop());
        count--;
      }
    }

    this.stack = temp_stack;
    return this.stack;
  }
}

/*-------------------------------*/

//PROBLEM - IMPLEMENT TWO STACKS USING A SINGLE ARRAY

//1.    Partition the array and use one half for one and the other for the other
//downisde : memory wastage

//Efficient method
function twoStacksOneArr(size) {
  let stack = [];
  let ptr_1 = -1,
    ptr_2 = size;

  let stackOne = {
    get stack() {
      return stack.slice(0, ptr_1 + 1);
    },
    push(el) {
      if (ptr_1 + 1 === ptr_2) {
        return console.log("The stack is full!");
      }

      ptr_1++;
      stack[ptr_1] = el;
    },

    pop() {
      if (ptr_1 === -1) return console.log("The stack is empty!");

      let num = stack[ptr_1--];
      return num;
    },
  };

  let stackTwo = {
    get stack() {
      if (ptr_2 === size) return [];

      return stack.slice(ptr_2).reverse();
    },
    push(el) {
      if (ptr_2 - 1 === ptr_1) return console.log("The stack is full!");

      ptr_2--;
      stack[ptr_2] = el;
    },

    pop() {
      if (ptr_2 === size) return console.log("The stack is empty!");

      let num = stack[ptr_2++];
      return num;
    },
  };

  return { stackOne, stackTwo };
}

const { stackOne, stackTwo } = twoStacksOneArr(12);

//Using a class based approach

class TwoStacks {
  constructor(size) {
    this.size = size;
    this.stack = [];
    this.front = -1;
    this.back = size;
  }

  pushOne(el) {
    if (this.front + 1 === this.back) return "Stack One is full!";

    this.front++;
    this.stack[this.front] = el;
  }

  popOne() {
    if (this.front === -1) return "Stack One is empty!";

    let num = this.stack[this.front--];
    return num;
  }

  printOne() {
    for (let i = 0; i <= this.front; i++) console.log(this.stack[i]);
  }

  pushTwo(el) {
    if (this.back - 1 === this.front) return "Stack two is full!";

    this.back--;
    this.stack[this.back] = el;
  }

  popTwo() {
    if (this.back === this.size) return "Stack two is empty!";

    let num = this.stack[this.back++];
    return num;
  }

  printTwo() {
    for (let i = this.size - 1; i >= this.back; i--) console.log(this.stack[i]);
  }
}
/*--------------------------*/
