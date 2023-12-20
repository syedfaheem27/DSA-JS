/*
PROBLEM DESCRIPTION

Given a linked list, determine if it has a cycle in it.

*/

/*
There are multiple approaches for the problem:
1.  Keep a track of all the nodes visited by adding a prop on nodes - isVisited or whatever
2.  Initialize a set and traverse the list and when u find a node that's already there, return that node.

Now, these are not that optimal approaches in case of space.
*/

//Optimal approach - floyds algorithm (Proof attached - image)

function hasCycle(head) {
  let fast_pointer = head,
    slow_pointer = head;

  while (fast_pointer !== null && fast_pointer.next !== null) {
    fast_pointer = fast_pointer.next.next;
    slow_pointer = slow_pointer.next;

    if (fast_pointer === slow_pointer) return true;
  }

  return false;
}

///////////////////////////////////////

//PROBLEM DESCRIPTION

/*
Given only the head of a linked list, check whether the linked list 
contains cycle or not. If the linked list does not contain a cycle 
return false, otherwise remove the cycle and return true.
*/

//(proof attached - image)
function detectAndRemoveCycle(head) {
  let fast_pointer = head,
    slow_pointer = head;
  let prev_slow = null;

  let hasCycle = false;

  while (fast_pointer !== null && fast_pointer.next !== null) {
    prev_slow = slow_pointer;
    slow_pointer = slow_pointer.next;
    fast_pointer = fast_pointer.next.next;

    if (fast_pointer === slow_pointer) {
      hasCycle = true;
      break;
    }
  }

  if (hasCycle) {
    fast_pointer = head;
    while (fast_pointer !== slow_pointer) {
      prev_slow = slow_pointer;
      slow_pointer = slow_pointer.next;
      fast_pointer = fast_pointer.next;
    }

    prev_slow.next = null;
    return true;
  }

  return false;
}
