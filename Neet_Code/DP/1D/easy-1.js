//1. Min Cost Climbing Stairs

/*
Problem Description

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/

//BRUTE FORCE
//TC O(2^n+1) & SC O(N)

function minCostStairs(cost) {
  let n = cost.length;
  //Starting from 0
  let e0 = findMinCost(n, cost, 0);
  //starting from 1
  let e1 = findMinCost(n, cost, 1);
  return Math.min(e1, e0);
}

function findMinCost(n, cost, index) {
  if (index === n) return 0;
  if (index === n - 1) return cost[n - 1];

  let leftMin = findMinCost(n, cost, index + 1);
  let rightMin = findMinCost(n, cost, index + 2);

  let leftCost = cost[index] + leftMin;
  let rightCost = cost[index] + rightMin;

  return Math.min(leftCost, rightCost);
}

// console.log(minCostStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
// console.log(minCostStairs([10, 15, 20]));

//Optimisations

//Memoization
//TC O(N) & SC O(N) - single iteration
function minCostStairsI(cost) {
  let n = cost.length;

  //Each element represents the minimum energy from that index to the top
  let minCosts = Array.from({ length: n + 1 });
  minCosts[n] = 0;
  minCosts[n - 1] = cost[n - 1];

  populateMinCosts(n, cost, 0, minCosts);
  populateMinCosts(n, cost, 1, minCosts);

  return Math.min(minCosts[0], minCosts[1]);
}

function populateMinCosts(n, cost, index, minCosts) {
  if (minCosts[index] !== undefined) return minCosts[index];

  let leftMin = populateMinCosts(n, cost, index + 1, minCosts);
  let rightMin = populateMinCosts(n, cost, index + 2, minCosts);

  let leftCost = leftMin + cost[index];
  let rightCost = rightMin + cost[index];

  minCosts[index] = Math.min(leftCost, rightCost);
  return minCosts[index];
}

// Tabulation
//TC O(N) & SC O(N) - two iterations and two arrays
function minCostStairsII(cost) {
  let n = cost.length;

  let minCostsI = Array.from({ length: n + 1 });

  //Here, the minCosts array represents the min cost it
  //takes to reach the step at a particular index

  //Starting from 0th index
  minCostsI[0] = 0;

  for (let i = 1; i < n; i++) {
    let leftCost = cost[i - 1] + minCostsI[i - 1];
    let rightCost;

    if (i > 1) rightCost = cost[i - 2] + minCostsI[i - 2];
    else rightCost = Number.MAX_SAFE_INTEGER;

    minCostsI[i] = Math.min(leftCost, rightCost);
  }

  // For the nth step, cost[n]=0

  let leftCost = cost[n - 1] + minCostsI[n - 1];
  let rightCost = cost[n - 2] + minCostsI[n - 2];
  minCostsI[n] = Math.min(leftCost, rightCost);

  //Starting from 1st index
  let minCostsII = Array.from({ length: n + 1 });

  //keeping the 0th index as large would prevent us to make a jump to the 2nd index from
  //the 0th index, thus preventing to start from the 0th index
  minCostsII[0] = Number.MAX_SAFE_INTEGER;
  minCostsII[1] = 0;

  for (let i = 2; i < n; i++) {
    let leftCost = cost[i - 1] + minCostsII[i - 1];
    let rightCost = cost[i - 2] + minCostsII[i - 2];

    minCostsII[i] = Math.min(leftCost, rightCost);
  }

  //For the nth step, cost[n]=0
  leftCost = cost[n - 1] + minCostsII[n - 1];
  rightCost = cost[n - 2] + minCostsII[n - 2];
  minCostsII[n] = Math.min(leftCost, rightCost);

  return Math.min(minCostsI[n], minCostsII[n]);
}

//Optimising space in Tabulation approach
//TC O(N) & SC O(1) - two iterations

function minCostStairsIII(cost) {
  let n = cost.length;

  //For the instance, when we start at 0th index
  let prev = 0,
    prev_prev = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < n; i++) {
    let leftCost = cost[i - 1] + prev;
    let rightCost;
    if (i > 1) rightCost = prev_prev + cost[i - 2];
    else rightCost = prev_prev;

    prev_prev = prev;
    prev = Math.min(leftCost, rightCost);
  }

  let leftCost = cost[n - 1] + prev;
  let rightCost = cost[n - 2] + prev_prev;

  let zeroStartCost = Math.min(leftCost, rightCost);

  //For the instance, when we start at 1st index
  (prev = 0), (prev_prev = Number.MAX_SAFE_INTEGER);

  for (let i = 2; i < n; i++) {
    let leftCost = cost[i - 1] + prev;
    let rightCost = cost[i - 2] + prev_prev;

    prev_prev = prev;
    prev = Math.min(leftCost, rightCost);
  }

  leftCost = cost[n - 1] + prev;
  rightCost = cost[n - 2] + prev_prev;

  let firstStartCost = Math.min(leftCost, rightCost);

  return Math.min(zeroStartCost, firstStartCost);
}

/*-------------------------------------------------------------*/
