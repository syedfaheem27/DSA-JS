const { ListNode } = require("../linked-list/linked_list");

/*
REORDER A LIST WITH RELATION TO AN INPUT INTEGER

PROBLEM DESCRIPTION

Given a linked list and an integer X, partition the LL around X, 
such that all nodes less than X come before all nodes greater than X. 
If X is contained within the list, then those nodes need

to be after the elements less than X and before the elements greater 
than X, i.e. they should appear between the left and right partitions.


You can also see if you can preserve the order for elements on either 
side of the partition. For instance, for given LL 2, 6, 5, 7, 1 and X = 5, 
the answer should be 2, 1, 5, 6, 7 only, instead of 1, 2, 5, 6, 7.

*/

// const head = new ListNode(2);
// const arr = [6, 5, 7, 1];
const head = new ListNode(3);
const arr = [1, 3, 1, 4];

let currNode = head;
arr.forEach((val) => {
  currNode.next = new ListNode(val);
  currNode = currNode.next;
});

/**
 * @param {ListNode} head
 * @param {number} X
 * @return {ListNode}
 */
function partition(head, x) {
  let small_head = new ListNode(-1),
    small_tail = small_head;

  let equal_head = new ListNode(-1),
    equal_tail = equal_head;

  let large_head = new ListNode(-1),
    large_tail = large_head;

  let currNode = head;

  while (currNode !== null) {
    if (currNode.val < x) {
      small_tail.next = currNode;
      small_tail = small_tail.next;
    } else if (currNode.val > x) {
      large_tail.next = currNode;
      large_tail = large_tail.next;
    } else {
      equal_tail.next = currNode;
      equal_tail = equal_tail.next;
    }

    currNode = currNode.next;
  }

  if (equal_head.next !== null) {
    small_tail.next = equal_head.next;
    equal_tail.next = large_head.next;
  } else {
    small_tail.next = large_head.next;
  }
  large_tail.next = null;

  return small_head.next;
}

const output = partition(head, 2);
///////////////////////////////

//A simple deepcopy of a linked list
function deepCopy(head) {
  let new_head = new ListNode(-1);
  let new_tail = new_head;

  let currNode = head;

  while (currNode !== null) {
    let newNode = new ListNode(currNode.val);
    new_tail.next = newNode;
    new_tail = new_tail.next;

    currNode = currNode.next;
  }

  return new_head.next;
}

// const head_1 = new ListNode(100);
// head_1.next = new ListNode(200);
// head_1.next.next = new ListNode(400);

// const output_1 = deepCopy(head_1);
// head_1.next.next = new ListNode(900);
// console.log(output_1);

///////////////////////////////////

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

const dummy_head = new Node(1);
const next_node_1 = new Node(2);
const next_node_2 = new Node(3);
const next_node_3 = new Node(4);

dummy_head.next = next_node_1;
next_node_1.next = next_node_2;
next_node_2.next = next_node_3;

dummy_head.random = next_node_3;
next_node_1.random = next_node_1;
next_node_2.random = next_node_2;
next_node_3.random = dummy_head;

/**
 * @param {Node} head
 * @return {Node}
 */
function copyLinkedListWithRandomPointer(head) {
  let currNode = head;
  let node_map = new Map();

  while (currNode !== null) {
    node_map.set(currNode, new Node(currNode.val));
    currNode = currNode.next;
  }

  let nextNode, random_next;

  for (let [key, value] of node_map) {
    nextNode = node_map.get(key.next);
    value.next = nextNode;

    random_next = node_map.get(key.random);
    value.random = random_next;
  }

  return node_map.get(head);
}

const output_1 = copyLinkedListWithRandomPointer(dummy_head);
//////////////////////////////////////
