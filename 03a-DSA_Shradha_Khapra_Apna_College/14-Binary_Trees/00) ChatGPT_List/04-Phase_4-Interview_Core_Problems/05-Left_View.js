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
var leftView = function(root) {
    let result = [];

    function traverse(node, depth) {
        if (!node) return;

        // If this is the first time we've reached this depth, 
        // this node must be the leftmost one visible.
        if (depth === result.length) {
            result.push(node.val);
        }

        // Always visit LEFT before RIGHT to ensure the 
        // leftmost node "claims" the depth slot first.
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }

    traverse(root, 0);
    return result;
};