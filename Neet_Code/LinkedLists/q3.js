//MEDIUM: Remove duplicates from sorted linked list II

/*
Problem Description

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. Return the linked list sorted as well.
*/

//Approach 1 : Mark and modify
//TC O(N) Two iterations
//SC O(N) Marking the nodes

function removeDuplicates(head) {
  if (head === null) return head;
  let curr = head.next;
  let prev = head;
  while (curr !== null) {
    if (prev.val === curr.val) {
      prev.has = true;
      curr.has = true;
    }
    prev = curr;
    curr = curr.next;
  }
  let new_node = new ListNode(-1);
  new_node.next = head;
  (curr = head), (prev = new_node);
  let ref = null;
  while (curr !== null) {
    if (curr.has) {
      ref = curr.next;
      prev.next = ref;
      curr = ref;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return new_node.next;
}

//Approach 2 : Three Pointer Pattern

//TC O(N) A single iteration
//SC O(1)

function removeDuplicatesI(head) {
  if (head === null) return head;

  let new_node = new ListNode(-1);
  new_node.next = head;
  let prev = head,
    curr = head.next;

  let ref = new_node;

  while (curr !== null) {
    if (curr.val === prev.val) {
      while (curr !== null && curr.val === prev.val) {
        prev = curr;
        curr = curr.next;
      }

      ref.next = curr;
      prev = ref;
    } else {
      ref = prev;
      prev = curr;
      curr = curr.next;
    }
  }

  return new_node.next;
}

/*----------------------------------------------*/
