/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = []; // Stores indices

    // Loop twice to handle circular property
    for (let i = 0; i < n * 2; i++) {
        const currentIndex = i % n;
        const currentVal = nums[currentIndex];

        // While stack is not empty and current element is greater 
        // than the element at the stack's top index
        while (stack.length > 0 && nums[stack[stack.length - 1]] < currentVal) {
            const lastIndex = stack.pop();
            res[lastIndex] = currentVal;
        }

        // Only push indices during the first pass or if they need a result
        if (i < n) {
            stack.push(currentIndex);
        }
    }

    return res;
};