//PROBLEM-1 BASIC QUEUE OPERATIONS
const { Queue, CicularQueue } = require("./queue");
const { QueueStackI, QueueStackII } = require("./queueStack");

const tempQueue = new Queue();

// tempQueue.add(3).add(5).add(6).add(100);

// console.log(tempQueue);
// // console.log(tempQueue.peek());

// console.log(tempQueue.remove());
// console.log(tempQueue.remove());
// console.log(tempQueue.remove());
// // console.log(tempQueue.remove());

// console.log(tempQueue.size());
// console.log(tempQueue.peek());

///////////////////////////////////////////////////////

const circQueue = new CicularQueue(12);

// circQueue
//   .add(10)
//   .add(2)
//   .add(8)
//   .add(5)
//   .add(10)
//   .add(2)
//   .add(7)
//   .add(8)
//   .add(1)
//   .add(2)
//   .add(8)
//   .add(0);

// // circQueue.add(199);

// console.log(circQueue.remove());

// circQueue.add(20);
// console.log(circQueue);
// console.log(circQueue.peek());

////////////////////////////////////////////////////
//POP HEAVY
const queueII = new QueueStackI();

// queueII.add(4).add(3).add(5);
// console.log(queueII.size());
// queueII.remove();
// queueII.remove();
// console.log(queueII.isEmpty());
// queueII.remove();

// console.log(queueII.peek());
// console.log(queueII.isEmpty());

///////////////////////////////////

//PUSH HEAVY
const queueIII = new QueueStackII();

// queueIII.add(4).add(3).add(5);
// console.log(queueIII.size());
// queueIII.remove();
// queueIII.remove();
// console.log(queueIII.isEmpty());
// queueIII.remove();

// console.log(queueIII.peek());
// console.log(queueIII.isEmpty());
