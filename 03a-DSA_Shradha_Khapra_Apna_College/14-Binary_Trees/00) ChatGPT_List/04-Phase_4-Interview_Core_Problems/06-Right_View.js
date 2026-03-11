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
var rightSideView = function(root) {
    let result = [];

    function traverse(node, depth) {
        if (!node) return;

        // If this is the first time we've reached this depth,
        // it must be the rightmost node (because we visit right children first).
        if (depth === result.length) {
            result.push(node.val);
        }

        // CRITICAL: Visit RIGHT child before LEFT child
        traverse(node.right, depth + 1);
        traverse(node.left, depth + 1);
    }

    traverse(root, 0);
    return result;
};