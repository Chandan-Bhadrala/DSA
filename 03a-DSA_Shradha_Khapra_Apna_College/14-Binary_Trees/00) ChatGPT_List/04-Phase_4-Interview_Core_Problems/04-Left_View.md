# Taught by the Gemini.

The **Left View** of a binary tree is the set of nodes visible when the tree is viewed from the left side. Imagine standing on the left side of the tree: you can only see the **first** node encountered at each level.

---

### ## The Strategy: DFS with Depth Tracking

While you can use BFS (Level Order Traversal) and just pick the first element of each level, **DFS** is often more elegant and memory-efficient for this specific problem.

We keep track of the current `depth` and compare it to the size of our `result` array:

1. If `depth == result.length`, it means this is the **first** node we've encountered at this level.
2. Add it to the result.
3. Recursively visit the **left** child first, then the **right** child.

---

### ## JavaScript Implementation

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
 * @return {number[]}
 */
var leftView = function(root) {
    let result = [];

    function traverse(node, depth) {
        if (!node) return;

        // If this is the first time we've reached this depth, 
        // this node must be the leftmost one visible.
        if (depth === result.length) {
            result.push(node.val);
        }

        // Always visit LEFT before RIGHT to ensure the 
        // leftmost node "claims" the depth slot first.
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }

    traverse(root, 0);
    return result;
};

```

---

## Key Differences: Top View vs. Left View

It's easy to mix these up during interviews! Here is the breakdown:

| View Type | Logic Used | Tracking Mechanism |
| --- | --- | --- |
| **Top View** | Horizontal Distance (Columns) | Map + BFS |
| **Left View** | Vertical Levels (Depth) | Depth Counter + DFS |

---

## Complexity Analysis

* **Time Complexity:** **O(n)** because every node is visited exactly once.
* **Space Complexity:** **O(h)** (height of the tree) for the recursion stack. In the worst case (a skewed tree), this is **O(n)**.

---

## Quick Visual Example

```text
        1
       / \
      2   3
       \   \
        4   5
           /
          6

```

1. **Level 0:** Node 1 (First seen) -> `[1]`
2. **Level 1:** Node 2 (First seen) -> `[1, 2]`
3. **Level 2:** Node 4 (First seen) -> `[1, 2, 4]` (Note: Node 5 is hidden)
4. **Level 3:** Node 6 (First seen) -> `[1, 2, 4, 6]`

**Result:** `[1, 2, 4, 6]`

**Would you like to see how to convert this to a "Right View"? It's actually just a one-line change in the recursion order!**

---

# Taught by the ChatGPT.

Good. This one is simpler than Top View.

Definition (one line essence):
Left View = nodes visible when the tree is viewed from the left side.

Meaning:
At every level, we only want the **first node**.

---

Example

```
        1
       / \
      2   3
       \
        4
```

Levels:

Level 0 → 1
Level 1 → 2
Level 2 → 4

Left view:
1 2 4

Even though 3 exists, it’s hidden from left perspective.

---

Core Idea

Left view = **first node of every level**

So naturally:
Use **BFS (level order traversal)**

At each level:

* The first node we process is the left view node.

---

BFS Approach (Most Intuitive)

```javascript
const leftView = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      // First node of this level
      if (i === 0) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};
```

---

Why This Works

Level order ensures:

* We process nodes level by level.
* At each level, first node in queue = leftmost node.

Simple.

Time: O(n)
Space: O(n)

---

DFS Approach (More Elegant)

This version teaches you a deeper pattern.

Idea:
Traverse root → left → right (preorder style)

Keep track of current level.
If we visit a level for the first time → store that node.

```javascript
const leftView = function (root) {
  let result = [];

  const dfs = function (node, level) {
    if (!node) return;

    // If visiting this level first time
    if (level === result.length) {
      result.push(node.val);
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);
  return result;
};
```

---

Why DFS Version Works

Because:

* We go left first.
* The first node we reach at a new depth must be the leftmost node.
* result.length acts like a "level visited" tracker.

Very elegant pattern.

---

Important Pattern Recognition

Left View problem teaches:

"Capture first visit per level."

Right View is identical — just traverse right first instead of left.

This same idea appears in:

* Maximum depth tracking
* First node per depth
* Right side view
* Boundary traversal

---

Comparison with Top View

Left View → Based on LEVEL
Top View → Based on HORIZONTAL DISTANCE

So:
Left View = vertical slicing by depth
Top View = vertical slicing by column

Different dimensions of thinking.

---

Web Development Connection

Think of rendering nested comments.

Left View is like:
Showing only the first comment in each depth layer (like preview mode).

Or in an org chart:
Showing only first person per hierarchy level.

This pattern is useful whenever you group items by depth.

---

If you want next, we can:

* Do Right View
* Do Boundary Traversal (combines left, leaves, right)
* Or move to Vertical Order Traversal (more powerful concept)

---