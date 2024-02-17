//PROBLEM 1

//Move All Zeroes to the right while maintaining the order of
//non-zero elements

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
