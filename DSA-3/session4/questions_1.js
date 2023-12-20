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

/*
PROBLEM DESCRIPTION

A linked list is given such that each node contains an additional 
random pointer which could point to any node in the list or null.

Return a deep copy of the list i.e. the head of the copied linked list.

The deep copy should consist of exactly n brand new nodes, where each 
new node has its value set to the value of its corresponding original node. 
Both the next and random pointer of the new nodes should point to new nodes 
in the copied list such that the pointers in the original list and copied 
list represent the same list state. None of the pointers in the new list 
should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, 
then for the corresponding two nodes x and y in the copied list, x.random --> y.
*/

//1.  TC-O(N) & SC-O(N) additional space required is the map.

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

// const output_1 = copyLinkedListWithRandomPointer(dummy_head);

//2.  TC-O(N) and SC-O(1) no additional space required. Not taking the
//copied linked list into consideration

//TODO: Revisit this problem
function copyLinkedListWithRandomPointerI(head) {
  let curr_node, next_node;

  curr_node = head;

  //coupling the two linked lists
  while (curr_node !== null) {
    next_node = curr_node.next;

    let new_node = new Node(curr_node.val);
    curr_node.next = new_node;

    new_node.next = next_node;

    curr_node = next_node;
  }

  //adding random pointers to the copy list
  currNode = head;
  let nextRandom;

  while (currNode !== null && currNode.random !== null) {
    nextRandom = currNode.random.next;

    currNode.next.random = nextRandom;

    currNode = currNode.next.next;
  }

  //decoupling the lists
  let newHead = head.next;

  currNode = head;

  while (currNode !== null && currNode.next !== null) {
    next_node = currNode.next;

    currNode.next = currNode.next.next;

    currNode = next_node;
  }

  return newHead;
}

const new_node = copyLinkedListWithRandomPointerI(dummy_head);

//////////////////////////////////////////////

//MERGE TWO SORTED LINKED LISTS

//PROBLEM DESCRIPTION

/*
Given 2 sorted linked lists, merge them into a new sorted linked list 
and return head of the merged list. The new list should be made by 
splicing (adjusting the pointers) together the nodes of the first two lists.
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function mergeLists(l1, l2) {
  let curr_head = new ListNode(-1),
    curr_tail = curr_head;

  let l1_pointer = l1,
    l2_pointer = l2;

  while (l1_pointer !== null && l2_pointer !== null) {
    if (l1_pointer.val <= l2_pointer.val) {
      curr_tail.next = l1_pointer;
      l1_pointer = l1_pointer.next;
    } else {
      curr_tail.next = l2_pointer;
      l2_pointer = l2_pointer.next;
    }

    curr_tail = curr_tail.next;
  }

  if (l1_pointer !== null) curr_tail.next = l1_pointer;

  if (l2_pointer !== null) curr_tail.next = l2_pointer;

  return curr_head.next;
}
