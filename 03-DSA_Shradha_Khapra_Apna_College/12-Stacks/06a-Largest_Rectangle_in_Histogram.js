/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = []; // Stores indices
    
    // We add a 0 at the end to ensure we process all remaining bars in the stack
    const h = [...heights, 0];

    for (let i = 0; i < h.length; i++) {
        // While the current bar is shorter than the bar at the stack's top
        while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {
            const height = h[stack.pop()];
            
            // If stack is empty, the width is 'i'
            // Otherwise, width is current index - index of new top - 1
            const width = stack.length === 0 
                ? i 
                : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};