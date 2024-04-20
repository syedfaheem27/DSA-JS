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
