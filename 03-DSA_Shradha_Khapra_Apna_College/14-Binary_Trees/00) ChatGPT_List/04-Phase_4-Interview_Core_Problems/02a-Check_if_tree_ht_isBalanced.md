# Taught by the Gemini.

A **Height Balanced Binary Tree** (also known as an **AVL Balanced Tree**) is one where the height of the left and right subtrees of **every** node differs by no more than **1**.

If any single node in the tree fails this condition, the entire tree is considered unbalanced.

---

### ## The Core Condition

For every node $n$:
`abs(height(n.left) - height(n.right)) <= 1`

---

### ## The Efficient Approach (O(n))

Just like finding the **Diameter**, the most efficient way to check balance is a **bottom-up DFS**.

Instead of checking the height of every node repeatedly ($O(n^2)$), we check for balance while we are already calculating the height. If we find an unbalanced subtree, we "bubble up" an error value (like `-1`) to signal that the tree is broken.

### ### JavaScript Implementation

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    // Helper function returns height, or -1 if unbalanced
    function checkHeight(node) {
        if (!node) return 0;

        let leftHeight = checkHeight(node.left);
        // If left subtree is already unbalanced, exit early
        if (leftHeight === -1) return -1;

        let rightHeight = checkHeight(node.right);
        // If right subtree is already unbalanced, exit early
        if (rightHeight === -1) return -1;

        // Check the balance condition at the current node
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return the actual height if balanced
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
};

```

---

### ## Why this works

* **Efficiency:** We visit each node exactly once.
* **Early Exit:** As soon as one subtree returns `-1`, the recursion effectively stops doing meaningful work and just passes the `-1` back up to the root.
* **Complexity:** * **Time:** **O(n)**
* **Space:** **O(h)** (Recursion stack depth equals tree height)



---

### ## Visual Comparison

| Balanced Tree | Unbalanced Tree |
| --- | --- |
| Left Height: 2, Right Height: 2 | Left Height: 3, Right Height: 1 |
| Difference: **0** (Valid) | Difference: **2** (Invalid) |

> **Note:** A tree can be "thin" and still be balanced, as long as the subtrees don't drift more than one level apart in depth.

**Would you like to see how this logic differs if we were specifically building a balanced tree from a sorted array?**

---

# Taught by the ChatGPT.

Good. This is one of the most important tree problems.

Definition (one line essence):
A binary tree is **height balanced** if for every node:

| height(left) − height(right) | ≤ 1

And this must hold for **all nodes**, not just the root.

---

Example of Balanced Tree

```
        1
       / \
      2   3
     / \
    4   5
```

Here:

* Node 2 → height difference = 1
* Node 1 → height difference = 1
  All nodes satisfy condition → Balanced.

---

Example of Unbalanced Tree

```
        1
       /
      2
     /
    3
```

At node 1:
left height = 2
right height = 0
difference = 2 ❌

So not balanced.

---

Naive Approach (Don’t Do This)

For every node:

1. Compute left height
2. Compute right height
3. Check difference
4. Recursively check left subtree
5. Recursively check right subtree

Problem:
Height calculation happens repeatedly → O(n²)

We don’t want that.

---

Optimized Idea (Very Important Pattern)

We combine:

* Height calculation
* Balance checking

In ONE recursion.

This is the same pattern you saw in Diameter.

Key trick:
Return height normally.
But if subtree is unbalanced, return a special value (like -1) to signal failure.

This avoids global variables.

---

Clean Optimized Code

```javascript
const isBalanced = function (root) {
  const checkHeight = function (node) {
    if (!node) return 0;

    let leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1;

    let rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return 1 + Math.max(leftHeight, rightHeight);
  };

  return checkHeight(root) !== -1;
};
```

---

Why This Works

At every node:

1. Ask left subtree for height
   If it says “-1”, immediately stop and propagate -1 upward.

2. Ask right subtree for height
   Same logic.

3. If current node violates balance rule → return -1.

4. Otherwise return normal height.

So:

* Valid subtree → returns height
* Invalid subtree → returns -1

Very clean signal system.

---

Time & Space Complexity

Time: O(n)
Each node visited once.

Space: O(h) recursion stack
Worst case skewed → O(n)
Balanced → O(log n)

---

Mental Model (Very Important for DSA Growth)

This is a classic example of:

"Return useful data upward, and propagate failure early."

You are not just traversing.
You are collecting information bottom-up.

This pattern appears in:

* Validate BST
* Diameter
* Maximum Path Sum
* Tree DP problems

---

Deep Insight (Understand This Clearly)

Height is a **local property**.
Balanced condition is a **global property**.

We detect global correctness using local height information.

That’s powerful.

---

Web Development Connection (as you prefer)

Imagine:

* Nested comment threads
* Folder structure in a file manager
* Category hierarchy

If one branch becomes extremely deep compared to others, UI performance degrades.

A height-balanced structure ensures:

* Efficient rendering
* Better performance
* Predictable recursion depth

Same concept used in:

* AVL Trees
* Red-Black Trees
* Database indexing trees

Balanced trees guarantee log(n) operations.

---

If you want, next we can:

* Compare this with Diameter and see the similarity pattern
* Solve Balanced Binary Tree using pure functional style without special value
* Or move to Validate Binary Search Tree (very important interview problem)

---