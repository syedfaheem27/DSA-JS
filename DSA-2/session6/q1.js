//PROBLEM 1

//Move All Zeroes to the right while maintaining the order of
//non-zero elements

//Brute force - TC O(N) & SC O(1)
//Iterate over the array and add non-zero elements to
//the array and then insert 0 at the remaining places

//Another approach TC O(N) & SC O(1)
function moveZeroes(arr) {
  let n = arr.length;

  let i = 0;

  while (i < n) {
    while (arr[i] !== 0) i++;

    let j = i + 1;
    while (arr[j] === 0 && j < n) j++;

    //make a swap
    if (j < n) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    i++;
  }
  return arr;
}

/*-------------------------------------------*/

//PROBLEM 2

//FIND ALL THE UNIQUE TRIPLETS THAT SUM TO 0

function uniqueTriplet(arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  let i = 0;

  let res_arr = [];

  while (i < n) {
    let num_1 = arr[i];
    let sum = -1 * num_1;

    let j = i + 1,
      k = n - 1;
    while (j < k) {
      if (arr[j] + arr[k] > sum) {
        k--;
      } else if (arr[j] + arr[k] < sum) {
        j++;
      } else {
        res_arr.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;
        j++;
        k--;
      }
    }

    //need to do this at last as there can be
    //triplets where the two elements can be identical
    //and if we put this at the start we would skip those.
    //Putting it at the end ensures that we have covered all such cases
    while (arr[i] === arr[i + 1]) i++;

    i++;
  }

  return res_arr;
}
uniqueTriplet([-1, 0, 1, 2, -1, -4]);
