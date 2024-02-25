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
