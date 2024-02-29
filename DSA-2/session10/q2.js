//PROBLEM 1

//FIND THE ONE'S COMPLIMENT OF A NUMBER

//TC O(1)  & SC O(1)
function onesCompliment(n) {
  let numBits = Math.floor(Math.log(n) / Math.log(2)) + 1;

  let bitMask = (1 << numBits) - 1;

  return n ^ bitMask;
}

/*-------------------------*/

//PROBLEM 2

//FIND THE RIGHT MOST SET BIT
function rightSet(n) {
  return n & -n;
}

/*------------------------*/

//PROBLEM 3

//FIND THE NUMBER OF ON BITS

//Hamming weight
//Efficient method
function numOnBits(n) {
  let num = BigInt(n);

  let count = 0;
  let rsbm = num & -num;

  while (num !== 0n) {
    num = num ^ rsbm;
    rsbm = num & -num;
    count++;
  }

  return count;
}

/*----------------------------------*/

//PROBLEM 4

/*
PROBLEM DESCRIPTION

Given an array in which all numbers except
two are repeated once. (i.e. we have 2k+2 
numbers and k numbers are occurring twice 
and remaining two have occurred once).

Find those two numbers in the most efficient way. 
Return the two numbers in a sorted manner.
*/

//A lot of methods to do but efficient one is using bit manipulation

//TC O(n) & SC O(1)

function uniqElI(arr) {
  let n = arr.length;

  let all_xor = 0;
  for (let i = 0; i < n; i++) all_xor ^= arr[i];

  let rsbm = all_xor & -all_xor;

  let num1 = 0,
    num2 = 0;

  for (let i = 0; i < n; i++) {
    if ((arr[i] & -arr[i]) === rsbm) num1 ^= arr[i];
    else num2 ^= arr[i];
  }

  return num1 <= num2 ? [num1, num2] : [num2, num1];
}

/*--------------------------*/
//PROBLEM 5

//FIND THE MISSING NUMBER

/*
PROBLEM DESCRIPTION

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

*/

//Two ways to arrive at TC O(n) & SC O(1)

//1- using bit manipulation
//2- using Arithemtic progression
function missingNum(arr) {
  let n = arr.length;

  let all_xor = 0;
  let arr_xor = 0;
  for (let i = 0; i <= n; i++) {
    all_xor ^= i;
    arr_xor = i !== n ? arr_xor ^ arr[i] : arr_xor;
  }

  return arr_xor ^ all_xor;
}

/*--------------------------*/

//PROBLEM 6

/*
PROBLEM DESCRIPTION

Given an integer array nums where every element appears three times except for one, 
which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

//There are multiple ways to do this - sorting and grouping,
//using maps but the efficient one is using bit manipulation

//Efficient approach

//We know that the result will have set bits of the form 3n+1

//Now, at each level we will maintain the set bits who are of the form
//3n, 3n+1, 3n+2

//At the end, return the num with set bits of the form 3n+1

//TC O(n) & SC O(1)

function uniqElII(arr) {
  let _3n = 0xffffffff; //Initially, 0 set bits which are of the form 3n
  let _3n_1 = 0;
  let _3n_2 = 0;

  let common_3n, common_3n_1, common_3n_2;

  for (let i = 0; i < arr.length; i++) {
    //Finding out the retained bits at each level
    common_3n = _3n & arr[i];
    common_3n_1 = _3n_1 & arr[i];
    common_3n_2 = _3n_2 & arr[i];

    //Now we need to toggle the set bits at each level
    _3n ^= common_3n;
    _3n_1 ^= common_3n_1;
    _3n_2 ^= common_3n_2;

    //Now we need to switch on the bits in respective categories
    _3n |= common_3n_2;
    _3n_1 |= common_3n;
    _3n_2 |= common_3n_1;
  }

  return _3n_1;
}
