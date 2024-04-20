//MEDIUM: Swapping Nodes in a linked list

/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values 
of the kth node from the beginning and the kth node from the 
end (the list is 1-indexed).
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  let curr_node = head;

  for (let i = 1; i < k; i++) curr_node = curr_node.next;

  let front_swap = curr_node;
  let back_swap = head;

  while (curr_node.next !== null) {
    back_swap = back_swap.next;
    curr_node = curr_node.next;
  }

  let temp = front_swap.val;
  front_swap.val = back_swap.val;
  back_swap.val = temp;

  return head;
}

/*-------------------------*/

//MEDIUM: Reverse Linked List in between

/*
Given the head of a singly linked list and two integers left and right 
where left <= right, reverse the nodes of the list from position left 
to position right, and return the reversed list.
*/

function reverseBetween(head, left, right) {
  if (left === right) return head;

  let count = 1;

  let curr_node = head;
  let prev_node = null;

  let start = null;
  let next = null;

  while (curr_node !== null) {
    if (count === left) start = prev_node;

    if (count === right) {
      next = curr_node.next;
      break;
    }

    prev_node = curr_node;
    curr_node = curr_node.next;
    count++;
  }

  const reverseLinkedList = function (start, end) {
    let curr = start;
    let prev = null,
      ref = null;

    while (curr !== end) {
      ref = curr.next;
      curr.next = prev;
      prev = curr;
      curr = ref;
    }
    curr.next = prev;
  };

  curr_node.next = null;

  if (left === 1) {
    reverseLinkedList(head, curr_node);
    head.next = next;

    return curr_node;
  }

  let rev_start = start.next;

  start.next = null;
  reverseLinkedList(rev_start, curr_node);

  start.next = curr_node;
  rev_start.next = next;

  return head;
}
