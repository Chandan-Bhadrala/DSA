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
        let n = arr.length;
        let span = new Array(n);
        let stack = [];

        for (let i = 0; i < n; i++) {
            // Pop elements from stack while the stack is not empty 
            // and the current price is greater than or equal to 
            // the price at the index stored at the top of the stack
            while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                stack.pop();
            }

            // If stack is empty, then arr[i] is greater than all 
            // previous elements. Otherwise, it's greater than 
            // elements after the index at stack top.
            if (stack.length === 0) {
                span[i] = i + 1;
            } else {
                span[i] = i - stack[stack.length - 1];
            }

            // Push this element's index to the stack
            stack.push(i);
        }

        return span;
    }
}