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
const isSymmetric = function(root) {
    if (!root) return true;
    
    return isMirror(root.left, root.right);
};

const isMirror = function(t1, t2) {
    // If both nodes are null, we've reached the end of a symmetric branch
    if (t1 === null && t2 === null) return true;
    
    // If only one is null, or values don't match, it's not symmetric
    if (t1 === null || t2 === null || t1.val !== t2.val) return false;
    
    // Recurse: Compare outer children and inner children
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
};