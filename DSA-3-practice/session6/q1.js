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
