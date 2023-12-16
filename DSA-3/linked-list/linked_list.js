//Singly Linked list with both head and tail
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedListI {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertElement(idx, val) {
    if (idx < 0 || idx > this.length) return console.log("Enter a valid index");
    else {
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
}

module.exports = SinglyLinkedListI;
