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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function dfs(node) {
        if (!node) return 0;

        // Recursively find the height of left and right subtrees
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);

        // Update the global diameter if the path through 
        // this node is larger than what we've seen so far
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of this node to its parent
        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    return maxDiameter;
};