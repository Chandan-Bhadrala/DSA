/** * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map();
    const stack = [];

    for (const num of nums2) {
        // While the current number is greater than the element at the top of the stack
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            // The current number is the next greater element for the popped value
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    // Map nums1 to their next greater values found in the map, default to -1
    return nums1.map(num => map.get(num) ?? -1);
};