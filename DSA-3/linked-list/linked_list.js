//Singly Linked list with both head and tail
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertElement(idx, val) {
    if (idx < 0 || idx > this.length) return console.log("Enter a valid index");

    let newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currNode = this.head;
      let nextNode = currNode.next;

      for (let i = 1; i < idx; i++) {
        currNode = nextNode;
        nextNode = nextNode.next;
      }

      currNode.next = newNode;
      newNode.next = nextNode;
    }

    this.length++;
  }

  //add element at the end
  add(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  // remove method at index
  removeElement(idx) {
    if (this.length === 0) return console.log("The Linked List is empty");

    if (idx < 0 || idx >= this.length)
      return console.log("Enter a valid index");

    if (idx === 0) {
      let currNode = this.head;

      if (currNode.next === null) this.tail = null;

      this.head = currNode.next;
      this.length--;
      return currNode;
    }

    let prevNode = null,
      currNode = this.head;

    for (let i = 0; i < idx; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    //if idx is pointing to the tail
    if (currNode.next === null) {
      this.tail = prevNode;
    }

    prevNode.next = currNode.next;
    this.length--;

    return currNode;
  }

  //remove last element
  remove() {
    if (this.length === 0) return console.log("The Linked List is empty");

    let currNode = this.head;

    if (currNode.next === null) {
      this.head = null;
      this.tail = null;
      this.length--;

      return currNode;
    }
    let prevNode = null;

    while (currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = null;
    this.tail = prevNode;
    this.length--;

    return currNode;
  }

  updateElement(idx, node) {
    if (idx < 0 || idx >= this.length)
      return console.log("Enter a valid index");

    let currNode = this.head;

    if (idx === 0) {
      let tobeUpdated = this.head;
      if (this.head.next === null) this.tail = node;

      this.head = node;
      return tobeUpdated;
    }

    let prevNode = null;

    for (let i = 0; i < idx; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //if idx is pointing to the tail
    if (currNode.next === null) this.tail = node;

    prevNode.next = node;
    node.next = currNode.next;

    return currNode;
  }

  //reverse the whole linked list
  reverse() {
    if (this.length === 0) return "The linked list is empty";

    if (this.length === 1) return this.head;

    let prev_node = null,
      ref,
      curr_node = this.head;

    while (!curr_node) {
      prev_node = curr_node;
      ref = curr_node.next;

      curr_node.next = prev_node;

      curr_node = ref;
    }
    this.tail = this.head;
    this.head = prev_node;

    return this.head;
  }
}

exports.SinglyLinkedListI = LinkedList;
exports.ListNode = Node;
