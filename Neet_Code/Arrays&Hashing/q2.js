// PROBLEM 1

//TOP K FREQUENT ELEMENTS

/*
PROBLEM DESCRIPTION

Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.

CONSTRAINTS

-  k is in the range [1, the number of unique elements in the array].
-  It is guaranteed that the answer is unique.
*/

//BRUTE FORCE APPROACH
//TC O(NlogN) & SC O(N)

function kMostFreqEls(arr, k) {
  const n = arr.length;

  const map = new Map();

  for (let i = 0; i < n; i++) map.set(arr[i], map.get(arr[i]) + 1 || 1);

  const sorted_freqEls = [...map].sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      return b[0] - a[0];
    }
  });

  const res_arr = [];
  for (let i = 0; i < sorted_freqEls.length && k > 0; i++) {
    res_arr.push(sorted_freqEls[i][0]);
    k--;
  }

  return res_arr;
}

//TODO: Go through bucket sort to add the optimised solution for this

/*---------------------------------------*/
//PROBLEM 2

// Given an integer numRows, return the first numRows of Pascal's triangle.

//Input: numRows = 5
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//TC O(n2) & SC O(n2)

function pyramidPrinting(k) {
  let res_arr = [];
  res_arr.push([1]);

  for (let i = 1; i < k; i++) {
    res_arr.push([1]);

    for (let j = 1; j < i; j++) {
      res_arr[i][j] = res_arr[i - 1][j] + res_arr[i - 1][j - 1];
    }
    res_arr[i].push(1);
  }

  return res_arr;
}

/*-------------------------------------------*/

//PROBLEM 3

//REMOVE ELEMENT

/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

//OPTIMAL APPROACH
//TC O(N) & SC O(1)

function removElement(nums, val) {
  let n = nums.length;

  for (let i = 0; i < n; i++) if (nums[i] === val) nums[i] = "_";

  let front = 0,
    back = 0;

  while (front < n) {
    if (nums[front] !== "_") {
      nums[back] = nums[front];
      back++;
    }

    front++;
  }

  return back;
}

//Best Approach
//Although the TC didn't change but we're using a single loop here
function remEl(nums, val) {
  let n = nums.length;
  let ptr = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== val) nums[ptr++] = nums[i];
  }

  return ptr;
}

/*------------------------------*/

//PTOBLEM 4

//Unique Email Address - Leercode

//Using In-built functions

function uniqueEmailAddressI(emailArr) {
  let n = emailArr.length;
  let set = new Set();

  for (let i = 0; i < n; i++) {
    let [local, domain] = emailArr[i].split("@");
    let [local_mod] = local.split(".").join("").split("+");
    set.add(local_mod.concat("@", domain));
  }

  return set.size;
}

//Method 2

function uniqueEmailAddressII(emails) {
  let n = emails.length;

  let set = new Set();

  for (let i = 0; i < n; i++) {
    let temp_str = "";
    let has_found = false;

    let j = 0;

    while (j < emails[i].length) {
      if (emails[i][j] === "@") has_found = true;

      if (!has_found && emails[i][j] === "+") {
        while (emails[i][j] !== "@") j++;
        has_found = true;
      }

      if ((!has_found && emails[i][j] !== ".") || has_found)
        temp_str += emails[i][j];

      j++;
    }

    set.add(temp_str);
  }

  return set.size;
}

/*------------------------*/

//PROBLEM 5 : PRODUCT OF ARRAY EXCEPT SELF

//Using the division operation : TC O(N) & SC O(1) - in-place modification can be done

//Without using division

/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation
*/

//APPROACH 1 : TC O(N) & SC O(N)
function prodArrSelf(nums) {
  let n = nums.length;

  let pref_prod = [],
    suff_prod = [];

  let pref_product = 1,
    suff_product = 1;

  for (let i = 0; i < n; i++) {
    pref_product *= nums[i];
    suff_product *= nums[n - 1 - i];
    pref_prod.push(pref_product);
    suff_prod.push(suff_product);
  }

  suff_prod.reverse();

  let res_arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      res_arr.push(suff_prod[1]);
      continue;
    }
    if (i === n - 1) {
      res_arr.push(pref_prod[n - 2]);
      continue;
    }

    res_arr.push(pref_prod[i - 1] * suff_prod[i + 1]);
  }

  return res_arr;
}

//Best approach : TC O(n) & SC O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let res_arr = [];

  let pref_product = 1;

  ///Makes sure that prefixProduct array
  //has elements that are shifted one step ahead
  //as compared to the normal prefix product array where
  // the first element of this array is 1

  //This makes sure that while traversing in reverse we just multiply the
  //suffix product lagging by an element to the element in this array
  //at the respective position to give us the desired result
  for (let i = 0; i < nums.length; i++) {
    res_arr.push(pref_product);
    pref_product *= nums[i];
  }

  let suff_product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res_arr[i] *= suff_product;
    suff_product *= nums[i];
  }

  return res_arr;
}

//TODO: Create a suffix product array in a single traversal
