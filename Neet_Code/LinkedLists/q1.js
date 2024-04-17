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
  return head;
};

//TODO: DO IT IN CONSTANT SPACE
