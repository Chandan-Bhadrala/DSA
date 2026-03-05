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

/**
## Error: In Approach.
1. My helper function is not returning the ht, it's returning the count of the nodes below it.
2. So, I'm essentially checking the difference between the nodes at the left and the right side of the parent node.
    1. And flipping the flag if the right child or left child nodes count is greater than 1.
3. I need to check the ht-difference and not the count-difference of the lt and the rt children.

1. Another significant error, empty return in the helper function's if-block will return undefined.
    1. Which'll propagate through the recursive call stacks.
    2. That undefined will pollute recursive call stack with NaN value.
2. Read the Gemini code in the corresponding MD file for the proper and minimal correction of the code.
*/

var isBalanced = function (root) {
  let isTreeBalanced = true;

  function nodeHt(root) {
    if (!root) return 0; // return 0, to start accumulating the number for the node's ht.

    let ltHt = nodeHt(root.left);
    let rtHt = nodeHt(root.right);

    // Now, in post traversal for the parent node we've the ht. of the left and the right child. So,
    if (Math.abs(ltHt - rtHt) > 1) {
      isTreeBalanced = false;
      return;
    }

    return ltHt + rtHt + 1;
  }

  // Call the helper function.
  nodeHt(root);

  // If above helper function never changed our presumption of isTreeBalanced then we're good to return true.
  // If isTreeBalanced flag is flipped by the helper function then again we're good to return our answer in terms of the corresponding chosen flag (i.e., isTreeBalanced).

  return isTreeBalanced;
};
