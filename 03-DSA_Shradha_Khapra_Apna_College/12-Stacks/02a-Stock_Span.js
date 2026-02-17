// ## Link: https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  calculateSpan(arr) {
    let stack = [];
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      if (stack[stack.length - 1] <= arr[i]) {
        stack.push(i);
      }

      res.push(i - stack[stack.length - 1] + 1);
    }
    return res;
  }
}
