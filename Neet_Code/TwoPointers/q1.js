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
// TC O(N) & SC O(1)

function trapRainWaterI(heights) {
  let n = heights.length;

  let i = 0,
    j = n - 1;
  let maxLeft = heights[0],
    maxRight = heights[n - 1];

  let maxWater = 0;

  while (i <= j) {
    if (maxLeft <= maxRight) {
      maxWater =
        maxLeft >= heights[i] ? maxWater + (maxLeft - heights[i]) : maxWater;

      maxLeft = Math.max(maxLeft, heights[i]);
      i++;
    } else {
      maxWater =
        maxRight >= heights[j] ? maxWater + (maxRight - heights[j]) : maxWater;
      maxRight = Math.max(maxRight, heights[j]);
      j--;
    }
  }

  return maxWater;
}
