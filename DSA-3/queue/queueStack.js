const { StackI } = require("../stack/stack");

//IMPLEMENT A QUEUE USING TWO STACKS
//1.  POP HEAVY APPROACH
//PUSH - O(1) & POP - O(n)

class QueueStackI {
  constructor() {
    this.mainStack = new StackI();
    this.secStack = new StackI();
  }

  add(val) {
    this.mainStack.push(val);
    return this;
  }

  remove() {
    if (this.mainStack.isEmpty()) return console.log("The Queue is empty");

    let n = this.mainStack.size();

    for (let i = 0; i < n; i++) this.secStack.push(this.mainStack.pop());

    let num = this.secStack.pop();

    n = this.secStack.size();

    for (let i = 0; i < n; i++) this.mainStack.push(this.secStack.pop());

    return num;
  }

  peek() {
    if (this.mainStack.isEmpty()) return console.log("The Queue is empty");

    let n = this.mainStack.size();

    for (let i = 0; i < n; i++) this.secStack.push(this.mainStack.pop());

    let num = this.secStack.peek();

    n = this.secStack.size();

    for (let i = 0; i < n; i++) this.mainStack.push(this.secStack.pop());

    return num;
  }

  isEmpty() {
    return this.mainStack.isEmpty();
  }

  size() {
    return this.mainStack.size();
  }
}

//PUSH HEAVY APPROACH
//PUSH - O(n) & POP - O(1)

class QueueStackII extends QueueStackI {
  constructor() {
    super();
  }

  add(val) {
    let n = this.mainStack.size();

    for (let i = 0; i < n; i++) this.secStack.push(this.mainStack.pop());

    this.mainStack.push(val);

    n = this.secStack.size();

    for (let i = 0; i < n; i++) this.mainStack.push(this.secStack.pop());

    return this;
  }

  remove() {
    if (this.isEmpty()) return console.log("The Queue is empty");

    return this.mainStack.pop();
  }
}

exports.QueueStackI = QueueStackI;
exports.QueueStackII = QueueStackII;
