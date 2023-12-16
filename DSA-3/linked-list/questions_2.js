const SinglyLinkedListI = require("./linked_list");

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

console.log(ll_1);
