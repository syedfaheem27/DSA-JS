//Implement a Queue

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }

  add(el) {
    this.queue[this.end] = el;
    this.end++;
    return this;
  }

  remove() {
    if (this.isEmpty) return console.log("The queue is empty");

    let num = this.queue[this.start];
    this.start++;
    return num;
  }

  peek() {
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
