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
const isSymmetric = function (root) {
  // Defensive check: For a given empty tree.
  if (!root) return true;

  return isMirror(root.left, root.right);
};

const isMirror = function (t1, t2) {
  if (!t1 || !t2) return t1 == t2;

  // Traversing to the concerned nodes at each recursive step to check for the isSymmetric property.
  let ltCheck = isMirror(t1.left, t2.right);
  let rtCheck = isMirror(t1.right, t2.left);

  // Returning the isSymmetric result.
  return ltCheck && rtCheck && t1.val == t2.val;
};
