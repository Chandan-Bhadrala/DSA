/**
## Question:
1. We need to find the closest ascendant (root) which has both **p and q** as its descendants.
    1. That closest ascendant node will be consider as LCA (Lowest-Common-Ancestor).
2. If say, q is descendant of the p, then we consider **p** as the LCA.

## Solution:
1. Recurse the tree in pursuit to find p and q.
2. First node which receives success result for the search of p and q is the LCA node.
    1. And if we only find p and not q. Then that means p is the **ascendant** or **LCA**.
*/
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null; // If root == null; return null and start moving back upward.

  if (root == p || root == q) return root; // If root == p or q. Return this node/root. As we found 1/2 required node/root.

  let ltRes = lowestCommonAncestor(root.left, p, q); // Recurse into the left branch and store its result.
  let rtRes = lowestCommonAncestor(root.right, p, q); // Recurse into the right branch and store its result.

  // Success case:
  if (ltRes && rtRes) return root; // If we've found both p and q. Then, this node/root is our LCA.

  // Otherwise, if we've only found 1/2. Then return that result upwards.
  if (ltRes) return ltRes;
  else return rtRes; // In this else case rtRes will be either the desired node or the null value.
  // In both the case rtRes will move the right value upwards.
};
