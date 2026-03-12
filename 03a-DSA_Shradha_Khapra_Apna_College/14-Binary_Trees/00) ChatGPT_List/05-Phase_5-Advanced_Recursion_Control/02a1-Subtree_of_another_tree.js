/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */




// Main: Checks if subRoot is a subtree of root
function isSubtree(root, subRoot) {
  if (!subRoot) return true; // Because an empty subtree can be a subtree of any tree.

  if (!root) return false; // To recurse back from the point of null.

  if (root.val == subRoot.val && isIdentical(root,subRoot)) return true; // Run the helper function isIdentical **only** if any root value found to be equal to the subRoot and **only return** if isIdentical returns true.
  // Otherwise continue recursing deeper into the main tree.

  let ltRes = isSubtree(root.left, subRoot);
  let rtRes = isSubtree(root.right, subRoot);

  return ltRes || rtRes; // If either of branches returned true. Then we're good to forward the same result.
}

// Helper: Checks if two trees are identical
function isIdentical(node1, node2) {
  if (!node1 || !node2) return node1 == node2; // Run the base case only when null node is reached.
  // For the base case to return true, both tree must've reaches their null values.

  let ltRes = isIdentical(node1.left, node2.left);
  let rtRes = isIdentical(node1.right, node2.right);

  // From the parent node return the answer of their children and themselves.
  return node1.val == node2.val && ltRes && rtRes; // To finally return true all the conditions must be true.
}
