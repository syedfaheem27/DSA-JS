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

  get(index) {
    if (index < 0 || index >= this.length) return "Enter a valid Index!";

    let pos = 0;
    let curr_node = this.head;
    while (pos !== index) {
      pos++;
      curr_node = curr_node.next;
    }

    return curr_node.val;
  }

  addAtHead(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return;
    }

    let el = this.head;
    this.head = node;
    this.head.next = el;
    this.length++;
    return;
  }

  addAtTail(val) {
    if (this.length === 0) return this.addAtHead(val);

    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return "Enter a valid Index!";

    if (index === 0) return this.addAtHead(val);

    if (index === this.length) return this.addAtTail(val);

    let prev_node = null;
    let curr_node = this.head;
    let node = new Node(val);

    let pos = 0;
    while (pos !== index) {
      prev_node = curr_node;
      curr_node = curr_node.next;
      pos++;
    }

    prev_node.next = node;
    node.next = curr_node;
    this.length++;
    return;
  }

  deleteAtIndex(index) {
    if (this.length === 0) return "The Linked List is empty!";

    if (index < 0 || index >= this.length) return "Enter a valid Index!";

    if (index === 0) {
      if (this.head.next === null) this.tail = null;

      this.head = this.head.next;
      this.length--;
      return;
    }

    let prev_node = null;
    let curr_node = this.head;

    for (let i = 0; i < index; i++) {
      prev_node = curr_node;
      curr_node = curr_node.next;
    }

    if (curr_node.next === null) this.tail = prev_node;

    prev_node.next = curr_node.next;
    this.length--;
    return;
  }
}
