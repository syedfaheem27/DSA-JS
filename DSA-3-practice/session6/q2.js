const { Node } = require("../linkedlist/l1");

// PROBLEM 1: FIND THE SUM OF LINKED LISTS REPRESENTED AS A LINKED LIST

/*
30+

Problem Description

You have two numbers represented by a linked list, where each node contains a single digit. 
The digits are stored in reverse order, such that the highest order digit is at the head of the list.

Write a function that adds the two numbers and returns the sum as a linked list.

Sample Input 1

7 1 6

5 9 2
Sample Output 1

2 1 9
Explanation

617 + 295 = 912

Sample Input 2

4 9

0 5
Sample Output 2

4 4 1
Explanation

94 + 50 = 144
*/

function addRevLinkedList(head1, head2) {
  let new_head = new ListNode(-1);
  let tail = new_head;

  let carry = 0;

  let ref1 = head1,
    ref2 = head2;

  while (ref1 !== null && ref2 !== null) {
    let sum = ref1.val + ref2.val + carry;
    tail.next = new ListNode(sum % 10);
    tail = tail.next;

    carry = Math.floor(sum / 10);

    ref1 = ref1.next;
    ref2 = ref2.next;
  }

  let node = ref1 === null ? ref2 : ref1;

  while (node !== null) {
    let sum = carry + node.val;
    tail.next = new ListNode(sum % 10);

    tail = tail.next;
    carry = Math.floor(sum / 10);
    node = node.next;
  }

  if (carry !== 0) {
    tail.next = new ListNode(carry);
    tail = tail.next;
  }

  return new_head.next;
}

/*----------------------------------*/

//PROBLEM 2 : REVERSE CONTIGOUS EVEN ELEMENTS

/*
PROBLEM DESCRIPTION

Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values.

Sample Input 

1 2 3 3 4 6 8 5
Sample Output 

1 2 3 3 8 6 4 5

Explanation 

There are two sublists of even elements, which [2] and [4->6->8]. 
The sublist [4->6->8] has been reversed and the single sublist [2] need not be reversed.
*/

function reverseEvenContigousNodes(head) {
  //Sliding window
  let prev_node = null,
    curr_node = head;

  let new_head = head;

  while (curr_node !== null) {
    let start = null,
      end = null;

    while (curr_node !== null && curr_node.val % 2 === 0) {
      if (start === null) start = curr_node;

      end = curr_node;
      curr_node = curr_node.next;
    }
    if (start !== null && end !== null) {
      reverseList(start, end);

      if (prev_node) prev_node.next = end;
      start.next = curr_node;

      if (start === head) new_head = end;
    } else {
      prev_node = curr_node;
      curr_node = curr_node.next;
    }
  }

  return new_head;
}

function reverseList(head, tail) {
  if (head === tail) return null;

  let prev = null,
    curr = head,
    next;

  while (curr !== tail) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  curr.next = prev;

  return null;
}

/*-----------------------------------*/

//PROBLEM 3 : GROUP NODES BASED ON THEIR INDICES IN THE LINKED LIST

/*
PROBLEM DESCRIPTION

Given the head of a singly linked list, group all the nodes with odd indices 
together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain 
as it was in the input.

Sample Input 

1 5 3 4 8
Sample Output 

1 3 8 5 4
*/

//Approach 1
//TC O(n) & SC O(1)
function reArrange(head) {
  if (head === null || head.next === null || head.next.next === null)
    return head;

  let even_prev = null,
    odd_prev = null;

  let even_head = head.next;

  let bool_odd = false;

  let curr = head,
    next;

  while (curr !== null && curr.next !== null) {
    bool_odd = !bool_odd;

    next = curr.next;
    curr.next = curr.next.next;

    if (bool_odd) odd_prev = curr;
    else even_prev = curr;

    curr = next;
  }

  //If even length list
  if (curr === even_prev.next) {
    odd_prev.next = even_head;
    return head;
  } else {
    curr.next = even_head;
    return head;
  }
}

//Approach 2 : Different approach but with same TC

function reArrangeI(head) {
  if (!head || !head.next) return head;

  let first_even = head.next;

  let curr_odd = head,
    curr_even = head.next;

  let next_even = null,
    next_odd = null;

  while (curr_even !== null && curr_even.next !== null) {
    next_odd = curr_even.next;
    next_even = next_odd.next;

    curr_odd.next = next_odd;
    curr_even.next = next_even;

    curr_odd = next_odd;
    curr_even = next_even;
  }

  curr_odd.next = first_even;

  return head;
}
