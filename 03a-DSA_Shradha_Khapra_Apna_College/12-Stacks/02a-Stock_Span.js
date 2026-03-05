/**
# Stock Span.

## Link: https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1

## Question: We've to return stock span array.
1. Stock span is a number of consecutive days before the current day where the stock price is equal or less than the today's/current price.

## Solution:
1. We'll take a stack and will keep pushing the previous high array elements in it.
    1.1. Thus, span for the current day will be today's index - previous high index (taken from the stack top).
*/

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  calculateSpan(arr) {
    let stack = [];
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }

      if (stack.length > 0) {
        res.push(i - stack[stack.length - 1]);
      } else {
        res.push(i + 1);
      }

      stack.push(i);
    }
    return res;
  }
}
