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
  let prev = head;

  while (prev !== null) {
    len++;
    prev = prev.next;
  }

  let desired_pos = len % 2 === 0 ? len / 2 + 1 : Math.ceil(len / 2);

  let pos = 1;

  let curr = null;
  prev = head;

  while (pos !== desired_pos) {
    curr = prev;
    prev = prev.next;
    pos++;
  }

  curr.next = prev.next;

  prev.next = head;

  return prev;
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

  let curr;

  while (nextNode !== null) {
    currNode.val = nextNode.val;
    curr = currNode;
    currNode = currNode.next;
    nextNode = nextNode.next;
  }

  curr.next = null;
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
  let prev = head;

  for (let i = 0; i < k; i++) prev = prev.next;

  //Handling the case when k===n

  if (prev === null) {
    head = head.next;
    return head;
  }

  let curr = head;

  while (prev.next !== null) {
    prev = prev.next;
    curr = curr.next;
  }

  curr.next = curr.next.next;

  return head;
}

/*-----------------------------------------------*/

//PROBLEM 4

//INSERT INTO A SORTED CIRCULAR LINKED LIST

/*
PROBLEM DESCRIPTION

Given a pointer to a node in a sorted circular singly linked 
list( sorted in ascending order), write a function to insert 
a value K into the list such that the linked list still 
remains a sorted circular list.

Note1: If the given pointer is null i.e. empty list, 
create a circular list with a new node and return the 
reference to the new node. Otherwise,return the initial 
input pointer given.

Note2: The list could have duplicate values. 
You can insert the new value in any place 
which will keep the list sorted.
*/

function insertIntoSortedList(head, data) {
  if (head === null) {
    return new Node(data);
  }

  let prev_node = head,
    curr_node = null;

  while (prev_node.next !== head) {
    curr_node = prev_node.next;

    //Case I : If the node to be inserted lies in between the head
    // and the point where rotation happens
    if (prev_node.val <= data && curr_node.val >= data) {
      insertNewNode(prev_node, curr_node, data);
      return head;
    }

    //Case II : If the node to be inserted is at the point of rotation
    if (prev_node.val > curr_node.val) {
      if (prev_node.val <= data || data <= curr_node.val) {
        insertNewNode(prev_node, curr_node, data);
        return head;
      }
    }

    prev_node = prev_node.next;
  }

  //CASE-III: In cases where there is only a single node or all the values of nodes are equal
  //and the value to be inserted is greater or less than the node values
  //if equal - it will be handled in the while loop above
  insertNewNode(prev_node, head, data);
  return head;
}

function insertNewNode(prev, curr, val) {
  let node = new Node(val);
  node.next = curr;
  prev.next = node;
  return;
}
