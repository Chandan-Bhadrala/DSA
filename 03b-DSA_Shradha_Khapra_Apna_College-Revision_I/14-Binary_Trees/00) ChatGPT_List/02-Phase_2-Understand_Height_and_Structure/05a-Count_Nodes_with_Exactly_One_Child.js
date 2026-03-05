
function countSingleChildNodes(root) {
  // Base Case: To return recursion from the null values.
  if (!root) return 0; // Returning 0 rather than nothing (nothing means returning "undefined"). Undefined return will make future addition impossible.

  // Recurse to find the single child nodes into both branches.
  let ltCount = countSingleChildNodes(root.left);
  let rtCount = countSingleChildNodes(root.right);

  // Return the answer while backtracking in post-order
  if (root.left && !root.right) {
    return 1; // Issue is here, I'm supposed to return the previous grand-child accumulated result too.
    // Grand-Child result is stored in the ltCount and rtCount above.
    // As of now, I'm only returning one for the child node and forgetting the result accumulated by the grand-children.
  }
  if (root.right && !root.left) {
    return 1;
  }

  // Parent return statement to the grandparent node.
  // The accumulated answer of the child nodes.
  // Here Parent node will add child node results and send it to the Grand-Parent-Node.
  return ltCount + rtCount;
}

