const { Node } = require("../linkedlist/l1");
// PROBLEM 1

//RE-ORDER LIST IN RELATION TO AN INPUT INTEGER

/*
PROBLEM DESCRIPTION

Given a linked list and an integer X, partition the LL around X, 
such that all nodes less than X come before all nodes greater than X. 
If X is contained within the list, then those nodes need

to be after the elements less than X and before the elements greater 
than X, i.e. they should appear between the left and right partitions.

You can also see if you can preserve the order for elements on either 
side of the partition. For instance, for given LL 2, 6, 5, 7, 1 and 
X = 5, the answer should be 2, 1, 5, 6, 7 only, instead of 1, 2, 5, 6, 7.

Sample Input 

3 5 8 5 10 2 1
5

Sample Output 

3 2 1 5 5 8 10

Explanation 
The nodes [3], [1] and [2] are less than [5] so they are present before [8] and [10].
*/

//Brute force - Mark visisted nodes and create a new linked list

//TC O(N) & SC O(N) But we need three traversals and extra space
function reOrderList(head, x) {
  let curr_node = head;
  let new_head = new Node(1);
  let tail = new_head;

  //Looking for nodes with values less than the input
  while (curr_node !== null) {
    if (curr_node.val < x) {
      tail.next = new Node(curr_node.val);
      tail = tail.next;
    }
    curr_node = curr_node.next;
  }

  //Looking for nodes with values equal to input
  curr_node = head;
  while (curr_node !== null) {
    if (curr_node.val === x) {
      tail.next = new Node(curr_node.val);
      tail = tail.next;
    }
    curr_node = curr_node.next;
  }

  //Looking for values greater than the input
  curr_node = head;
  while (curr_node !== null) {
    if (curr_node.val > x) {
      tail.next = new Node(curr_node.val);
      tail = tail.next;
    }
    curr_node = curr_node.next;
  }
  return new_head.next;
}

const node = new Node(3);
const node_1 = new Node(2);
const node_2 = new Node(1);
const node_3 = new Node(5);
const node_4 = new Node(5);
const node_5 = new Node(8);
const node_6 = new Node(1);

node.next = node_1;
node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_4;
node_4.next = node_5;
node_5.next = node_6;

//Better approach - Doing a single traversal and using constant space
//TC O(N) & SC O(1)

function reOrderListI(head, x) {
  let small_head = new Node(-1),
    small_tail = small_head;
  let equal_head = new Node(-1),
    equal_tail = equal_head;
  let great_head = new Node(-1),
    great_tail = great_head;

  let curr_node = head;

  while (curr_node !== null) {
    if (curr_node.val < x) {
      small_tail.next = curr_node;
      small_tail = small_tail.next;
    } else if (curr_node.val === x) {
      equal_tail.next = curr_node;
      equal_tail = equal_tail.next;
    } else {
      great_tail = curr_node;
      great_tail = great_tail.next;
    }

    curr_node = curr_node.next;
  }

  if (equal_head.next !== null) {
    small_tail.next = equal_head.next;
    equal_tail.next = great_head.next;
  } else {
    small_tail.next = great_head.next;
  }

  great_tail.next = null;
  return small_head.next;
}

/*------------------------------------*/

//PROBLEM 2: CREATE A COPY OF THE GIVEN LINKED LIST

/*
PROBLEM DESCRIPTION

A linked list is given such that each node contains an additional random 
pointer which could point to any node in the list or null.

Return a deep copy of the list i.e. the head of the copied linked list.

The deep copy should consist of exactly n brand new nodes, where each new 
node has its value set to the value of its corresponding original node. 
Both the next and random pointer of the new nodes should point to new 
nodes in the copied list such that the pointers in the original list 
and copied list represent the same list state. None of the pointers 
in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, 
where X.random --> Y, then for the corresponding two nodes x and y 
in the copied list, x.random --> y.

The original list should be restored if modified.
*/

//Brute force approach
//TC O(N) - 2 traversals and SC O(N)
function deepCopyLinkedList(head) {
  let node_copy = new Node(-1);
  let prev_node = node_copy;

  let curr_node = head;

  while (curr_node !== null) {
    prev_node.next = new Node(curr_node.val);
    prev_node = prev_node.next;

    curr_node.copy = prev_node;
    curr_node = curr_node.next;
  }

  curr_node = head;

  while (curr_node !== null) {
    let copy_node = curr_node.copy;
    if (curr_node.random === null) {
      copy_node.random = null;
    } else {
      copy_node.random = curr_node.random.copy;
    }

    curr_node = curr_node.next;
  }

  //Restoring the original list

  curr_node = head;
  while (curr_node !== null) {
    delete curr_node.copy;
    curr_node = curr_node.next;
  }

  return node_copy.next;
}

/*-----------------------------*/

//PROBLEM 3 : MERGE 2 SORTED LINKED LIST

/*
PROBLEM DESCRIPTION

Given 2 sorted linked lists, merge them into a new sorted linked list 
and return head of the merged list. The new list should be made by 
splicing (adjusting the pointers) together the nodes of the first two lists.
*/

//BRUTE FORCE - CREATE A NEW LINKED LIST - TC O(M+N) & SC O(1)

//EFFICIENT APPROACH - TC O(M+N) & SC O(1)

function mergeLists(head1, head2) {
  let head, p1, p2;

  if (head1.val <= head2.val) {
    head = head1;
    p1 = head.next;
    p2 = head2;
  } else {
    head = head2;
    p1 = head.next;
    p2 = head1;
  }

  let prev_node = head;

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      prev_node.next = p1;
      prev_node = prev_node.next;
      p1 = p1.next;
    } else {
      prev_node.next = p2;
      prev_node = prev_node.next;
      p2 = p2.next;
    }
  }

  while (p1 !== null) {
    prev_node.next = p1;
    prev_node = prev_node.next;
    p1 = p1.next;
  }

  while (p2 !== null) {
    prev_node.next = p2;
    prev_node = prev_node.next;
    p2 = p2.next;
  }

  return head;
}

//Better readable code
function mergeListsI(l1, l2) {
  let head = new Node(-1);

  let p1 = l1,
    p2 = l2;
  let prev = head;

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      prev.next = p1;
      p1 = p1.next;
    } else {
      prev.next = p2;
      p2 = p2.next;
    }
    prev = prev.next;
  }

  while (p1 !== null) {
    prev.next = p1;
    prev = prev.next;
    p1 = p1.next;
  }

  while (p2 !== null) {
    prev.next = p2;
    prev = prev.next;
    p2 = p2.next;
  }

  return head.next;
}

/*-------------------------------------*/

//PROBLEM 4: FIND THE INTERSECTION POINT OF TWO LISTS

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

//If we didn't care about retaining the original structure of the linked lists
//we would have used the mark and verify pattern. The first marked node would have been
//the intersection and in case of equal length lists, we just compare the addresses of the
//nodes after checking if the node is marked or not

//TC O(max(M,N)) & SC O(M+N)

//Constant space approach

function intersectionOfLists(head1, head2) {
  let len1 = getLengthOfList(head1),
    len2 = getLengthOfList(head2);

  let long_head = len1 >= len2 ? head1 : head2;
  let short_head = long_head === head1 ? head2 : head1;

  let diff = Math.abs(len1 - len2);

  let ref_long = long_head;

  for (let i = 0; i < diff; i++) ref_long = ref_long.next;

  let ref_short = short_head;

  while (ref_short !== null && ref_long !== null) {
    if (ref_long === ref_short) return ref_long;

    ref_long = ref_long.next;
    ref_short = ref_short.next;
  }

  return null;
}

function getLengthOfList(head) {
  let ref = head;
  let len = 0;
  while (ref !== null) {
    len++;
    ref = ref.next;
  }

  return len;
}

/*--------------------------------------*/

//PROBLEM 5 : ADD TWO NUMBERS REPRESENTED AS LINKED LISTS

/*
Problem Description

You’re given two numbers represented by two linked lists, where each node contains 
a single digit. The digits are stored in forward order i.e the one’s digit is at 
the tail of the list. Write a function that adds the two numbers and returns the 
sum as a linked list in the same order.
*/

//BRUTE FORCE TC O(N) 3 traversals and SC O(1) if the original structure of the linked lists
//shouldn't be maintained

function addLists(headA, headB) {
  let { length: lenA, head: rev_A } = reverseList(headA);
  let { length: lenB, head: rev_B } = reverseList(headB);

  let long_head = lenA >= lenB ? rev_A : rev_B;

  let short_head = long_head === rev_A ? rev_B : rev_A;

  let carry = 0;

  let res_head = new Node(-1),
    ref = res_head;

  while (long_head !== null && short_head !== null) {
    let sum = carry + long_head.val + short_head.val;

    ref.next = new Node(sum % 10);
    carry = Math.floor(sum / 10);

    long_head = long_head.next;
    short_head = short_head.next;

    ref = ref.next;
  }

  while (long_head !== null) {
    let sum = carry + long_head.val;

    ref.next = new Node(sum % 10);

    carry = Math.floor(sum / 10);

    long_head = long_head.next;
    ref = ref.next;
  }

  if (carry !== 0) {
    ref.next = new Node(carry);
    ref = ref.next;
  }

  return reverseList(res_head.next).head;
}

function reverseList(head) {
  if (head === null) return head;

  let prev_node = null,
    next_node,
    curr_node = head;

  let len = 0;

  while (curr_node !== null) {
    next_node = curr_node.next;
    curr_node.next = prev_node;
    prev_node = curr_node;

    curr_node = next_node;
    len++;
  }

  return { head: prev_node, length: len };
}

const a1 = new Node(9);
const a2 = new Node(8);
const a3 = new Node(7);

const a4 = new Node(9);
const a5 = new Node(8);
const a6 = new Node(7);

a1.next = a2;
a2.next = a3;

a4.next = a5;
a5.next = a6;

console.log(addLists(a1, a4));
