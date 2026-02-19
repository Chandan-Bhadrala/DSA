/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let prevSmallerEleIdx = prevSmallerIndex(heights);
  let nextSmallerEleIdx = nextSmallerIndex(heights);
};

// Accepts and returns an array.
function prevSmallerIndex(heights) {
  let stack = [];
  let res = [];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      stack.pop();
    }

    // res.push(0) instead of res.push(-1).
    // Because for the most smallest histogram boundary will be extreme ends.
    stack.length > 0 ? res.push(stack[stack.length - 1]) : res.push(0);
    stack.push(i);
  }

  return res;
}

// Accepts and returns an array.
function nextSmallerIndex(heights) {
  let stack = [];
  let res = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      stack.pop();
    }

    // Similar story here, if no next smaller number is found then instead of pushing -1 in the res.
    // We are pushing the extreme right boundary index.
    stack.length > 0
      ? res.push(stack[stack.length - 1])
      : res.push(heights.length - 1);
    stack.push(i);
  }

  return res;
}
