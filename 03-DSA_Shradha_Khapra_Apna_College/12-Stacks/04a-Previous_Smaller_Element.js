/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  prevSmaller(arr) {
    const res = [];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1] > arr[i]) stack.pop();

      if (stack.length == 0) res.push(-1);
      else res.push(stack[stack.length - 1]);

      stack.push(arr[i]);
    }

    return res;
  }
}
