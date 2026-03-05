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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    // Helper function returns height, or -1 if unbalanced
    function checkHeight(node) {
        if (!node) return 0;

        let leftHeight = checkHeight(node.left);
        // If left subtree is already unbalanced, exit early
        if (leftHeight === -1) return -1;

        let rightHeight = checkHeight(node.right);
        // If right subtree is already unbalanced, exit early
        if (rightHeight === -1) return -1;

        // Check the balance condition at the current node
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return the actual height if balanced
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
};