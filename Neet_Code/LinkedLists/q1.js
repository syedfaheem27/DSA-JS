//EASY: MERGE TWO SORTED LISTS

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {Node} list1
 * @param {Node} list2
 * @return {Node}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new Node(-1);
  let tail = head;

  let pointer_1 = l1,
    pointer_2 = l2;

  while (pointer_1 !== null && pointer_2 !== null) {
    if (pointer_1.val <= pointer_2.val) {
      tail.next = pointer_1;
      pointer_1 = pointer_1.next;
    } else {
      tail.next = pointer_2;
      pointer_2 = pointer_2.next;
    }
    tail = tail.next;
  }

  while (pointer_1 !== null) {
    tail.next = pointer_1;
    pointer_1 = pointer_1.next;
  }

  while (pointer_2 !== null) {
    tail.next = pointer_2;
    pointer_2 = pointer_2.next;
  }

  return head.next;
};

/*----------------------------------------*/

//MEDIUM: REORDER LINKED LIST

// APPROACH 1: TC O(N) & SC O(N)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let prev_node = null,
    curr_node = head;

  while (curr_node !== null) {
    curr_node.previous = prev_node;
    prev_node = curr_node;

    curr_node = curr_node.next;
  }
  let rear = prev_node;

  let front = head;
  let bool = true;

  let temp_node;

  while (front !== rear) {
    if (bool) {
      temp_node = front.next;
      front.next = rear;
      front = temp_node;
    } else {
      rear.next = front;
      rear = rear.previous;
    }

    bool = !bool;
  }
  rear.next = null;
};

// Approach 2 : SC O(1)

function reorderListI(head) {
  let fast = head,
    slow = head;

  let tail = null;

  while (fast !== null && fast.next !== null) {
    tail = fast.next;

    fast = fast.next.next;
    slow = slow.next;
  }

  //If the fast pointer is null, tail will point to the last node
  //and if not, the tail will point to the second last node and thus
  //fast will point to the last node

  //Decouple the lists
  slow.next = null;

  //Reverse the second half of the list

  if (fast !== null) tail = fast;
}

function reverseLinkedList(head) {
  let prev_node = null,
    curr_node = head,
    ref_node;

  while (curr_node !== null) {
    ref_node = curr_node.next;
    curr_node.next = prev_node;
    prev_node = curr_node;
    curr_node = ref_node;
  }

  return prev_node === null ? curr_node : prev_node;
}

/*----------------------------------------------*/

//MEDIUM: Remove Nth Node from end of the list

//Approach 1: Traverse the list and find length, then traverse again and remove
//2 iterations

//Efficient approach: TC O(N) - 1 iteration, SC O(1)
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr_node = head;

  for (let i = 0; i < n; i++) curr_node = curr_node.next;

  //If the first node is to be deleted
  if (curr_node === null) {
    head = head.next;
    return head;
  }

  let prev_node = head;

  while (curr_node.next !== null) {
    prev_node = prev_node.next;
    curr_node = curr_node.next;
  }

  prev_node.next = prev_node.next.next;

  return head;
};
