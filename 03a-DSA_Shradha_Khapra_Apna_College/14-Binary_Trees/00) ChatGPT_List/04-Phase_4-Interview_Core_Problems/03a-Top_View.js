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
 * @return {number[]}
 */
var topView = function(root) {
    if (!root) return [];

    // Map to store: column -> first seen node value
    let columnMap = new Map();
    // Queue for BFS: [node, column]
    let queue = [[root, 0]];
    
    // Track min and max columns to sort the output easily later
    let minCol = 0;
    let maxCol = 0;

    while (queue.length > 0) {
        let [node, col] = queue.shift();

        // If this is the first time we see this column, it's a "top" node
        if (!columnMap.has(col)) {
            columnMap.set(col, node.val);
        }

        // Update range for final result construction
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);

        // Standard BFS logic with column tracking
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    // Construct the result from the leftmost column to the rightmost
    let result = [];
    for (let i = minCol; i <= maxCol; i++) {
        result.push(columnMap.get(i));
    }

    return result;
};