/*
Problem Description: Find one's compliment and two's compliment
*/

//Method-1
//TC-O(logn) and SC-O(logn)
function onesComplimentI(n) {
  let binaryArr = [];

  while (n !== 0) {
    binaryArr.push(n % 2);
    n = Math.floor(n / 2);
  }
  binaryArr.reverse();

  for (let i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === 0) binaryArr[i] = 1;
    else binaryArr[i] = 0;
  }

  let output = 0;
  let num = 1;
  for (let i = binaryArr.length - 1; i >= 0; i--) {
    output += num * binaryArr[i];
    num *= 2;
  }

  return output;
}

//Method-2
//Efficient method - TC - O(logn) and SC-O(1)

function onesComplimentII(n) {
  let numBits = Math.floor(Math.log(n) / Math.log(2)) + 1;

  let bitMask = (1 << numBits) - 1;

  return n ^ bitMask;
}

/////////////////////////////////
/*
Problem Description: Find the right most set bit
*/

function rightMostSetBit(n) {
  //-n 2's complement

  //Find 1s complement first and then add 1 to it
  //Then take an and between number and 2s complement
  return n & -n;
}

///////////////////////////////
/*
Problem Description
Write a function that takes an unsigned integer 
and return the number of '1' bits it has 
(also known as the Hamming weight).
*/

//Inefficient and answers might come wrong because of some large input(precision errors)
function numberOfOneBits(n) {
  let mask;
  let count = 0;
  for (let i = 0; i < 32; i++) {
    mask = 1 << i;
    if ((n & mask) > 0) count++;
  }

  console.log(count);
}

//Efficient method -1
function numberOfOneBitsII(n) {
  let num = BigInt(n.toString());
  let count = 0;

  while (num !== 0n) {
    if ((num & 1n) > 0) count++;
    num = num >> 1n;
  }

  console.log(count);
}

// numberOfOneBitsII(599855);

//Brian Kernighan’s Algorithm
function numberOfOneBitsIII(n) {
  //for a number whose 32 bits are set - 4294967295
  //It gives a wrong answer

  if (n === 4294967295) return 32;

  let rsb = n & -n;
  count = 0;

  while (n !== 0) {
    n = n - rsb;
    //n=n^rsb;
    rsb = n & -n;
    count++;
  }
}

numberOfOneBits(4294967295);
///////////////////////////////////////////////////////

/*
Problem Description
Given an array in which all numbers except two are repeated once. 
(i.e. we have 2k+2 numbers and k numbers are occurring twice and 
  remaining two have occurred once).

Find those two numbers in the most efficient way. 
Return the two numbers in a sorted manner.
*/

// function twoNonRepeatingNumbers(N, nums) {}

//TODO: Find out why does numberOfOneBits(4294967295) comes out to be 31 instead of 32

////////////////////////////

/*
Problem Description
Given an array in which all numbers except
two are repeated once. (i.e. we have 2k+2 
numbers and k numbers are occurring twice 
and remaining two have occurred once).

Find those two numbers in the most efficient way. 
Return the two numbers in a sorted manner.
*/

function twoNonRepeatingNums(nums) {
  let n = nums.length;
  let allXOR = 0;

  //taking xor, we will be left with the xor of two different nums
  for (let i = 0; i < n; i++) allXOR ^= nums[i];

  //now if we find the right most set bit in this xor,
  //we can infer that in both the numbers that bit is different.
  //Based on that we can sort such numbers in two groups and take
  //xor of each group which will give us the two numbers

  let rsbm = allXOR & -allXOR;
  let num1 = 0,
    num2 = 0;

  for (let i = 0; i < n; i++) {
    if ((rsbm & nums[i]) > 0) {
      //set bit
      num1 ^= nums[i];
    } else {
      num2 ^= nums[i];
    }
  }

  return num1 > num2 ? [num2, num1] : [num1, num2];
}

// console.log(twoNonRepeatingNums([2, 3, 7, 9, 11, 2, 3, 11]));

////////////////////////////////////////

//TODO:
/*
Given an integer array nums where every element appears three times except for one, 
which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
