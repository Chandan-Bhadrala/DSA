/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Stores indices

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window range
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Maintain monotonic property: 
        // Remove indices of all elements smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 3. Add current element's index
        deque.push(i);

        // 4. If window has reached size k, the front of deque is the max
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};