//Two approaches of dynamic programming

//1. Memoization technique (top-down approach)
//2. Tabulation technique (bottom-up approach)

//Problem Fibonacci Numbers

// Traditional recursive approach - TC O(2^n)

//Memoization

//TC O(N) & SC O(N) - recursive stack space

function findFib(n) {
  let fib = [];

  return getFib(n, fib);
}

function getFib(n, fib) {
  if (n <= 1) return n;

  if (fib[n] !== undefined) return fib[n];

  fib[n] = getFib(n - 1, fib) + getFib(n - 2, fib);
  return fib[n];
}

//Tabulation

//TC O(N) & SC O(N)

function findFibI(n) {
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) fib[i] = fib[i - 1] + fib[i - 2];

  return fib[n];
}

//Optimising the space complexity

//SC O(1)

function findFibII(n) {
  let prev_prev_fib = 0;
  let prev_fib = 1;

  if (n === 0) return 0;
  let curr_fib = 1;

  for (let i = 2; i <= n; i++) {
    curr_fib = prev_fib + prev_prev_fib;

    prev_prev_fib = prev_fib;
    prev_fib = curr_fib;
  }

  return curr_fib;
}

/*-------------------------------------------*/

// Climbing Stairs

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1, 2 or 3 steps. In how many distinct ways can you climb to the top?
*/

// Memoization - Top Down approach
//TC O(n) & SC O(n)

/*
Approach

At each step, i am looking if know the possible number of ways to reach the nth step.
If yes - get me that from the array
If no - calculate it recursively
*/

function climbingStairsI(n) {
  let waysToClimb = [];

  calculateSteps(0, n, waysToClimb);
  return waysToClimb[0];
}

function calculateSteps(pos, n, waysToClimb) {
  if (pos === n) {
    return 1;
  }

  if (pos > n) return 0;

  if (waysToClimb[pos] !== undefined) return waysToClimb[pos];

  waysToClimb[pos] =
    calculateSteps(pos + 1, n, waysToClimb) +
    calculateSteps(pos + 2, n, waysToClimb);

  return waysToClimb[pos];
}

//Tabulation (Bottom up approach)

/*
Approach

The way to look at the problem  is slightly different here.
So at each step we're looking at the possible ways to reach that particular step
So, for 0th steo, there's 1 way and for the 1st step also, there's 1 way to reach it
*/

//TC O(n) & SC O(n)

function climbingStairsII(n) {
  if (n <= 1) return 1;

  let waysToReachStep = [];

  waysToReachStep[0] = 1;
  waysToReachStep[1] = 1;

  for (let i = 2; i <= n; i++)
    waysToReachStep[i] = waysToReachStep[i - 1] + waysToReachStep[i - 2];

  return waysToReachStep[n];
}

//Optimising the tabulation approach

//SC O(1) & TC O(n)

function climbingStairsIII(n) {
  if (n <= 1) return 1;

  let prev_prev_ways = 1; //Ways to reach 0th step
  let prev_ways = 1; //ways to reach 1st step

  let curr_ways;

  for (let i = 2; i <= n; i++) {
    curr_ways = prev_prev_ways + prev_ways;

    prev_prev_ways = prev_ways;
    prev_ways = curr_ways;
  }

  return curr_ways;
}
