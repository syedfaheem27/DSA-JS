//PROBLEM 1

//BOOK READING

/*
PROBLEM DESCRIPTION

Ujjwal loves to read story books. There are n piles of books, 
the ith pile has a[i] books. His mom has gone to market and 
will come back in h hours.

Ujjwal can decide his books-per-hour reading speed of k. 
Each hour, he chooses some pile of books and reads k books 
from that pile. If the pile has less than k books, he reads 
all of them instead and will not read any more books during 
this hour.

Ujjwal likes to read slowly but still wants to finish reading 
all the books before his mom returns.

Return the minimum integer k such that he can read all the 
books within h hours.

*/

//Optmised approach  TC O(nlog(m)) where n is the length of book piles and
//m is the maximum number of books in a pile
function bookReading(arr, k) {
  let n = arr.length;

  let max_pile = -1;

  for (let i = 0; i < n; i++) max_pile = Math.max(max_pile, arr[i]);

  let reading_speed;
  let l = 1,
    r = max_pile;

  while (l <= r) {
    let curr_speed = Math.floor((l + r) / 2);

    let total_time = getTotalReadingTime(arr, curr_speed);

    if (total_time <= k) {
      reading_speed = curr_speed;
      r = curr_speed - 1;
    } else l = curr_speed + 1;
  }

  console.log(reading_speed);
}

function getTotalReadingTime(arr, s) {
  let n = arr.length;
  let total_time = 0;

  for (let i = 0; i < n; i++) total_time += Math.ceil(arr[i] / s);

  return total_time;
}

/*----------------------------------*/

//PROBLEM 2

//FIND THE Kth SMALLEST ELEMENT IN A MATRIX

/*
PROBLEM DESCRIPTION

Given nxn matrix where each of the rows and columns are sorted in 
ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, 
not the kth distinct element.

*/

//Brute force - spread the matrix in a linear array and then sort and then
//traverse - TC O(n^2log(n)) & SC )(n^2)

//Optimal Approach
function kthSmallestEl(matrix, k) {
  let n = matrix.length;

  let l = matrix[0][0],
    r = matrix[n - 1][n - 1];

  let result;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let rank = findRank(matrix, mid);

    if (rank <= k) {
      result = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return result;
}

function findRank(matrix, el) {
  let n = matrix.length;

  let rank = 0;

  for (let i = 0; i < n; i++) {
    if (el > matrix[i][n - 1]) {
      rank += n;
      continue;
    }

    //Perform a binary search to find the element
    let l = 0,
      r = n - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (matrix[i][mid] < el) l = mid + 1;
      else r = mid - 1;
    }
    rank += l;
  }

  return rank + 1;
}
/*------------------------------------*/

//PROBLEM 3

//FIND THE MISSING NUMBER IN THE ARRAY

/*
PROBLEM DESCRIPTION

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

//Brute force - sort and find TC O(nlogn) & SC O(1)
//Another approach - utilize an array TC O(n) & SC O(n)

function missingNumber(arr) {
  let n = arr.length;

  let curr_sum = 0,
    req_sum = ((n + 1) / 2) * n;

  for (let i = 0; i < n; i++) curr_sum += arr[i];

  return req_sum - curr_sum;
}

/*----------------------------------*/

//PROBLEM 4

//FORM LARGEST NUMBER USING ARRAY ELEMENTS

/*
PROBLEM DESCRIPTION

Given an array of non negative integers, arrange the elements, 
such that if made into a number, they form the largest number.

For instance,
Given the array [1, 3, 10] , this should be arranged to [3, 1, 10] - 
since the largest possible number formed by these numbers is 3110.
*/

//TODO: What will be the brute force for this

function largestNum(arr) {
  arr.sort((a, b) => {
    let num1 = a + "" + b;
    let num2 = b + "" + a;

    if (num1 > num2) return -1;
    else return 1;
  });
  let str_num = arr.join("");

  return +str_num;
}
