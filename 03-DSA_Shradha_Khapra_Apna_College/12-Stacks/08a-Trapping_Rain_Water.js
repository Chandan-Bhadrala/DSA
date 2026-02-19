/**
# Trapping Rain Water.

## Question:

## Solution:
1. We'll be calculating the left and the right bound for each bar.
    1.1. Then select the smallerBoundary = min(leftBoundary, rightBoundary).
2. Then water stored by each bar is equal to the smallerBoundary - heightOfBar.
    2.1. This formula will give us the trapped water by each bar.
3. At last we'll sum up water trapped by the each bar to conclude our final answer.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftBoundaryHeightArr = ltBoundaryHt(height);
  let rightBoundaryHeightArr = rtBoundaryHt(height);
};

function ltBoundaryHt(height) {
  let stack = [];
  let resArr = [];

  for (let i = 0; i < height.length; i++) {
    // Pop the stack's top element if it's smaller or equal to the current height[i].
    while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
      stack.pop();
    }

    stack.length == 0 ? resArr.push(-1) : resArr.push(stack[stack.length - 1]);

    stack.push(height[i]);
  }

  return resArr;
}

function rtBoundaryHt(height) {
  let stack = [];
  let resArr = [];

  for (let i = height.length - 1; i >= 0; i--) {
    // Pop the stack's top element if it's smaller or equal to the current height[i].
    while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
      stack.pop();
    }

    stack.length == 0 ? resArr.push(-1) : resArr(stack[stack.length - 1]);

    stack.push(height[i]);
  }

  return resArr;
}
