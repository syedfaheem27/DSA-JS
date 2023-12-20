const { ListNode } = require("../linked-list/linked_list");

/*
PROBLEM DESCRIPTION

There are 2 LLs, and they intersect at a node N, after which they merge into 1 list.

Write a program to find the node at which the intersection of two singly linked lists begins.

Note :

If the two linked lists have no intersection at all, return null.

The linked lists must retain their original structure after the function returns.

You may assume there are no cycles anywhere in the entire linked structure.

Your code should preferably run in O(M + N) time where M and N are the lengths of given lists and use only O(1) memory.
*/

function intersectingLists(head1, head2) {
  let len1 = 0,
    len2 = 0;
  let curr_head = head1;

  while (curr_head !== null) {
    len1++;
    curr_head = curr_head.next;
  }

  curr_head = head2;

  while (curr_head !== null) {
    len2++;
    curr_head = curr_head.next;
  }

  let pointer_1 = head1,
    pointer_2 = head2;

  if (len1 < len2)
    for (let i = 0; i < len2 - len1; i++) pointer_2 = pointer_2.next;

  if (len2 < len2)
    for (let i = 0; i < len1 - len2; i++) pointer_1 = pointer_1.next;

  while (pointer_1 !== null && pointer_2 !== null) {
    if (pointer_1 === pointer_2) return pointer_1;
    pointer_1 = pointer_1.next;
    pointer_2 = pointer_2.next;
  }

  return null;
}

/////////////////////////////////////

//Adding two numbers represented as linked lists;
const head1 = new ListNode(9);
let curr_node = head1;
for (let i = 0; i < 3; i++) {
  curr_node.next = new ListNode(9);
  curr_node = curr_node.next;
}

const head2 = new ListNode(1);
curr_node = head2;
for (let i = 0; i < 3; i++) {
  curr_node.next = new ListNode(1);
  curr_node = curr_node.next;
}

//helper
function reverseList(head) {
  let prev_node = null,
    curr_node = head,
    ref;

  while (curr_node !== null) {
    ref = curr_node.next;
    curr_node.next = prev_node;

    prev_node = curr_node;
    curr_node = ref;
  }

  return prev_node;
}

function sumLists(head1, head2) {
  //reverse the lists
  let rev_head1 = reverseList(head1);
  let rev_head2 = reverseList(head2);

  let pointer_1 = rev_head1,
    pointer_2 = rev_head2;

  let new_head = new ListNode(-1),
    new_tail = new_head;
  let new_node;

  let sum,
    carry = 0;

  //adding the two lists and populating the new list
  while (pointer_1 !== null && pointer_2 !== null) {
    sum = carry + pointer_1.val + pointer_2.val;

    carry = Math.floor(sum / 10);

    sum = sum % 10;

    new_node = new ListNode(sum);
    new_tail.next = new_node;
    new_tail = new_tail.next;

    pointer_1 = pointer_1.next;
    pointer_2 = pointer_2.next;
  }

  // checking for the non-exhausted list and adding the carry forward
  if (pointer_1 !== null) {
    while (pointer_1 !== null) {
      sum = carry + pointer_1.val;

      carry = Math.floor(sum / 10);

      sum = sum % 10;

      new_node = new ListNode(sum);
      new_tail.next = new_node;
      new_tail = new_tail.next;

      pointer_1 = pointer_1.next;
    }

    if (carry !== 0) {
      new_node = new ListNode(carry);
      new_tail.next = new_node;
      new_tail = new_tail.next;
    }
  } else if (pointer_2 !== null) {
    while (pointer_2 !== null) {
      sum = carry + pointer_2.val;

      carry = Math.floor(sum / 10);

      sum = sum % 10;

      new_node = new ListNode(sum);
      new_tail.next = new_node;
      new_tail = new_tail.next;

      pointer_2 = pointer_2.next;
    }

    //if carry isn't 0 and both lists are exhausted, in that case just add a new node with carry as the val
    if (carry !== 0) {
      new_node = new ListNode(carry);
      new_tail.next = new_node;
      new_tail = new_tail.next;
    }
  }
  //this addresses the case when both the lists get exhausted. In that case we just need to add the carry as the
  //val for the new node
  else {
    if (carry !== 0) {
      new_node = new ListNode(carry);
      new_tail.next = new_node;
      new_tail = new_tail.next;
    }
  }

  new_node = new_head.next;

  let output_head = reverseList(new_head);
  new_node.next = null;

  return output_head;
}

const out = sumLists(head1, head2);
