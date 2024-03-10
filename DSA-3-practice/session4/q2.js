const { Node } = require("../linkedlist/l1");

//Fast and Slow Pointers

//PROBLEM 1: MAKE MIDDLE NODE THE HEAD OF THE LINKED LIST

/*
PROBLEM DESCRIPTION

Given a singly linked list, find the middle node of the linked list and 
move that node to the head of the list. Return the head of the list. 
In the case of a list with an even number of nodes, use the second middle one.
*/

//BRUTE FORCE APPROACH
//TC O(N) & SC O(1)

function middleNodeI(head) {
  let len = 0;
  let curr_node = head;

  while (curr_node !== null) {
    len++;
    curr_node = curr_node.next;
  }

  let desired_pos = len % 2 === 0 ? len / 2 + 1 : Math.ceil(len / 2);

  let pos = 1;

  let prev_node = null;
  curr_node = head;

  while (pos !== desired_pos) {
    prev_node = curr_node;
    curr_node = curr_node.next;
    pos++;
  }

  prev_node.next = curr_node.next;

  curr_node.next = head;

  return curr_node;
}

const ll = new Node(1);
const ll_1 = new Node(5);
const ll_2 = new Node(2);
const ll_3 = new Node(4);
const ll_4 = new Node(3);

ll.next = ll_1;
ll_1.next = ll_2;
ll_2.next = ll_3;
ll_3.next = ll_4;

//Best Appraoch - TC O(N) & SC O(1) Using Fast and Slow pointer

function middleNodeII(head) {
  if (head === null || head.next === null) return head;

  if (head.next.next === null) {
    let mid = head.next;
    head.next = null;
    mid.next = head;
    return mid;
  }

  let fast_node = head.next,
    slow_node = head;
  while (fast_node.next !== null && fast_node.next.next !== null) {
    fast_node = fast_node.next.next;
    slow_node = slow_node.next;
  }

  let middle_node = slow_node.next;

  slow_node.next = middle_node.next;

  middle_node.next = head;
  return middle_node;
}

/*---------------------------------------*/

//PROBLEM 2: DELETE A NODE IN THE LINKED LIST

/*
PROBLEM DESCRIPTION

Given only a reference to a node to be deleted in a singly linked list, implement a function to delete the given node. The given node is guaranteed to be neither the first, nor the last node.

Note: The node to be deleted is not necessarily the exact middle node but is one of nodes that is not at the ends.
*/

function deleteNodeI(node) {
  let currNode = node,
    nextNode = node.next;

  let prev_node;

  while (nextNode !== null) {
    currNode.val = nextNode.val;
    prev_node = currNode;
    currNode = currNode.next;
    nextNode = nextNode.next;
  }

  prev_node.next = null;
}

/*-------------------------------------*/

//PROBLEM 3

//DELETE Kth Node from the end

/*
Problem Description

Given a linked list, remove the Kth node from the end of the list and return its head.

Note: the given K will always be a valid node.
*/

function deleteKthNodeEnd(head, k) {
  let curr_node = head;

  for (let i = 0; i < k; i++) curr_node = curr_node.next;

  //Handling the case when k===n

  if (curr_node === null) {
    head = head.next;
    return head;
  }

  let prev_node = head;

  while (curr_node.next !== null) {
    curr_node = curr_node.next;
    prev_node = prev_node.next;
  }

  prev_node.next = prev_node.next.next;

  return head;
}
