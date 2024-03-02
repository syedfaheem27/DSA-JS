"use strict";
//PROBLEM 1
//FIND THE NEXT GREATER ELEMENT IN THE ARRAY
/*
PROBLEM DESCRIPTION

Given an array A having N elements, the task is to find the next greater element(NGE)
for each element of the array in order of their appearance in the array. If no such
element exists, output -1. This should be achieved with a time complexity of O(n).

Sample Input

1 3 2 4

Sample Output
3 4 4 -1

Explanation 1
In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such greater element, hence -1.
*/
//Brute force - TC O(n2) & SC O(1)
//Efficient method - using stack
//TC O(n) & SC O(1) only including the additional memory
