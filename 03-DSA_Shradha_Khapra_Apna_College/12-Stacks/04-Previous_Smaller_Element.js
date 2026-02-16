/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    prevSmaller(arr) {
        const n = arr.length;
        const result = new Array(n);
        const stack = [];

        for (let i = 0; i < n; i++) {
            // While stack is not empty and the top is >= current element
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
            }

            // If stack is empty, no smaller element exists to the left
            if (stack.length === 0) {
                result[i] = -1;
            } else {
                // The top of the stack is the nearest smaller element
                result[i] = stack[stack.length - 1];
            }

            // Push current element to stack
            stack.push(arr[i]);
        }

        return result;
    }
}