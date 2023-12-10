const { Queue } = require("../queue/queue");

//- INEFFICIENT IMPLEMENTATION WHEN IT COMES TO MEMORY
//- AS THE QUEUE - THE WAY IT IS IMPLEMENTED ISN'T MEMORY EFFICIENT

//IMPLEMENTING A STACK USING TWO QUEUES

//HEAVY OPERATION - ADDING IN THE STACK - O(N)
//REMOVING - O(1)

class StackQueueI {
  constructor() {
    this.mainQueue = new Queue();
    this.secQueue = new Queue();
  }

  push(val) {
    let n = this.mainQueue.size();

    for (let i = 0; i < n; i++) this.secQueue.add(this.mainQueue.remove());

    this.mainQueue.add(val);

    n = this.secQueue.size();

    for (let i = 0; i < n; i++) this.mainQueue.add(this.secQueue.remove());

    return this;
  }

  pop() {
    if (this.isEmpty()) return console.log("The Stack is empty");

    return this.mainQueue.remove();
  }
  peek() {
    if (this.isEmpty()) return console.log("The Stack is empty");

    return this.mainQueue.peek();
  }

  isEmpty() {
    return this.mainQueue.size() === 0 ? true : false;
  }

  size() {
    return this.mainQueue.size();
  }
}

//HEAVY OPERATION - REMOVING - O(N)
//ADDING - O(1)

class StackQueueII extends StackQueueI {
  constructor() {
    super();
  }

  push(val) {
    this.mainQueue.add(val);
    return this;
  }

  pop() {
    if (this.isEmpty()) return console.log("The Stack is empty");

    let n = this.size();

    for (let i = 1; i < n; i++) this.secQueue.add(this.mainQueue.remove());

    let num = this.mainQueue.remove();

    n = this.secQueue.size();

    for (let i = 0; i < n; i++) this.mainQueue.add(this.secQueue.remove());

    return num;
  }
}

exports.StackQueueI = StackQueueI;
exports.StackQueueII = StackQueueII;
