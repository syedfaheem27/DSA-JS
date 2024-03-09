//PROBLEM 1

/*
Problem Description

Given a linked list(need not be sorted) with duplicates, 
remove all duplicates, such that only the first occurrence 
of each element must remain in the LL, and return the head.
*/

//Can't sort the linked list as it would disturb the natural
// order of the nodes

//Brute force - Use Two loops
//TC O(N^2) & SC O(1)

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeDuplicatesI(head) {
  let curr_node = head;

  while (curr_node !== null) {
    let prev_node = curr_node;
    let node = curr_node.next;

    while (node !== null) {
      if (node.val === curr_node.val) prev_node.next = node.next;

      prev_node = node;
      node = node.next;
    }
    curr_node = curr_node.next;
  }

  return head;
}

const ll = new ListNode(3);
const ll_1 = new ListNode(1);
const ll_2 = new ListNode(3);
const ll_3 = new ListNode(1);
const ll_4 = new ListNode(4);

ll.next = ll_1;
ll_1.next = ll_2;
ll_2.next = ll_3;
ll_3.next = ll_4;

//Efficient Approach
//Using maps

// TC O(N) & SC O(N)

function removeDuplicatesII(head) {
  let map = new Map();

  let curr_node = head;
  while (curr_node !== null) {
    if (!map.has(curr_node.val)) map.set(curr_node.val, curr_node);
    curr_node = curr_node.next;
  }

  let node_arr = Array.from(map.entries()).map((el) => el[1]);

  for (let i = 1; i < node_arr.length; i++) node_arr[i - 1].next = node_arr[i];

  node_arr[node_arr.length - 1].next = null;

  return head;
}

//Best approach

//Using sets

//TC O(N) & SC O(N)
function removeDuplicatesIII(head) {
  let curr_node = head;
  let prev_node = null;

  let set = new Set();

  while (curr_node !== null && curr_node.next !== null) {
    if (set.has(curr_node.val)) {
      prev_node.next = curr_node.next;
    } else {
      set.add(curr_node.val);
      prev_node = curr_node;
    }

    curr_node = curr_node.next;
  }

  return head;
}

console.log(removeDuplicatesIII(ll));
