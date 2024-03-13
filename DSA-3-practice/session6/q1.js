const { Node } = require("../linkedlist/l1");

//PROBLEM 1 : GIVEN A LINKED LIST - DETERMINE IF IT HAS A CYCLE IN IT

/*
PROBLEM DESCRIPTION

Given a linked list, determine if it has a cycle in it.

A linked list cycle means that for last node of LL, 
called last, last->next is not NULL, but instead 
points to some other node of the LL(not last itself)

*/

//Floyd's Algo - using fast and slow pointers
function cycleInLinkedList(head) {
  let fast_pointer = head,
    slow_pointer = head;

  while (fast_pointer !== null && fast_pointer.next !== null) {
    fast_pointer = fast_pointer.next.next;
    slow_pointer = slow_pointer.next;

    if (fast_pointer === slow_pointer) return true;
  }

  return false;
}

/*------------------------------*/

//PROBLEM 2 : REMOVE THE CYCLE IN A LINKED LIST

/*
PROBLEM DESCRIPTION

Given only the head of a linked list, check whether the linked list contains 
cycle or not. If the linked list does not contain a cycle return false, 
otherwise remove the cycle and return true.

*/

//Best approach
//Floyd's algo

function removeCycle(head) {
  //If cycle starts on the head node
  if (head.next === head) {
    head.next = null;
    return true;
  }

  let fast_pointer = head,
    slow_pointer = head;

  let has_cycle = false;

  while (fast_pointer !== null && fast_pointer.next !== null) {
    fast_pointer = fast_pointer.next.next;
    slow_pointer = slow_pointer.next;

    if (fast_pointer === slow_pointer) {
      has_cycle = true;
      break;
    }
  }

  if (!has_cycle) return false;

  fast_pointer = head;
  slow_prev = null;

  while (fast_pointer !== slow_pointer) {
    fast_pointer = fast_pointer.next;
    slow_prev = slow_pointer;
    slow_pointer = slow_pointer.next;
  }

  slow_prev.next = null;

  return true;
}

/*---------------------------------------------*/

//PROBLEM 3 : SORT A LINKED LIST IN O(NlogN)

//Using merge sort

//TODO: Find out why this piece of code gives us a segmentation fault
//and when we change the fast=head.next in getMidNode, it works fine
function getMidNode(head) {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function mergeSortedList(head1, head2) {
  let new_head = new Node(-1);
  let tail = new_head;

  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }

    tail = tail.next;
  }

  while (head1 !== null) {
    tail.next = head1;
    tail = tail.next;
    head1 = head1.next;
  }

  while (head2 !== null) {
    tail.next = head2;
    tail = tail.next;
    head2 = head2.next;
  }

  return new_head.next;
}

function sortLinkedList(head) {
  if (head === null || head.next === null) return head;

  const mid = getMidNode(head);
  let left_node = head;
  let right_node = mid.next;

  //destroying the middle link
  mid.next = null;

  let l1 = sortLinkedList(left_node);
  let l2 = sortLinkedList(right_node);

  return mergeSortedList(l1, l2);
}

const n1 = new Node(-2);
const n2 = new Node(1);
const n3 = new Node(6);
const n4 = new Node(-4);
const n5 = new Node(4);
n1.next = n2;
n2.next = n3;
n4.next = n5;
// console.log(sortLinkedList(n1));
