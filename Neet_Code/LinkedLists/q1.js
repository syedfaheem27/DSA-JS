// PROBLEM 1. MERGE TWO SORTED LISTS

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
