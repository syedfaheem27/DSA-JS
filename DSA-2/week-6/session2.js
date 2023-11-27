/*
Problem Description
Given two numbers, write a program to count the number of bits 
that need to be flipped to convert the first number to the second number.
*/

//Method-1 Not that efficient

function flippedNum(a, b) {
  //Method-1
  //Precision error

  // let c = a ^ b;
  // let flipped = 0;

  // while (c !== 0) {
  //   if ((c & 1n) > 0) flipped++;
  //   c = c >> 1;
  // }
  // return flipped;

  //Method-2
  //No errors due to precision
  //But not efficient in case of memory and run time

  a = BigInt(a.toString());
  b = BigInt(b.toString());

  let c, d;
  let flipped = 0;

  while (a !== 0n || b !== 0n) {
    c = a & 1n;
    d = b & 1n;

    if (c !== d) flipped++;
    a = a >> 1n;
    b = b >> 1n;
  }

  return flipped;
}

///////////////////////
//Efficient method using the kernighan's algorithm

function flippedBits(a, b) {
  let targetNum = a ^ b;

  if (targetNum === 4294967295) return 32;

  let count = 0;
  let rsbm = targetNum & -targetNum;
  while (targetNum !== 0) {
    targetNum = targetNum & rsbm;
    rbsm = targetNum & -targetNum;
    count++;
  }

  return count;
}
