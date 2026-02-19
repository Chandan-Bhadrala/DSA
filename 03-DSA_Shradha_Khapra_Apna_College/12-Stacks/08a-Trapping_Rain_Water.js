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
  
};
