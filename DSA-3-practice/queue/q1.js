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

//TODO: Implement a Doubly ended queue using a linked list

//PROBLEM

//Implement a Queue using two stacks

//Pop heavy implementation - TC O(n)
//Peek - TC O(n)
//Push implementation - TC O(1)
class QueueII {
  constructor() {
    this.length = 0;
    this.stackOne = [];
    this.stackTwo = [];
  }

  add(el) {
    this.stackOne.push(el);
    this.length++;

    return this;
  }

  remove() {
    if (this.isEmpty) return console.log("The Queue is empty!");

    while (this.stackOne.length !== 0) {
      this.stackTwo.push(this.stackOne.pop());
    }

    let num = this.stackTwo.pop();

    while (this.stackTwo.length !== 0) this.stackOne.push(this.stackTwo.pop());

    this.length--;
    return num;
  }

  get isEmpty() {
    return this.length === 0 ? true : false;
  }

  peek() {
    if (this.isEmpty) return console.log("The Queue is empty!");

    while (this.stackOne.length !== 0) this.stackTwo.push(this.stackOne.pop());

    let num = this.stackTwo[this.length - 1];

    while (this.stackTwo.length !== 0) this.stackOne.push(this.stackTwo.pop());

    return num;
  }
}

/*-------------------------------*/

//Second Implementation
//Push heavy implementation

//Push TC O(n)
//Pop TC O(1)

class QueueIII {
  constructor() {
    this.length = 0;
    this.stackOne = [];
    this.stackTwo = [];
  }

  add(el) {
    while (this.stackOne.length !== 0) this.stackTwo.push(this.stackOne.pop());

    this.stackOne.push(el);

    while (this.stackTwo.length !== 0) this.stackOne.push(this.stackTwo.pop());
    this.length++;

    return this;
  }

  remove() {
    if (this.length === 0) return console.log("The Queue is empty!");

    this.length--;
    return this.stackOne.pop();
  }

  peek() {
    if (this.length === 0) return console.log("The Queue is empty!");

    return this.stackOne[this.length - 1];
  }
}

/*------------------------*/
