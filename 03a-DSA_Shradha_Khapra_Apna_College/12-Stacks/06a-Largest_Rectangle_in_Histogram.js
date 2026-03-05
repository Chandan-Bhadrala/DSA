/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let prevSmallerEleIdx = prevSmallerIndex(heights);
  let nextSmallerEleIdx = nextSmallerIndex(heights);

  let resArea = [];

  for (let i = 0; i < heights.length; i++) {
    leftBoundary = prevSmallerEleIdx[i];
    rightBoundary = nextSmallerEleIdx[i];

    width = rightBoundary - leftBoundary - 1;

    resArea.push(heights[i] * width);
  }

  return Math.max(...resArea);
};

// Accepts and returns an array.
function prevSmallerIndex(heights) {
  let stack = [];
  let res = [];

  for (let i = 0; i < heights.length; i++) {

    // >= instead of just >. 
    // To pop off the same length bar of the histogram.
    // So, that we're finally able to reach the true smaller bar.
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }

    // res.push(-1) instead of res.push(0).
    // Because extreme left boundary calculation will fit right if I return -1 for the left extreme boundary.
    stack.length > 0 ? res.push(stack[stack.length - 1]) : res.push(-1);
    stack.push(i);
  }

  return res;
}

// Accepts and returns an array.
function nextSmallerIndex(heights) {
  let stack = [];
  let res = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }

    // Similar story here, if no next smaller number is found then instead of pushing -1 in the res.
    // We are pushing the extreme right boundary count.
    stack.length > 0
      ? (res[i] = stack[stack.length - 1])
      : (res[i] = heights.length);
    stack.push(i);
  }

  return res;
}
