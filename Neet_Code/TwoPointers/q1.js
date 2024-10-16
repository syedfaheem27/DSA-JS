//HARD: Trapping Rain water

// Method-1: Stack
//TC O(N) & SC O(N)
function trapRainWater(heights) {
  let n = heights.length;

  let maxWater = 0;
  let stack = [];

  let i = 0;

  while (i < n) {
    if (stack.length === 0) {
      stack.push(i);
      i++;
      continue;
    }

    let top_index = stack[stack.length - 1];

    if (heights[top_index] > heights[i]) {
      stack.push(i);
      i++;
      continue;
    }

    // I already have that index, so no need to store it
    stack.pop();

    if (stack.length === 0) continue;

    let curr_top_index = stack[stack.length - 1];

    let min_bound = Math.min(heights[i], heights[curr_top_index]);

    maxWater =
      min_bound >= heights[top_index]
        ? maxWater + (min_bound - heights[top_index]) * (i - curr_top_index - 1)
        : maxWater;
  }

  return maxWater;
}

// Two pointer approach
// TC O(2N) & SC O(2N)

/*
Keeping track of prefixMax and suffixMax to calculate
the volume of water trapped at a certain index.
*/

function trapRainWaterI(height) {
  let n = height.length;
  let prefMax = [height[0]];
  let suffMax = [];
  suffMax[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    prefMax[i] = Math.max(prefMax[i - 1], height[i]);

    let suffIndex = n - 1 - i;
    suffMax[suffIndex] = Math.max(suffMax[suffIndex + 1], height[suffIndex]);
  }

  let totalWater = 0;
  for (let i = 1; i <= n - 2; i++) {
    let boundingHeight = Math.min(prefMax[i - 1], suffMax[i + 1]);

    if (boundingHeight <= height[i]) continue;

    totalWater += boundingHeight - height[i];
  }

  return totalWater;
}

//Optimising the two pointer approach

//TC - O(2N)
//SC - O(N)

/*
we don't need a prefixMax array, we can keep a 
variable and update it as we iterate from left to right
which stores the leftMax upto that point.
*/

function trapRainWaterII(height) {
  let n = height.length;

  let suffMax = [];
  suffMax[n - 1] = height[n - 1];

  for (let i = n - 2; i >= 0; i--)
    suffMax[i] = Math.max(suffMax[i + 1], height[i]);

  let leftMax = height[0];

  let totalWater = 0;
  for (let i = 1; i < n - 1; i++) {
    let boundingHeight = Math.min(leftMax, suffMax[i + 1]);
    leftMax = Math.max(leftMax, height[i]);

    if (boundingHeight <= height[i]) continue;

    totalWater += boundingHeight - height[i];
  }

  return totalWater;
}

//Further optimisation

/*
We don't need a suffix max array, because we are interested in 
the minimum of the two bounding surfaces at an index
and if we have it, the other bounding surface can be as high as it wants. 
so we calculate the water at each index based on which bounding surface 
we're considering, is it the right or the left
*/

//TC - O(N)
//SC - O(1)

function trapRainWaterIII(height) {
  let n = height.length;

  let leftMax = height[0],
    rightMax = height[n - 1];

  let i = 1,
    j = n - 2;

  let totalWater = 0;
  while (i <= j) {
    if (leftMax <= rightMax) {
      let vol = leftMax - height[i] > 0 ? leftMax - height[i] : 0;
      totalWater += vol;
      leftMax = Math.max(leftMax, height[i]);
      i++;
    } else {
      let vol = rightMax - height[j] > 0 ? rightMax - height[j] : 0;
      totalWater += vol;
      rightMax = Math.max(rightMax, height[j]);
      j--;
    }
  }

  return totalWater;
}
