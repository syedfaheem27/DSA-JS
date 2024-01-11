// PROBLEM 1

//FIND THE GCD OF TWO NUMBERS

// METHOD 1 : ITERATIVE APPROACH

// TC - O(|a-b|) which is a linear time complexity and thus, it can fail certain tests
// SC- O(1)

function gcdI(a, b) {
  if (a === b) return a;

  let large_num = a > b ? a : b;
  let small_num = a > b ? b : a;
  let temp;

  while (large_num !== small_num) {
    if (large_num < small_num) {
      temp = large_num;
      large_num = small_num;
      small_num = temp;
    }

    large_num -= small_num;
  }

  return small_num;
}

// METHOD 2 : BETTER ITERATIVE APPROACH

//The time here is increased by repeated subtractions which can be avoided by a single operation
//which is the modulo operator - it does exactly what we did but in a single operation and thus
//skipping all the unnecessary steps in between.

// TC - O(log(min(a,b))) , the input data is being divided in every iteration, resulting in a
//logarithmic variation and you can clearly see how changing the min. of the two changes the TC

//SC - O(1)

function gcdII(a, b) {
  if (a === b) return a;

  let large_num = a > b ? a : b;
  let small_num = a > b ? b : a;
  let temp;

  while (large_num > 0) {
    if (large_num < small_num) {
      temp = large_num;
      large_num = small_num;
      small_num = temp;
    }

    large_num = large_num % small_num;
  }

  return small_num;
}

/////////////////////////////////////////////////

//Now, the above two codes can be written using recursion and nothing will
//change except for the auxillary SC.

// METHOD 3 RECURSIVE APPROACH

//TC - O(log(min(a,b))) and SC - O(min(a,b))

function gcdIII(a, b) {
  if (b === 0) return a;

  //   return a > b ? gcdIII(b, a % b) : gcdIII(a, b % a);
  return gcdIII(b, a % b);

  //   if you carefully look at the two return statements
  //   they are doing the same thing

  //  The first one is quite clear what it does
  //  The second one works perfectly when b is the smallest of the two
  //  and in the case where b is the largest, it flips the numbers and makes
  //  sure that b always becomes the smallest one
}
