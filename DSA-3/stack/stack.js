// class StackI {
//   constructor() {
//     this.arr = [];
//     this.idx = -1;
//   }

//   push(val) {
//     //simple to understand for others
//     this.idx++;
//     this.arr[this.idx] = val;

//     // this.arr[++this.idx]=val;
//     return this;
//   }

//   pop() {
//     if (this.idx - 1 < -1)
//       return console.log("Can't pop elements from the stack when it's empty");

//     let popNum = this.arr[this.idx];
//     this.idx--;
//     return popNum;
//   }

//   size() {
//     return this.idx + 1;
//   }

//   peek() {
//     return this.arr[this.idx];
//   }
//   isEmpty() {
//     return this.size() === 0 ? true : false;
//   }
// }

class StackI {
  constructor() {
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  peek() {
    return this.arr[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0 ? true : false;
  }
}

// module.exports = Stack;

//////////////////////////

//TWO STACKS USING THE SAME ARRAY

class StackII {
  constructor(len) {
    this.arr = Array.from({ length: len });
    this.in1 = -1;
    this.in2 = len;
  }
  checkOverflow() {
    return this.in1 + 1 >= this.in2 ? false : true;
  }

  push1(val) {
    if (!this.checkOverflow()) return console.log("Stack  is full");

    this.in1++;
    this.arr[this.in1] = val;
  }

  peek1() {
    return this.arr[this.in1];
  }

  pop1() {
    if (this.in1 - 1 < -1)
      return console.log("Can't pop elements from the stack when it's empty");

    let num = this.arr[this.in1];
    this.in1--;
    return num;
  }

  size1() {
    return this.in1 + 1;
  }

  isEmpty1() {
    return this.in1 === -1 ? true : false;
  }

  push2(val) {
    if (!this.checkOverflow()) return console.log("Stack 1 is full");

    this.in2--;
    this.arr[this.in2] = val;
  }

  peek2() {
    return this.arr[this.in2];
  }

  pop2() {
    if (this.in2 + 1 > this.arr.length)
      return console.log("Can't pop elements from the stack when it's empty");

    let num = this.arr[this.in2];
    this.in2++;
    return num;
  }

  size2() {
    return this.arr.length - this.in2;
  }

  isEmpty2() {
    return this.in2 === this.arr.length ? true : false;
  }
}

exports.StackI = StackI;
exports.StackII = StackII;
