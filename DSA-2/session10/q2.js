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
