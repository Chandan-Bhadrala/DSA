class Solution {
  nextLargerElement(arr) {
    let stack = [];
    let res = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0) {
        let topElement = stack[stack.length - 1];

        if (topElement > arr[i]) {
          res.unshift(topElement); // Unshift is another O(n) time inside the for-loop.
          // Making code time complexity O(n^2).
          // So, better use push and revere in the end or
          // res[i] = topElement;
          break;
        } else {
          stack.pop();
        }
      }

      // if (stack.length == 0) res[i] = -1; // To avoid using unshift to improve code time complexity from O(n^2) to O(n).
      // As unshift is a time consuming approach.
      if (stack.length == 0) res.unshift(-1);
      stack.push(arr[i]);
    }

    return res;
  }
}
