/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalWater = 0;
    const stack = []; // Stores indices

    for (let i = 0; i < height.length; i++) {
        // While current bar is taller than the bar at the stack's top
        // we've found a potential "right wall" for a container
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const bottomIndex = stack.pop(); // The "floor" of the container
            
            // If stack is empty, there is no left wall to hold water
            if (stack.length === 0) break;
            
            const leftWallIndex = stack[stack.length - 1];
            const rightWallIndex = i;
            
            // Calculate height of the water level (limited by shorter wall)
            const boundedHeight = Math.min(height[leftWallIndex], height[rightWallIndex]) - height[bottomIndex];
            
            // Calculate width between the walls
            const width = rightWallIndex - leftWallIndex - 1;
            
            totalWater += boundedHeight * width;
        }
        
        stack.push(i);
    }

    return totalWater;
};