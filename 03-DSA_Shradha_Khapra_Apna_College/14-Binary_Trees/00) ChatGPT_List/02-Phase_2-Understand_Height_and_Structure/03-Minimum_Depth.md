# Taught by the Gemini.

The **minimum depth** of a binary tree is the number of nodes along the shortest path from the root node down to the nearest **leaf node**.

A common mistake is simply swapping `Math.max` for `Math.min`. However, there is a catch: a leaf node **must** have no children. If a node has only one child, you cannot stop there; you must keep going down the existing path.

---

### The Recursive Logic

The logic for minimum depth requires a few more checks than maximum depth:

1. **Empty Tree:** If the root is `null`, the depth is **0**.
2. **Leaf Node:** If both the left and right children are `null`, the depth is **1**.
3. **One Child:** If one side is `null`, you **must** take the depth of the side that actually exists.
4. **Two Children:** If both exist, take the **minimum** of the two and add 1.

---

### The JavaScript Implementation

Here is the clean recursive solution in JavaScript:

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
 * @return {number}
 */
const minDepth = function(root) {
  // 1. Base case: Empty tree
  if (root === null) {
    return 0;
  }

  // 2. Base case: Leaf node (no children)
  if (root.left === null && root.right === null) {
    return 1;
  }

  // 3. If left child is null, we must recurse into the right subtree
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }

  // 4. If right child is null, we must recurse into the left subtree
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }

  // 5. If both exist, find the minimum of the two
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

```

---

### Why we can't just use `Math.min` everywhere

Imagine a "skewed" tree that looks like a line: `1 -> 2 -> 3`.

* Node 1 has a `null` left child and a right child (Node 2).
* If we just did `Math.min(left, right) + 1`, the result would be `Math.min(0, 2) + 1 = 1`.
* But Node 1 is **not** a leaf! The shortest path to a leaf (Node 3) is actually **3**.

The logic above handles this by ensuring we only calculate the "minimum" when there's an actual choice between two valid paths.

---

### Optimization: The BFS Approach

While recursion works, it's often better to use **Breadth-First Search (BFS)** for finding the minimum depth. Since BFS explores the tree level-by-level, the first leaf node it encounters is guaranteed to be at the minimum depth. This is more efficient because it doesn't have to visit every node in a very deep tree.

**Would you like to see the BFS implementation using a queue to optimize this search?**

---

# Taught by the ChatGPT.

Good. This is where many people make mistakes.

## 🌳 Minimum Depth of a Binary Tree

Definition:

Minimum depth =
**Number of nodes along the shortest path from root to the nearest leaf node.**

Important:
It must end at a **leaf** (node with no children).

---

## ❌ The Common Wrong Approach

Many try:

```javascript
return 1 + Math.min(minDepth(root.left), minDepth(root.right));
```

This is WRONG.

Why?

Because if one child is `null`, `Math.min(0, something)` becomes `0`,
which falsely makes depth smaller.

---

## 🧠 Correct Thinking

There are 3 cases:

### 1️⃣ If node is null

```javascript
return 0;
```

---

### 2️⃣ If one child is null

You must ignore the null side and go through the non-null side.

Because minimum depth must reach a leaf.

Example:

```
    1
   /
  2
 /
3
```

Right side is null everywhere.
But minimum depth is 3, not 1.

---

### 3️⃣ If both children exist

Then you can safely take:

```javascript
1 + Math.min(left, right)
```

---

## ✅ Correct Recursive Solution

```javascript
function minDepth(root) {
  if (!root) return 0;

  // If left is null, go right
  if (!root.left) return 1 + minDepth(root.right);

  // If right is null, go left
  if (!root.right) return 1 + minDepth(root.left);

  // If both exist
  return 1 + Math.min(
    minDepth(root.left),
    minDepth(root.right)
  );
}
```

---

## 🔎 Example

```
        1
       / \
      2   3
     /
    4
```

Paths:

* 1 → 2 → 4  (depth 3)
* 1 → 3      (depth 2)

Minimum depth = **2**

---

## 🧠 Pattern Recognition

When problem says:

* “nearest leaf”
* “shortest root-to-leaf path”
* “minimum depth”

Trigger:

👉 Recursion
👉 Special handling for null children
👉 Leaf node condition matters

---

## 🚀 Alternative (Very Clean) — BFS Solution

Minimum depth is actually perfect for BFS.

Why?

Because BFS explores level by level.

The first leaf you encounter → that level is your answer.

```javascript
function minDepth(root) {
  if (!root) return 0;

  const queue = [[root, 1]];

  while (queue.length) {
    const [node, depth] = queue.shift();

    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
}
```

Time: O(n)
Space: O(n)

---

## 🌐 Web Dev Connection

Think of:

* Finding nearest reply in a comment system
* Finding closest category with no children
* Shortest nested structure path

BFS is often better when searching for **shortest path** in hierarchical data.

---

Now you’re building pattern clarity:

* Max depth → Math.max
* Min depth → careful null handling
* Shortest path → BFS often cleaner

Next logical step:
Want to learn how this connects to **Balanced Binary Tree** problem?
That’s where maxDepth logic gets reused cleverly.

---