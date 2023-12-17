const { SinglyLinkedListI, ListNode } = require("./linked_list");

/*
PROBLEM DESCRIPTION

Given a pointer to a node in a sorted circular singly linked 
list( sorted in ascending order), write a function to insert
 a value K into the list such that the linked list still 
 remains a sorted circular list.


Note1: If the given pointer is null i.e. empty list, 
create a circular list with a new node and return the 
reference to the new node. Otherwise,return the initial 
input pointer given.


Note2: The list could have duplicate values. 
You can insert the new value in any place which will keep the list sorted.
*/

const ll_1 = new SinglyLinkedListI();
ll_1.add(4).add(7).add(9).add(1).add(2);
ll_1.tail.next = ll_1.head;

function insertIntoSortedCircularList(head, insertVal) {
  if (head === null) {
    let newNode = new ListNode(insertVal);
    newNode.next = newNode;
    head = newNode;

    return head;
  }

  let prevNode = head,
    currNode;

  while (prevNode.next !== head) {
    currNode = prevNode.next;

    //CASE-1 If value needs to be inserted somewhere in the ascending portions of the list

    if (prevNode.val <= insertVal && currNode.val >= insertVal) {
      insertNode(prevNode, currNode, insertVal);

      return head;
    }

    //CASE-2 If value needs to be inserted at the point where rotation happens

    //This represents the point where rotation happens
    if (prevNode.val > currNode.val) {
      if (prevNode.val <= insertVal || currNode.val >= insertVal) {
        insertNode(prevNode, currNode, insertVal);

        return head;
      }
    }
  }

  //CASE-3 In cases where there is only a single node or all the values of nodes are equal
  //and the value to be inserted is greater or less than the node values
  //if equal - it will be handled in the while loop above

  insertNode(prevNode, head, insertVal);

  return head;
}

function insertNode(prevNode, currNode, val) {
  let newNode = new ListNode(val);

  prevNode.next = newNode;
  newNode.next = currNode;
}
////////////////////////////////////////////////////////

/*
PROBLEM DESCRIPTION

Given only a reference to a node to be deleted in a singly linked list, 
implement a function to delete the given node. The given node is guaranteed 
to be neither the first, nor the last node.


Note: The node to be deleted is not necessarily the exact middle node but is 
one of nodes that is not at the ends.

Sample Input 1
1 5 2 4 3
3

Sample Output 1
1 5 4 3

Explanation 1
The 3rd node containing 2 has been removed leading to 1 5 4 3.
*/

const ll_2 = new SinglyLinkedListI();
ll_2.add(1).add(5).add(2).add(4).add(3);

function deleteGivenNode(node) {
  let currNode = node,
    nextNode;

  while (currNode.next !== null) {
    nextNode = currNode.next;

    currNode.val = nextNode.val;

    if (nextNode.next === null) currNode.next = null;
    else currNode = nextNode;
  }
}

////////////////////////////////////////////////

/*
PROBLEM DESCRIPTION

Given a linked list, remove the Kth node from the end of the list and return its head.

Note: the given K will always be a valid node.

Sample Input 1
1 5 2 4 3
2

Sample Output 1
1 5 2 3

Explanation 1
The 2nd node from the end is 4, removing which, gives us 1 5 2 3
*/

//Approach - it has multiple appraoches
//1. Iterate over the list to find the size and then iterate again
// and delete (n-k+1)th node where n-size of the linked list

//2. Iterate over the list and store [index,node] in the map
//then delete the node easily based on the required index

//3. Most efficient approach - keep three nodes currNode,prevNode and a ref Node

//move refNode to k places from the head and then traverse the linked list till refNode!==null;
//During that time the currNode would have travelled n-k times and thus would be pointing to
//the (n-k+1)th node. Then delete the node.
//Handle the case when k=n;

function deleteKthToLast(head, k) {
  let refNode = head;

  for (let i = 0; i < k; i++) refNode = refNode.next;

  //case when k=n
  if (refNode === null) {
    head = head.next;
    return head;
  }

  let prevNode = null,
    currNode = head;

  while (refNode !== null) {
    prevNode = currNode;
    currNode = currNode.next;

    refNode = refNode.next;
  }

  prevNode.next = currNode.next;
  return head;
}
