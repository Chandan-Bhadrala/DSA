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

var isBalanced = function (root) {
  let isTreeBalanced = true;

  function nodeHt(root) {
    if (!root || !isTreeBalanced) return 0; // return 0, to start accumulating the number for the node's ht.
    // And early return the moment we found that our tree is unbalanced.

    let ltHt = nodeHt(root.left);
    let rtHt = nodeHt(root.right);

    // Now, in post traversal for the parent node we've the ht. of the left and the right child. So,
    if (Math.abs(ltHt - rtHt) > 1) {
      isTreeBalanced = false;
      return;
    }

    return Math.max(ltHt, rtHt) + 1;
  }

  // Call the helper function.
  nodeHt(root);

  // If above helper function never changed our presumption of isTreeBalanced then we're good to return true.
  // If isTreeBalanced flag is flipped by the helper function then again we're good to return our answer in terms of the corresponding chosen flag (i.e., isTreeBalanced).

  return isTreeBalanced;
};
