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
var levelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        // Step 1: Record how many nodes are in the CURRENT level
        let levelSize = queue.length;
        let currentLevelNodes = [];

        // Step 2: Process ONLY the nodes belonging to this level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentLevelNodes.push(node.val);

            // Step 3: Add children to the queue for the NEXT level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Step 4: Push the completed line/level to the result
        result.push(currentLevelNodes);
    }

    return result;
};