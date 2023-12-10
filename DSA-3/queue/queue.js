//Adding a dynamic queue so that we won't have to check for overflow
//for checking an overflow, we will implement circular queues

class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.back = 0;
  }

  add(val) {
    this.arr[this.back++] = val;
    return this;
  }

  remove() {
    if (this.isEmpty())
      return console.log("Can't remove an element from an empty queue");

    return this.arr[this.front++];
  }

  peek() {
    if (this.isEmpty()) return console.log("The Queue is empty");
    return this.arr[this.front];
  }

  isEmpty() {
    return this.front === this.back ? true : false;
  }

  size() {
    return this.back - this.front;
  }
}

class CicularQueue {
  constructor(size) {
    this.arr = [];
    this.front = 0;
    this.back = 0;
    this.size = size;
    this.length = 0;
  }

  add(val) {
    if (this.length >= this.size)
      return console.log("The queue is full already!");

    this.arr[this.back] = val;
    this.back = ++this.back % this.size;
    this.length++;
    return this;
  }

  remove() {
    if (this.isEmpty())
      return console.log("Can't remove elements from an empty queue!");

    let num = this.arr[this.front];
    this.front = ++this.front % this.size;
    this.length--;
    return num;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  peek() {
    return this.arr[this.front];
  }
}

exports.Queue = Queue;
exports.CicularQueue = CicularQueue;
