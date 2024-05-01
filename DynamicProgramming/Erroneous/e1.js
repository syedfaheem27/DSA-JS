//1. Frog Jump

/*
Problem Description

There is a frog on the '1st' step of an 'N' stairs long staircase. 
The frog wants to reach the 'Nth' stair. 'HEIGHT[i]' is the height 
of the '(i+1)th' stair.If Frog jumps from 'ith' to 'jth' stair, the 
energy lost in the jump is given by absolute value of ( HEIGHT[i-1] - HEIGHT[j-1] ). 
If the Frog is on 'ith' staircase, he can jump either to '(i+1)th' stair or to '(i+2)th' 
stair. Your task is to find the minimum total energy used by the frog to reach from 
'1st' stair to 'Nth' stair.

For Example
If the given ‘HEIGHT’ array is [10,20,30,10], the answer 20 as the frog can 
jump from 1st stair to 2nd stair (|20-10| = 10 energy lost) and then a jump 
from 2nd stair to last stair (|10-20| = 10 energy lost). So, the total energy lost is 20.
*/

//Brute force
function frogJump(n, heights) {
  let jumpInfo = {
    heights,
    len: n,
    currPos: 0,
    currEnergy: 0,
  };
  return getMinimumEnergyPath(jumpInfo);
}

function getMinimumEnergyPath(jumpInfo) {
  let { len: n, heights, currPos, currEnergy } = jumpInfo;
  //   console.log(currPos, currEnergy);
  if (currPos === n - 1) return 0;

  if (currPos >= n) return -1;

  let leftEnergy = getMinimumEnergyPath({
    len: n,
    heights,
    currPos: currPos + 1,
    currEnergy,
  });

  let rightEnergy = getMinimumEnergyPath({
    len: n,
    heights,
    currPos: currPos + 2,
    currEnergy,
  });

  if (leftEnergy !== -1 && rightEnergy !== -1) {
    let temp_left =
      leftEnergy + Math.abs(heights[currPos] - heights[currPos + 1]);
    let temp_right =
      rightEnergy + Math.abs(heights[currPos] - heights[currPos + 2]);
    currEnergy += Math.min(temp_left, temp_right);
  } else if (leftEnergy !== -1) {
    currEnergy +=
      leftEnergy + Math.abs(heights[currPos] - heights[currPos + 1]);
  }

  return currEnergy;
}

const arr =
  "17 8 16 2 8 17 9 8 15 15 5 10 8 16 11 8 3 2 10 18 5 5 6 4 18 1 11 8 18 2 13 8 20 17 17 9 7 14 9 11 7 18 17";

const newArr = arr
  .trim()
  .split(" ")
  .map((el) => +el);
console.log(frogJump(newArr.length, newArr));

//The function never returns

//TODO: Figure out why
