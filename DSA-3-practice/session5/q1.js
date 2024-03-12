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
