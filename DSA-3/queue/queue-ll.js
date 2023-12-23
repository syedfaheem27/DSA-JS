const { ListNode } = require("../linked-list/linked_list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    this.next = null;
  }

  add(val) {
    let new_node = new ListNode(val);

    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this._size++;

    return this;
  }

  remove() {
    if (this.head === null) return "The Queue is empty!";

    let removed_node = this.head;
    this.head = this.head.next;
    this._size--;

    return removed_node;
  }

  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0 ? true : false;
  }

  peek() {
    if (this.head === null) return "The Queue is empty!";

    return this.head;
  }
}

module.exports = Queue;
