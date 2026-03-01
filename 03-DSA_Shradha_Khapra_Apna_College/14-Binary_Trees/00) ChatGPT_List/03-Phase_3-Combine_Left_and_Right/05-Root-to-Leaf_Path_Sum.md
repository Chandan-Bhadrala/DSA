# Taught by the Gemini.

Following our look at how to find all paths, calculating the **Root-to-leaf path sum** (often called "Path Sum") is the next logical step. Instead of building a string, we subtract the node's value from a target sum as we go down the tree.

If we reach a leaf node and the remaining target sum equals that leaf's value, we've found a valid path.

---

## The Logic: Subtracting as we go

1. **Base Case**: If the current node is `null`, there's no path here (return `false`).
2. **Check Leaf**: If the current node is a leaf (no left or right child), check if its value matches the `targetSum` we are looking for.
3. **Recurse**: If it's not a leaf, subtract the current node's value from the `targetSum` and move to the children.
4. **The "OR" Logic**: If **either** the left subtree or the right subtree returns `true`, then the whole tree has a valid path sum.

---

## The JavaScript Implementation

Here is how you can check if at least one path exists that matches the target sum:

```javascript
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
    // If the node is null, no path exists
    if (!root) return false;

    // Check if we are at a leaf node
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    // Recurse down, subtracting the current value from the target
    const remainingSum = targetSum - root.val;
    
    return hasPathSum(root.left, remainingSum) || 
           hasPathSum(root.right, remainingSum);
};

```

---

## Example Walkthrough

Imagine a tree with **targetSum = 22**:

```text
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

```

1. **Root (5)**: `22 - 5 = 17`. Check children for `17`.
2. **Node (4)**: `17 - 4 = 13`. Check children for `13`.
3. **Node (11)**: `13 - 11 = 2`. Check children for `2`.
4. **Leaf (2)**: `2 === 2`. **Bingo!** Returns `true`.
5. The `true` bubbles all the way back up to the root.

---

## Complexity Analysis

* **Time Complexity**: **O(n)**. We potentially visit every node once in the worst case (if the path is on the far right or doesn't exist).
* **Space Complexity**: **O(h)**. The recursion stack depth depends on the height of the tree.

### Variations

If you wanted to return the **actual paths** that add up to the sum (rather than just `true` or `false`), you would combine this logic with the "Print all paths" logic we just learned.

Would you like to try the challenge of **Path Sum II**, where we return a list of all paths that equal the target?

---

# Taught by the ChatGPT.

Good.
Now we move one level deeper into **path problems**.

This is the classic:

Path Sum

---

Problem Statement

Given a binary tree and a target sum,
return true if there exists a **root-to-leaf path** such that:

sum of node values = targetSum.

Important:

* It must start at root.
* It must end at a leaf.

---

Example

```text
        5
       / \
      4   8
     /   / \
    11  13  4
   /  \
  7    2
```

targetSum = 22

Path:
5 → 4 → 11 → 2
Sum = 22 → return true

---

Core Idea

At every node:

1. Subtract current node value from target.
2. Pass remaining sum downward.
3. If we reach a leaf:

   * Check if remaining sum equals leaf value.

This is **carry state downward** recursion.

---

Recursive Thinking

Base Case:
If node is null → return false

Leaf Case:
If node is leaf:
Return (targetSum === node.val)

Recursive Case:
Return:

```text
left subtree OR right subtree
```

Because we need at least one valid path.

---

Clean Code

```javascript
function hasPathSum(root, targetSum) {
  if (!root) return false;

  // If leaf node
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  const remaining = targetSum - root.val;

  return (
    hasPathSum(root.left, remaining) ||
    hasPathSum(root.right, remaining)
  );
}
```

---

Why OR?

Because we just need one correct path.

If left returns true → stop
If left false → check right

This is search behavior.

---

How Recursion Flows (Small Example)

Tree:

```
    1
   / \
  2   3
```

targetSum = 4

Flow:

hasPathSum(1,4)
remaining = 3

Check left:
hasPathSum(2,3)
Leaf → 3 === 2? No → false

Check right:
hasPathSum(3,3)
Leaf → 3 === 3? Yes → true

Final answer: true

---

Important Subtle Point

We check sum ONLY when we reach a leaf.

Why?

Because path must end at leaf.

If you check sum before leaf,
you might incorrectly accept partial path.

This mistake is very common.

---

Time and Space

Time: O(n)
Space: O(h)

---

Pattern Recognition (Very Important for You)

This is:

“Carry cumulative state downward”

Earlier:

* Root-to-leaf paths → carried path
* Here → carry remaining sum

Later this pattern evolves into:

* Path Sum II (return all valid paths)
* Maximum path sum
* Count paths equal to k
* Backtracking problems

---

Web Development Connection

Think about:

Validating nested transactions where:
Each nested level deducts budget from total allocation.

Example:

Company budget → Department → Team → Project

You recursively subtract allocation and check if final allocation equals required value.

This is exactly root-to-leaf path sum logic.

Also useful in:

* Nested permission validation
* Multi-level discount calculations
* Recursive invoice calculations

---

Now important question for your DSA growth:

What changes if I ask:

“Return ALL root-to-leaf paths whose sum equals target?”

Would we still use OR?

Or something else?

Think carefully before answering.

---