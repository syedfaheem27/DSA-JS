const { SinglyLinkedListI } = require("./linked_list");

/*
PROBLEM DESCRIPTION 

Given a linked list(need not be sorted) with duplicates,
remove all duplicates, such that only the first occurrence
 of each element must remain in the LL, and return the head.
*/
const newLL = new SinglyLinkedListI();

newLL.add(3).add(4).add(3).add(3).add(4);

function removeDuplicates(head) {
  let currNode = head;
  let prevNode;

  let set = new Set();

  while (currNode) {
    if (set.has(currNode.val)) {
      prevNode.next = currNode.next;
      currNode = currNode.next;
    } else {
      set.add(currNode.val);
      prevNode = currNode;
      currNode = currNode.next;
    }
  }

  return head;
}

removeDuplicates(newLL.head);

///////////////////////////////////

/*
PROBLEM DESCRIPTION

Given the elements of a linked list, reverse it.

You’ll have to implement the given method, which has 
the original list’s head pointer as an argument, 
and return the head of the updated list.
*/

const ll_1 = new SinglyLinkedListI();
ll_1.add(9).add(0).add(4).add(8).add(6);

function reverseLinkedList(head) {
  let prevNode = null;
  let currNode = head;
  let nextNode;

  while (currNode) {
    nextNode = currNode.next;

    currNode.next = prevNode;

    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
}

// console.log(reverseLinkedList(ll_1.head));

//////////////////////////////////////////

/*
PROBLEM DESCRIPTION

Given a singly linked list, find the middle node of the linked
list and move that node to the head of the list. Return the head 
of the list. In the case of a list with an even number of nodes, 
use the second middle one.
*/

//APPROACHES
//1.  Traverse the linked list to find the size and
//then find the middle element and keep track of the prevNode
// and then do prevNode.next=middleNode.next. Then do middleNode.next=this.head;
//this.head=middleNode;
//TC- O(N) n+n/2 operations and SC- O(1)

//2. Use a map to reduce the total ops to n.
// keys - indexes of nodes and value the whole node
// once u get the size, find the middle Node and the prevNode and the
//rest is same.
//TC-O(N) n operations and SC-O(N)

//3.  Optimised approach - Slow and Fast pointer
let ll_2 = new SinglyLinkedListI();

for (let i = 1; i < 8; i++) ll_2.add(i);

function moveMiddleToHead(head) {
  if (head === null || head.next === null) return head;

  let fastPointer = head;
  let slowPointer = head;
  let prevPointer = null;

  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    prevPointer = slowPointer;
    slowPointer = slowPointer.next;
  }

  prevPointer.next = slowPointer.next;

  slowPointer.next = head;
  head = slowPointer;

  return head;
}

console.log(moveMiddleToHead(ll_2.head));

//////////////////////////////////

// Same Question as above but in case of even sized linked List,
//return the first middle
let ll_3 = new SinglyLinkedListI();

for (let i = 1; i < 8; i++) ll_3.add(i);

function moveMiddleToHeadI(head) {
  if (head === null || head.next === null) return head;

  let prevPointer = null,
    fastPointer = head.next,
    slowPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;

    prevPointer = slowPointer;
    slowPointer = slowPointer.next;
  }

  prevPointer.next = slowPointer.next;

  slowPointer.next = head;
  head = slowPointer;

  console.log(head);

  return head;
}

// console.log(moveMiddleToHeadI(ll_2.head));
moveMiddleToHeadI(ll_3.head);
