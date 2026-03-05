

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