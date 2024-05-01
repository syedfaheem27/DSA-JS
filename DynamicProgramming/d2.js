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

// Memoization Approach - O(N) & SC O(N)
function frogJump(n, heights) {
  let minEnergyTillTop = Array.from({ length: n }, () => -1);

  //This array represents the minimum energy required from each index to reach the top
  //As such from the top stair, the enrgy required would be 0;
  minEnergyTillTop[n - 1] = 0;

  fillMinEnergyPaths(n, heights, 0, minEnergyTillTop);
  console.log(minEnergyTillTop[0]);
  return minEnergyTillTop[0];
}

function fillMinEnergyPaths(n, heights, idx, minEnergy) {
  if (idx >= n) return -1;

  if (minEnergy[idx] !== -1) return minEnergy[idx];

  let leftEnergy = fillMinEnergyPaths(n, heights, idx + 1, minEnergy);
  let rightEnergy = fillMinEnergyPaths(n, heights, idx + 2, minEnergy);

  if (leftEnergy !== -1 && rightEnergy !== -1) {
    let left_jump = Math.abs(heights[idx + 1] - heights[idx]);
    let right_jump = Math.abs(heights[idx + 2] - heights[idx]);

    leftEnergy += left_jump;
    rightEnergy += right_jump;
    minEnergy[idx] = Math.min(leftEnergy, rightEnergy);
    return minEnergy[idx];
  }

  if (leftEnergy !== -1) {
    let left_jump = Math.abs(heights[idx + 1] - heights[idx]);
    minEnergy[idx] = leftEnergy + left_jump;
    return minEnergy[idx];
  }
}

const str1 =
  "27 35 43 34 27 19 7 38 16 18 46 13 14 50 34 38 36 34 26 39 6 41 23 1 33 30 45 13 47 13 22 20 3 1 17 26 45 39 22 45 21 11 30 44 36 45 29 27 39 42 40 35 46 31 21 6 31 50 20 50 10 10 24 6 30 29 44 39 42 14 23 12 4 1 35 5 45 40 44 42 47 24 48 16 21 50 34 4 13 5 36 46 20 45 3 13 7 ";
const str2 =
  "8 41 41 19 20 6 25 42 1 15 32 37 35 9 20 20 37 49 20 18 48 20 4 24 4 31 23 13 38 28 7 22 24 49 2 38 28 15 34 22 4 28 44 4 27 28 35 12 38 43 2 33 33 5 38 48 28 24 39 37 5 1 20 39 13 2 9 45 6 2";
const str3 =
  "34 31 6 5 33 34 28 38 29 11 10 40 7 30 3 27 25 48 8 17 10 3 46 18 6 1 14 33 3 44 18 10 4 40 28 14 35 19 43 22 41 27 37 50 40 18 22 9 34 34 27 3 30 43 20 12 6 12 27 19 18 21 23 4 45 25 27 40 16 12 18 34 26 34 4 4 30 35 26 35 11 13 21 46 7 12 45 8 24 38 48 33 6 19 26 50 43 21 18 ";
const str4 =
  "36 15 12 16 3 6 7 33 40 18 45 24 47 34 49 18 22 44 42 6 19 45 8 11 4 32 9 36 3 1 10 41 41 49 31 18 7 14 45 18 32 12 4 10 13 8 4 3 9 18 12 35 15 39 33 42 13 30 12 1 29 15 ";

const convert = (str) =>
  str
    .trim()
    .split(" ")
    .map((el) => +el);
const arr1 = convert(str1);
const arr2 = convert(str2);
const arr3 = convert(str3);
const arr4 = convert(str4);

frogJump(arr1.length, arr1);
frogJump(arr2.length, arr2);
frogJump(arr3.length, arr3);
frogJump(arr4.length, arr4);

//Tabulation Approach

//TC O(N) & SC O(N)

function frogJumpI(n, heights) {
  let dp = Array.from({ length: n });

  dp[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    let left_jump = dp[i + 1];
    let right_jump = dp[i + 2];

    if (left_jump !== undefined && right_jump !== undefined) {
      dp[i] = Math.min(
        left_jump + Math.abs(heights[i] - heights[i + 1]),
        right_jump + Math.abs(heights[i] - heights[i + 2])
      );
    } else if (left_jump !== undefined) {
      dp[i] = left_jump + Math.abs(heights[i] - heights[i + 1]);
    }
  }

  console.log(dp[0]);
  return dp[0];
}

// Optimising Space in tabulation approach

//In this case, we will look at the problem in a different way
//In the previous approaches, the elements of the dp array used to hold
//the minEnergy it would take from that index to the top.
/*



  */
//However, here we would say that, for each step, we will view it as the
//min energy required to reach that step.

function frogJumpII(n, heights) {
  let prev = 0,
    prev_prev = 0;

  for (let i = 1; i < n; i++) {
    let left = prev + Math.abs(heights[i] - heights[i - 1]);
    let right;
    if (i > 1) right = prev_prev + Math.abs(heights[i - 2] - heights[i]);
    else right = Number.MAX_SAFE_INTEGER;

    let curr = Math.min(left, right);
    prev_prev = prev;
    prev = curr;
  }

  return prev;
}
