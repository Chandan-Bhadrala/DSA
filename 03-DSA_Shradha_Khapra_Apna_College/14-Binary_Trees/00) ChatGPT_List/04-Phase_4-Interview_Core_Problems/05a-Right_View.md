# Taught by the Gemini.

To get the **Right View**, we use the exact same logic as the **Left View**, but we simply change the order of our recursion. Instead of visiting the left child first, we visit the **right child first**.

This ensures that for every level, the rightmost node is the very first one to "claim" its spot in our result array.

---

### ## The Strategy: DFS (Right-to-Left)

We use a `depth` counter. If the `depth` is equal to the current length of our `result` array, it means we have reached a new level for the first time. Since we are traveling **Right-to-Left**, that node must be the rightmost one.

---

### ## JavaScript Implementation

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];

    function traverse(node, depth) {
        if (!node) return;

        // If this is the first time we've reached this depth,
        // it must be the rightmost node (because we visit right children first).
        if (depth === result.length) {
            result.push(node.val);
        }

        // CRITICAL: Visit RIGHT child before LEFT child
        traverse(node.right, depth + 1);
        traverse(node.left, depth + 1);
    }

    traverse(root, 0);
    return result;
};

```

---

### ## Visual Comparison

Consider this tree:

```text
        1
       / \
      2   3
     / \   \
    4   5   6

```

1. **Level 0:** Visit `1`. `result = [1]`
2. **Level 1:** Visit `3` (Right child of 1). `result = [1, 3]`
3. **Level 2:** Visit `6` (Right child of 3). `result = [1, 3, 6]`
4. **Backtrack:** Visit `2`, then its children `5` and `4`. Since `depth` (1 and 2) already exists in `result.length`, they are ignored.

**Right View Result:** `[1, 3, 6]`

---

### ## Comparison: Left View vs. Right View

The only difference in the code is the **order of the recursive calls**:

* **Left View:**
```javascript
traverse(node.left, depth + 1);
traverse(node.right, depth + 1);

```


* **Right View:**
```javascript
traverse(node.right, depth + 1);
traverse(node.left, depth + 1);

```



---

### ## Complexity Analysis

* **Time Complexity:** **O(n)** because every node is visited once.
* **Space Complexity:** **O(h)** for the recursion stack, where **h** is the height of the tree.

**Now that you've mastered the views (Top, Left, Right), would you like to see the "Bottom View", or perhaps move on to "Lowest Common Ancestor" (LCA)?**

---

# Taught by the ChatGPT.

Good. This is just the mirror thinking of Left View.

Definition (one line essence):
Right View = nodes visible when the tree is viewed from the right side.

Meaning:
At every level, we want the **last node**.

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
Level 1 → 3
Level 2 → 4

Right view:
1 3 4

Even though 2 exists, it’s hidden from the right side.

---

Approach 1 — BFS (Level Order)

Since right view = last node of each level,
we use level order traversal and capture the last node.

```javascript
const rightView = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      // Last node of this level
      if (i === levelSize - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};
```

Time: O(n)
Space: O(n)

---

Approach 2 — DFS (More Elegant)

Here is the deeper pattern.

Idea:
Traverse root → right → left.

Why?
Because we want the rightmost node to be visited first at every level.

```javascript
const rightView = function (root) {
  let result = [];

  const dfs = function (node, level) {
    if (!node) return;

    // First visit to this level
    if (level === result.length) {
      result.push(node.val);
    }

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };

  dfs(root, 0);
  return result;
};
```

---

Why This Works

* We go right first.
* First time we reach a new level → that node is rightmost.
* result.length acts like "levels already captured."

Very clean trick.

---

Pattern Recognition (Very Important)

Left View → preorder: root → left → right
Right View → preorder: root → right → left

Same logic.
Only traversal order changes.

This is powerful because it teaches:

"Control traversal order to control what you capture."

This idea appears in:

* Tree flattening
* Boundary traversal
* DFS-based tree problems
* Graph problems where order matters

---

Comparison Summary

Left View → first node per level (left first)
Right View → first node per level (right first)
Top View → first node per horizontal distance (BFS + HD)

Different axis of thinking:

* Depth-based view
* Column-based view

---

Web Development Connection

Imagine rendering nested replies.

Right view is like showing only the last reply in each thread depth — like previewing the most recent branch.

Or in a file system:
Showing the deepest/latest folder branch when looking from one side.

It’s essentially:
Selecting one representative node per depth level.

---

If you want next, we can:

* Combine Left + Right + Leaves into Boundary Traversal
* Or move to Vertical Order Traversal (slightly more advanced and interview favorite)
* Or jump to Maximum Path Sum (next difficulty level).

---