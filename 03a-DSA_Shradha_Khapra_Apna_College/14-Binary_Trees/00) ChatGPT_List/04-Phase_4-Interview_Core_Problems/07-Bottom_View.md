# Taught by the Gemini.

The **Bottom View** of a binary tree is the set of nodes visible when looking at the tree from the bottom. If multiple nodes share the same horizontal distance (column), the node at the **deepest level** (the last one encountered in a BFS) is the one that is visible.

This is the exact opposite of the **Top View**.

---

## The Strategy: BFS + Overwriting Map

We use a **Coordinate System** where the root is at column **0**, left children are **-1**, and right children are **+1**.

1. Use **BFS** to traverse the tree level by level.
2. Maintain a `Map` that stores `column -> node value`.
3. **The Key:** Unlike Top View, we **always overwrite** the value in the Map. Since BFS processes nodes from top to bottom, the last node we see in a specific column will naturally be the bottom-most one.

---

## JavaScript Implementation

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var bottomView = function(root) {
    if (!root) return [];

    // Map to store: column -> last seen node value
    let columnMap = new Map();
    // Queue for BFS: [node, column]
    let queue = [[root, 0]];
    
    // Track min and max columns to avoid sorting the map later
    let minCol = 0;
    let maxCol = 0;

    while (queue.length > 0) {
        let [node, col] = queue.shift();

        // ALWAYS overwrite. The last node processed in a 
        // column during BFS is the one closest to the bottom.
        columnMap.set(col, node.val);

        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);

        // Standard BFS logic
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    // Construct the result from leftmost to rightmost column
    let result = [];
    for (let i = minCol; i <= maxCol; i++) {
        result.push(columnMap.get(i));
    }

    return result;
};

```

---

## Top View vs. Bottom View: The Difference

The code for both is **95% identical**. The only difference is the logic inside the loop:

* **Top View:** `if (!columnMap.has(col)) columnMap.set(col, node.val);`
*(Only save the first one seen at that column)*
* **Bottom View:** `columnMap.set(col, node.val);`
*(Keep overwriting so the last one seen at that column wins)*

---

## Visual Example

```text
        20 (0)
       /    \
    8(-1)   22(1)
   /   \      \
 5(-2) 3(0)   25(2)
      /   \
    10(-1) 14(1)

```

1. Column **-2**: Node 5
2. Column **-1**: Node 10 (Overwrites 8)
3. Column **0**: Node 3 (Overwrites 20)
4. Column **1**: Node 14 (Overwrites 22)
5. Column **2**: Node 25

**Bottom View Result:** `[5, 10, 3, 14, 25]`

---

## Complexity Analysis

* **Time Complexity:** **O(n)** — We visit every node once.
* **Space Complexity:** **O(n)** — To store the queue and the map.

**You've now covered all the standard "View" problems! Would you like to tackle "Lowest Common Ancestor" (LCA) or perhaps "Tree Serialization"?**

---

# Taught by the ChatGPT.

Good. Now this is very close to Top View — just one logical change.

Definition (one line essence):
Bottom View = nodes visible when the tree is viewed from below.

Meaning:
For every **vertical line (horizontal distance)**, we want the **last node encountered from top to bottom**.

---

Example

```
        1
       / \
      2   3
       \    \
        4    5
```

Horizontal distances:

* HD -1 → 2
* HD 0 → 1, 4
* HD +1 → 3
* HD +2 → 5

Bottom view:
2 4 3 5

Why?
At HD 0, 4 replaces 1 because 4 is lower.

---

Core Idea

Same horizontal distance logic as Top View:

* Root → HD = 0
* Left child → HD - 1
* Right child → HD + 1

But difference:

Top View → store first occurrence of each HD
Bottom View → keep updating value for each HD

The last one stored automatically becomes the bottommost.

---

Why BFS Is Natural Here

BFS processes level by level from top to bottom.

So:
Later levels overwrite earlier ones for same HD → perfect for bottom view.

---

Implementation

```javascript
const bottomView = function (root) {
  if (!root) return [];

  let map = new Map(); // hd -> node value
  let queue = [];
  queue.push({ node: root, hd: 0 });

  while (queue.length > 0) {
    let { node, hd } = queue.shift();

    // Always update (overwrite)
    map.set(hd, node.val);

    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  // Sort horizontal distances
  let sortedHD = Array.from(map.keys()).sort((a, b) => a - b);

  let result = [];
  for (let hd of sortedHD) {
    result.push(map.get(hd));
  }

  return result;
};
```

---

Difference from Top View

Top View:

```javascript
if (!map.has(hd)) {
  map.set(hd, node.val);
}
```

Bottom View:

```javascript
map.set(hd, node.val);
```

Just that one change.

This is why pattern recognition is important.

---

Time & Space

Traversal → O(n)
Sorting keys → O(n log n)
Space → O(n)

---

Deep Understanding

Tree is being projected onto vertical columns.

Top View → take first element per column
Bottom View → take last element per column

You are converting a 2D hierarchy into 1D grouped buckets.

---

Important Pattern for Interviews

Problems using Horizontal Distance:

* Top View
* Bottom View
* Vertical Order Traversal
* Vertical Sum

Once HD concept is clear, all become small variations.

---

Web Development Connection

Imagine nested comment threads.

Top view = earliest comment in each visual column
Bottom view = most recent comment in that column

Or think of rendering layered UI elements:

Bottom view is like showing the topmost z-index element for each column.

You are essentially managing overwrites in a layered structure.

---

If you want next, we can:

* Do Vertical Order Traversal (more advanced version)
* Do Boundary Traversal (combines left view + leaves + right view)
* Or move to Maximum Path Sum (important recursion mastery problem)

---