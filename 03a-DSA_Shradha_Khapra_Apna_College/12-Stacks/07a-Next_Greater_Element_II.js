/**
# Next Greater Element II.

## Question:
1. We've to check for the next greater element in the array.
    1.1. However, we've to treat the array as a circular array.
2. We can loop the array twice in a loop if we iterate for the 2 * arr.length - 1 times.
3. We'll be using "i % arr.length" to access the proper index of the array.

## Solution:
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let stack = [];
  let res = [];

  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1] <= nums[i % nums.length]
    ) {
      stack.pop();
    }

    stack.length == 0
      ? (res[i % nums.length] = -1)
      : (res[i % nums.length] = stack[stack.length - 1]);
    stack.push(nums[i % nums.length]);
  }
  return res;
};
