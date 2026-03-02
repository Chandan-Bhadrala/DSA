class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to find and print all root-to-leaf paths
 * @param {Node} root
 * @param {string} path - Accumulates the values as we go
 */

/**
## Error: In Approach.
1. My base case is insufficient.
  1. It only returns the recursion if the node has both child as null value.
  2. It is definitely a success condition for the leaf node.
2. But, it's not the cover all situation, base case condition.
  1. Because this base case won't execute for the node having a single child.
  2. Then in the next recursion, the root.left or the root.right (missing child) will become null.
  3. And the code will try to access null.left or null.right (for the missing child).
  4. null.left or the null.right will break the code.
3. So, !root return, is a universally needed base case condition to stop recursion propagating further.
4. And the !root.left && !root.right is a special base case condition to utilize the value of the leaf node.
*/

const printPaths = (root, res = [], path = []) => {
  // Below line is an incomplete base case. There must be a universal base case of "if(!root) return;"
  
  if (!root.left && !root.right) return res.push([...path]); // Insert one full path once leaf node is touched.

  // Push current node.
  path.push(root.val);

  // Recurse deep till the null value.
  printPaths(root.left, res, path);
  printPaths(root.right, res, path);

  // While backtracking pop the last node so that last left-node gets popped up to make space/room for the right-node.
  path.pop();

  // But how to ensure that path has nested array of all the paths.
  // While popping one full path must not be interrupted.
  // I need to store the full path as a nested array securely.

  return res;
};

// Example Usage:
const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

console.log(printPaths(root));
