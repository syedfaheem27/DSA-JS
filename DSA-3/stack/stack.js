class Stack {
  constructor() {
    this.arr = [];
    this.idx = -1;
  }

  push(val) {
    this.idx++;
    this.arr[this.idx] = val;
  }

  pop() {
    let popNum = this.arr[this.idx];
    this.idx--;
    return popNum;
  }

  size() {
    return this.idx + 1;
  }

  peek() {
    return this.arr[this.idx];
  }
  isEmpty() {
    return this.size() === 0 ? true : false;
  }
}

module.exports = Stack;

// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(val) {
//     this.arr.push(val);
//   }

//   pop() {
//     return this.arr.pop();
//   }

//   size() {
//     return this.arr.length;
//   }

//   peek() {
//     return this.arr[this.size() - 1];
//   }
//   isEmpty() {
//     return this.size() === 0 ? true : false;
//   }
// }

// module.exports = Stack;
