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
        temp_stack.push(this.stack.pop());
        count--;
      }
    }

    this.stack = temp_stack;
    return this.stack;
  }
}

/*-------------------------------*/
