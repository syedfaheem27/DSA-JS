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
