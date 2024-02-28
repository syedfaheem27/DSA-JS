//PROBLEM 1

//SWAPPING EVEN AND ODD BITS

/*
PROBLEM DESCRIPTION

Given an unsigned integer N, swap all odd bits with even bits. 
Every even position bit is swapped with the adjacent bit on the 
right side and every odd position bit is swapped with adjacent 
on the left side. Assume a 32 bit integer.

Hint: To avoid negative values caused by integer overflow, 
utilize BigInt in your JavaScript code for handling large 
integer computations.BigInt is a JavaScript built-in object 
used to represent integers larger than the range supported 
by the Number primitive.
*/

//BRUTE FORCE APPROACH
//TC O(1) & SC O(1)
function swapOddEven(n) {
  let num = BigInt(n);

  for (let i = 1; i <= 32; i += 2) {
    let mask_1 = BigInt(1 << i);
    let mask_2 = BigInt(1 << (i - 1));

    let num_1 = num & mask_1;
    let num_2 = num & mask_2;

    if (num_1 > 0) num_1 = 1;
    if (num_2 > 0) num_2 = 1;

    if (num_1 !== num_2) {
      num = num ^ mask_1;
      num = num ^ mask_2;
    }
  }

  return num;
}

//Better Approach

//Apply a bit mask over all even bits and then over all odd bits
//Shift the even bit mask right by 1 and left bit mask left by 1

function swapOddEvenI(n) {
  let num = BigInt(n);

  let even_mask = BigInt(0xaaaaaaaa) & num;
  let odd_mask = BigInt(0x55555555) & num;

  even_mask = even_mask >> 1n;
  odd_mask = odd_mask << 1n;

  return even_mask | odd_mask;
}

/*----------------------------*/

//PROBLEM 2

//Reverse the bits of a given number
//TC O(logN) & SC O(1)

function reverseBits(n) {
  let num = BigInt(n);

  let res_num = 0n;
  let count = 32n;

  while (num) {
    res_num = res_num << 1n;
    if ((num & 1n) > 0) res_num = res_num | 1n;

    num = num >> 1n;
    count--;
  }

  return res_num << count;
}
/*----------------------------*/

//PROBLEM 3

//FIND THE NUMBER OF BITS TO BE FLIPPED TO CONVERT ONE
//NUMBER TO THE OTHER

//BRUTE FORCE

//TC O(logN) & SC O(1)
function flippedBitsI(a, b) {
  let num1 = BigInt(a);
  let num2 = BigInt(b);

  let count = 0;

  while (num1 && num2) {
    let mask = 1n;

    if ((num1 & mask) !== (num2 & mask)) count++;

    num1 = num1 >> 1n;
    num2 = num2 >> 1n;
  }

  return count;
}

//Efficient algorithm

//Kernighan's algorithm
//TC O(no.of set bits) & SC O(1)

function flippedBitsII(a, b) {
  let num1 = BigInt(a);
  let num2 = BigInt(b);

  let num3 = num1 ^ num2;

  let rsbm = num3 & -num3;
  let count = 0;
  while (num3 !== 0n) {
    num3 = num3 ^ rsbm;
    rsbm = num3 & -num3;
    count++;
  }

  return count;
}
