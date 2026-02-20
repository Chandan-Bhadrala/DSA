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

  let totalWater = 0;

  for (let i = 0; i < height.length; i++) {
    totalWater +=
      Math.min(leftBoundaryHeightArr[i], rightBoundaryHeightArr[i]) -
        height[i] >=
      0
        ? Math.min(leftBoundaryHeightArr[i], rightBoundaryHeightArr[i]) -
          height[i]
        : 0;
  }
  return totalWater;
};

// Find largest bar on the lt of the array elements.
function ltBoundaryHt(height) {
  let stack = [];
  let resArr = [];

  let ltMaxHt = 0;

  for (let i = 0; i < height.length; i++) {
    // Pop the stack's top element if it's smaller or equal to the current height[i].
    // Popping is not required in the "Trapping Rain Water".
    // As we are looking for the maximum height bar seen so far.
    // It'll be a single value.
    // while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
    //   stack.pop();
    // }
    // stack.length == 0 ? resArr.push(0) : resArr.push(stack[stack.length - 1]);
    // stack.length > 0
    //   ? (ltMaxHt = Math.max(height[i], stack[stack.length - 1]))
    //   : (ltMaxHt = 0);
    // stack.push(ltMaxHt);

    // Pushing ltMaxHt into the answer first and later updating the value of the ltMaxHt for a reason.
    // I need array which has seen ltMaxHt height so far and not include their own height.
    resArr.push(ltMaxHt);

    ltMaxHt = Math.max(height[i], ltMaxHt);
  }
  return resArr;
}

// Find largest bar on the rt of the array elements.
function rtBoundaryHt(height) {
  let stack = [];
  let resArr = [];

  let rtMaxHt = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    // Pop the stack's top element if it's smaller or equal to the current height[i].
    // while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
    //   stack.pop();
    // }

    // stack.length == 0 ? resArr.push(0) : resArr.push(stack[stack.length - 1]);

    // stack.length > 0
    //   ? (rtMaxHt = Math.max(height[i], stack[stack.length - 1]))
    //   : (rtMaxHt = 0);
    // stack.push(rtMaxHt);

    // Stack is not required to know the value of rtMax seen so far.
    // It's a single value. So, stack is not needed.


    // Pushing rtMaxHt into the answer first and later updating the value of the rtMaxHt for a reason.
    // I need array which has seen rtMaxHt height so far and not include their own height.
    resArr[i] = rtMaxHt;

    rtMaxHt = Math.max(height[i], rtMaxHt);
  }
  return resArr;
}

