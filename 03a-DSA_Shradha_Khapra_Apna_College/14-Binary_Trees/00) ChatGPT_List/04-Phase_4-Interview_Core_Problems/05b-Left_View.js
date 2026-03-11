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

/**
## Using DFS.

## Solution Approach:
1. I'll be visiting the left nodes first as usual using DFS.
2. I'll be using pre-order traversal and I'll push the node into the res array, if the res.length == depthOfTree.
  1. As this comparison will indicate that, this depth of the tree is being visited for the first time.
*/

/**
## Error: A small bug and not error.
1. At the base case, I'm returning a new array.
  1. However, at base case. I'm only supposed to return back for recursing upward.
2. However, this wrong base case doesn't break the code logic, as I'm collecting the left-view elements in a **res** array.
  1. Which remains unaffected by the base-case.
3. But still for the clean code practices, I'll be simply writing return to return back from the leaf node.
*/

var leftView = function (root, level = 0, res = []) {
  if (!root) return []; // Early return upon finding tree to be empty.

  // Conditionally collect the nodes.
  // Below condition'll collect the first left nodes of the tree.
  if (res.length == level) res.push(root.val);

  leftView(root.left, level + 1, res);
  leftView(root.right, level + 1, res);

  return res;
};
