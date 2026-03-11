/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true; // Flag to control the direction

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            // Logic to handle the zigzag direction
            if (leftToRight) {
                // Normal push: [1, 2, 3]
                currentLevel.push(node.val);
            } else {
                // Add to beginning: [3, 2, 1]
                currentLevel.unshift(node.val);
            }

            // Always add children to the queue in standard order (Left then Right)
            // This ensures the NEXT level is ready in the queue correctly
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
        leftToRight = !leftToRight; // Flip the direction for the next level
    }

    return result;
};