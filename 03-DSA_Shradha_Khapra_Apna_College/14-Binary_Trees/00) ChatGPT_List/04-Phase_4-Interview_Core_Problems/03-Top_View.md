# Taught by the Gemini.

The **Top View** of a binary tree is the set of nodes visible when the tree is viewed from the very top. Imagine looking down on the tree: you only see the "highest" node at each horizontal distance (column) from the root.

To solve this, we use a **Coordinate System**:

* The **Root** is at column **0**.
* Moving to the **Left** child subtracts **1** from the column.
* Moving to the **Right** child adds **1** to the column.

---

### ## The Strategy: BFS + Hash Map

We use **Breadth-First Search (BFS)** because it processes nodes level by level. Since we only want the **first** node encountered in each column (the one closest to the top), BFS naturally finds that "top" node before any deeper nodes in the same column.

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
 * @return {number[]}
 */
var topView = function(root) {
    if (!root) return [];

    // Map to store: column -> first seen node value
    let columnMap = new Map();
    // Queue for BFS: [node, column]
    let queue = [[root, 0]];
    
    // Track min and max columns to sort the output easily later
    let minCol = 0;
    let maxCol = 0;

    while (queue.length > 0) {
        let [node, col] = queue.shift();

        // If this is the first time we see this column, it's a "top" node
        if (!columnMap.has(col)) {
            columnMap.set(col, node.val);
        }

        // Update range for final result construction
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);

        // Standard BFS logic with column tracking
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    // Construct the result from the leftmost column to the rightmost
    let result = [];
    for (let i = minCol; i <= maxCol; i++) {
        result.push(columnMap.get(i));
    }

    return result;
};

```

---

### ## Why use BFS instead of DFS?

While you *can* use DFS, it's significantly trickier. In DFS, you might reach a deeper node in a specific column before you reach the "top" node. You would then have to track the **depth** of every node and only replace a node in your map if the new one is at a shallower depth.

**BFS is cleaner** because once a column is added to the map, you can guarantee that no future node in that column will be "above" it.

---

### ## Complexity Analysis

* **Time Complexity:** **O(n)** where **n** is the number of nodes. We visit each node once and the final loop runs for the width of the tree (which is at most **n**).
* **Space Complexity:** **O(n)** to store the nodes in the Queue and the Column Map.

---

### ## Key Visual

If your tree looks like this:

```text
      1 (0)
     /   \
  2(-1)  3(1)
    \     /
   4(0)  5(2)

```

* Column **-1**: Node 2
* Column **0**: Node 1 (Note: Node 4 is hidden by Node 1)
* Column **1**: Node 3
* Column **2**: Node 5
* **Top View:** `[2, 1, 3, 5]`

**Would you like to explore the "Bottom View" next? It uses almost the exact same logic with one tiny tweak!**

---

# Taught by the ChatGPT.

Good. This is a **level order + horizontal distance** problem.

First understand the meaning clearly.

Definition (one line essence):
Top View = nodes visible when the tree is viewed from above.

So for every **vertical line**, we only want the **first node encountered from top**.

---

Visual Understanding

Example:

```
        1
       / \
      2   3
       \    \
        4    5
```

Top view:
2 1 3 5

Why?

* Vertical line -1 → 2
* Vertical line 0 → 1
* Vertical line +1 → 3
* Vertical line +2 → 5

Node 4 is hidden because 2 is above it on same vertical line.

---

Core Idea

We assign each node a **horizontal distance (HD)** from root.

Rules:

* Root → HD = 0
* Left child → parentHD - 1
* Right child → parentHD + 1

Then:

Perform **BFS (level order traversal)**
Why BFS?

Because BFS visits nodes level by level (top to bottom).
So the first time we encounter a horizontal distance → that node is the topmost one.

That is exactly what we need.

---

Algorithm Steps

1. Use a queue → store (node, horizontalDistance)
2. Use a Map → hd → first encountered node value
3. Traverse using BFS
4. If HD not already in map → store it
5. After traversal → sort HD keys
6. Return values in sorted order

---

Implementation

```javascript
const topView = function (root) {
  if (!root) return [];

  let map = new Map(); // hd -> node value
  let queue = [];
  queue.push({ node: root, hd: 0 });

  while (queue.length > 0) {
    let { node, hd } = queue.shift();

    // Store only first occurrence of each horizontal distance
    if (!map.has(hd)) {
      map.set(hd, node.val);
    }

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

Time Complexity

Traversal → O(n)
Sorting HD keys → O(n log n)

Overall → O(n log n)

Space → O(n)

---

Why BFS Is Important Here

If you use DFS, a deeper node might be visited before a higher node on the same vertical line. That would break correctness.

BFS guarantees:
Topmost node at each HD is seen first.

This is similar to:

Queue represents the "frontier" of the tree.
You are expanding level by level.

---

Pattern Recognition (Important for DSA)

This problem combines:

* Tree traversal
* Horizontal distance mapping
* Level order traversal
* Map + sorting

You will see similar logic in:

* Bottom View
* Vertical Order Traversal
* Boundary Traversal

---

Deep Intuition

You are converting a 2D structure (tree) into vertical columns using horizontal distance.

Tree → projected into vertical slices.

That mapping idea is powerful.

---

Web Development Connection (as you prefer)

Think of a comment thread displayed in columns by depth.
Or visualizing an org chart in vertical layers.

The horizontal distance concept is like computing relative layout positioning before rendering.

If you ever build:

* Tree visualizer
* Org structure renderer
* Nested folder UI

This same mapping technique applies.

---

If you want next, we can:

* Do Bottom View (small modification)
* Do Vertical Order Traversal (slightly more advanced)
* Or compare DFS vs BFS solution deeply so you master traversal control completely

---