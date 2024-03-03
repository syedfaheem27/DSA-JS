//Implement a Queue

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }

  add(el) {
    this.queue[this.end++] = el;
    return this;
  }

  remove() {
    if (this.isEmpty) return console.log("The queue is empty");

    let num = this.queue[this.start++];
    return num;
  }

  peek() {
    if (this.isEmpty) return console.log("The queue is empty!");
    return this.queue[this.start];
  }

  get isEmpty() {
    return this.length === 0 ? true : false;
  }
  get length() {
    return this.end - this.start;
  }
}

//The problem with the above implementation of a queue is that
// a lot of memory gets wasted. To address that we will design
//a circular queue

/*-------------------------------------*/

//Circular Queue of a fixed size

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.length = 0;
    this.front = 0;
    this.back = 0;
    this.queue = Array.from({ length: size }, () => null);
  }

  add(el) {
    if (this.length === this.size) return console.log("The Queue is full!");

    this.queue[this.back] = el;
    this.length++;
    this.back = (this.back + 1) % this.size;

    return this;
  }

  remove() {
    if (this.isEmpty) return console.log("The queue is empty!");

    let num = this.queue[this.front];
    this.queue[this.front] = null;
    this.length--;
    this.front = (this.front + 1) % this.size;

    return num;
  }

  peek() {
    if (this.isEmpty) return console.log("The Queue is empty!");
    return this.queue[this.front];
  }

  get isEmpty() {
    return this.length === 0 ? true : false;
  }
}

/*--------------------------*/
