const { ListNode } = require("./linked_list");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(val) {
    let new_node = new ListNode(val);
    if (!this.head) {
      this.head = new_node;
      this.length++;
      return this;
    }

    let curr_node = this.head,
      prev_node = null;
    while (!curr_node) {
      prev_node = curr_node;
      curr_node = curr_node.next;
    }

    prev_node.next = new_node;

    this.length++;
    return this;
  }

  remove() {
    if (!this.head) return "The Linked list is empty!";

    let curr_node = this.head,
      prev_node = null;

    while (!curr_node.next) {
      prev_node = curr_node;
      curr_node = curr_node.next;
    }

    if (!prev_node) {
      this.head = null;
    } else {
      prev_node.next = null;
    }

    this.length--;
    return curr_node;
  }

  get size() {
    return this.length;
  }

  get isEmpty() {
    return this.length === 0 ? true : false;
  }
}

module.exports = LinkedList;
