//PROBLEM 1 : GIVEN A LINKED LIST - DETERMINE IF IT HAS A CYCLE IN IT

/*
PROBLEM DESCRIPTION

Given a linked list, determine if it has a cycle in it.

A linked list cycle means that for last node of LL, 
called last, last->next is not NULL, but instead 
points to some other node of the LL(not last itself)

*/

//Floyd's Algo - using fast and slow pointers
function cycleInLinkedList(head) {
  let fast_pointer = head,
    slow_pointer = head;

  while (fast_pointer !== null && fast_pointer.next !== null) {
    fast_pointer = fast_pointer.next.next;
    slow_pointer = slow_pointer.next;

    if (fast_pointer === slow_pointer) return true;
  }

  return false;
}

/*------------------------------*/

//PROBLEM 2 : REMOVE THE CYCLE IN A LINKED LIST

/*
PROBLEM DESCRIPTION

Given only the head of a linked list, check whether the linked list contains 
cycle or not. If the linked list does not contain a cycle return false, 
otherwise remove the cycle and return true.

*/

//Best approach
//Floyd's algo

function removeCycle(head) {
  //If cycle starts on the head node
  if (head.next === head) {
    head.next = null;
    return true;
  }

  let fast_pointer = head,
    slow_pointer = head;

  let has_cycle = false;

  while (fast_pointer !== null && fast_pointer.next !== null) {
    fast_pointer = fast_pointer.next.next;
    slow_pointer = slow_pointer.next;

    if (fast_pointer === slow_pointer) {
      has_cycle = true;
      break;
    }
  }

  if (!has_cycle) return false;

  fast_pointer = head;
  slow_prev = null;

  while (fast_pointer !== slow_pointer) {
    fast_pointer = fast_pointer.next;
    slow_prev = slow_pointer;
    slow_pointer = slow_pointer.next;
  }

  slow_prev.next = null;

  return true;
}

/*---------------------------------------------*/
