//Find The first missing positive number in constant space and linear time
function firstMisiingPositive(n, arr) {
  //Min. possible answer =>1 & max. possible answer =>n+1;

  //First check if 1 is present
  let boolOne = false;
  for (let i = 0; i < n; i++) if (arr[i] === 1) boolOne = true;

  if (!boolOne) return 1;

  //Replace non-positive numbers and numbers greater than n by 1;

  for (let i = 0; i < n; i++) if (arr[i] <= 0 || arr[i] > n) arr[i] = 1;
  console.log(arr);
  //numbers in array that we want to check (1,n]
  //we can do one thing => loop through and do arr[arr[i]-1]=-1*arr[arr[i]-1]
  //if not already negative

  //Now, in the final iteration, the first positve number that we are going to find,
  //it means that since, it is positive, there was no number equal to i+1 because if there
  //was, it would have been negative

  for (let i = 0; i < n; i++) {
    if (arr[Math.abs(arr[i]) - 1] > 0) {
      arr[Math.abs(arr[i]) - 1] *= -1;
    }
  }

  for (let i = 0; i < n; i++) if (arr[i] > 0) return i + 1;

  return n + 1;
}

console.log(firstMisiingPositive(4, [3, 4, -1, 1]));
