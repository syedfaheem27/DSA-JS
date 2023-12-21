const { ListNode } = require("../linked-list/linked_list");

/*
PROBLEM DESCRIPTION

You have two numbers represented by a linked list, where each node 
contains a single digit. The digits are stored in reverse order, 
such that the highest order digit is at the head of the list.

Write a function that adds the two numbers and returns the sum as a linked list.

Sample Input 1
7 1 6

5 9 2

Sample Output 1
2 1 9

Explanation
617 + 295 = 912
*/

function sumLists1(head1, head2) {
  let new_head = new ListNode(-1),
    new_tail = new_head;

  let pointer_1 = head1,
    pointer_2 = head2;

  let sum,
    carry = 0;

  while (pointer_1 !== null && pointer_2 !== null) {
    sum = pointer_1.val + pointer_2.val + carry;
    carry = Math.floor(sum / 10);
    new_tail.next = new ListNode(sum % 10);
    new_tail = new_tail.next;

    pointer_1 = pointer_1.next;
    pointer_2 = pointer_2.next;
  }

  if (pointer_1 !== null) {
    while (pointer_1 !== null) {
      sum = pointer_1.val + carry;
      carry = Math.floor(sum / 10);
      new_tail.next = new ListNode(sum % 10);
      new_tail = new_tail.next;

      pointer_1 = pointer_1.next;
    }

    if (carry !== 0) {
      new_tail.next = new ListNode(carry);
      new_tail = new_tail.next;
    }
  } else if (pointer_2 !== null) {
    while (pointer_2 !== null) {
      sum = pointer_2.val + carry;
      carry = Math.floor(sum / 10);
      new_tail.next = new ListNode(sum % 10);
      new_tail = new_tail.next;

      pointer_2 = pointer_2.next;
    }

    if (carry !== 0) {
      new_tail.next = new ListNode(carry);
      new_tail = new_tail.next;
    }
  } else {
    if (carry !== 0) {
      new_tail.next = new ListNode(carry);
      new_tail = new_tail.next;
    }
  }

  return new_head.next;
}

/////////////////////////////////////////////

//Group nodes based on their indices in the linked list

/*
PROBLEM DESCRIPTION

Given the head of a singly linked list, 
group all the nodes with odd indices together followed by 
the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, 
and so on.

Note that the relative order inside both the even and odd 
groups should remain as it was in the input.

Sample Input 1
1 5 3 4 8

Sample Output 1
1 3 8 5 4

Explanation
Arranging the odd nodes first i.e. 1st, 3rd, 5th node and 
then the even nodes i.e. 2nd, 4th will give us 1, 3, 8, 5, 4.


*/

function oddEvenLinkedList(head) {
  if (!head || head.next === null) return head;

  let first_even = head.next;
  let curr_odd = head,
    curr_even = head.next;

  let next_odd, next_even;

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

////////////////////////////////////////

//REVERSE CONTIGOUS EVEN ELEMENTS

//PROBLEM DESCRIPTION

/*
Given a singly linked list of integers, reverse every contiguous 
set of nodes that have only even values.

Sample Input 1
1 2 3 3 4 6 8 5

Sample Output 1
1 2 3 3 8 6 4 5

Sample Input 2
1 3 2 5 4 6

Sample Output 2
1 3 2 5 6 4
*/

function reverseEvenElements(head) {
  let curr_node = head;

  if (!curr_node || !curr_node.next) return curr_node;

  let prev_node = null,
    start = null,
    end = null,
    new_head = head;

  while (curr_node !== null) {
    (start = null), (end = null);

    while (curr_node !== null && curr_node.val % 2 === 0) {
      if (!start) start = curr_node;

      end = curr_node;
      curr_node = curr_node.next;
    }

    if (start && end) {
      reverseSubList(start, end);

      if (prev_node) prev_node.next = end;

      if (curr_node) start.next = curr_node;

      if (head === start) new_head = end;

      prev_node = start;
    } else {
      prev_node = curr_node;
      curr_node = curr_node.next;
    }
  }

  return new_head;
}

function reverseSubList(start_node, end_node) {
  if (start_node === end_node) return null;

  let prev_node = null,
    ref;
  let start = start_node,
    end = end_node;

  while (start !== end) {
    ref = start.next;
    start.next = prev_node;

    prev_node = start;
    start = ref;
  }

  start.next = prev_node;
  return null;
}
