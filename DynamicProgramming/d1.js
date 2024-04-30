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
