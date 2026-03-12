# Taught by the Gemini.

The **Maximum Path Sum** problem is a classic dynamic programming challenge on binary trees. Unlike the LCA or subtree problems, a "path" here can start and end at any nodes in the tree, provided they are connected by parent-child edges.

---

### The Intuition

For any node, the maximum path sum that passes **through** it as the highest point (the "peak") is:
**Current Node Value + Max Path from Left Child + Max Path from Right Child.**

However, there is a catch:

1. **Negative values:** If a path sum from a child is negative, we are better off ignoring that path (treating it as **0**).
2. **Global Maximum:** The actual answer to the problem might be a path that doesn't include the current node as the peak (it might be entirely within the left or right subtrees). Therefore, we must maintain a global variable to track the maximum sum we have encountered during our traversal.

---

### The Algorithm

1. Create a variable `maxSum` and initialize it to negative infinity.
2. Define a recursive function `gainFromSubtree(node)`:
* If the node is null, return **0**.
* Recursively calculate the gain from the left and right children. If a gain is negative, take **0** instead.
* Calculate the **path sum through the current node** and update the global `maxSum` if this new sum is larger.
* Return the gain the current node can contribute to its parent: **Node Value + max(left gain, right gain)**.



---

### Implementation (JavaScript)

```javascript
function maxPathSum(root) {
  let maxSum = -Infinity;

  function gainFromSubtree(node) {
    if (node === null) return 0;

    // Recursively get max gains, ignore negative paths (0)
    const leftGain = Math.max(gainFromSubtree(node.left), 0);
    const rightGain = Math.max(gainFromSubtree(node.right), 0);

    // Current path sum passing through this node
    const currentPathSum = node.val + leftGain + rightGain;

    // Update global maximum
    maxSum = Math.max(maxSum, currentPathSum);

    // Return the max gain this node adds to its parent
    return node.val + Math.max(leftGain, rightGain);
  }

  gainFromSubtree(root);
  return maxSum;
}

```

---

### Complexity Analysis

* **Time Complexity:** **O(N)**, where **N** is the number of nodes. We visit each node exactly once.
* **Space Complexity:** **O(H)**, where **H** is the tree height, representing the recursion stack depth.

---

This is a great example of how recursion allows us to compute values from the bottom up while keeping track of a global result.

Would you like to try a practice problem where we modify this logic to find the **Maximum Path Sum between two leaf nodes**?

---

# Taught by the ChatGPT.

This is one of the **most important binary tree problems** because it teaches a powerful tree DP idea.

The problem usually appears as:

> Find the **maximum path sum** in a binary tree.

A **path** is any sequence of nodes connected by edges.
The path **does not need to pass through the root**, but each node can be used **only once**.

---

Example

```text
        -10
        /  \
       9   20
          /  \
         15   7
```

Maximum path:

```text
15 → 20 → 7
```

Maximum sum:

```text
15 + 20 + 7 = 42
```

---
Core Idea

At every node we calculate two things:

1. **Best path passing through the node**

```text
left + node + right
```

2. **Best path we can return upward to the parent**

```text
node + max(left, right)
```

Why?

Because a parent path **cannot branch into both sides**.

Example

```text
      node
      /  \
   left  right
```

Possible path:

```text
left → node → right
```

This is the **complete path through the node**.

---

But when returning to the parent, we **cannot return both sides**, because a parent path cannot branch.

So when returning we return only:

```text
node + max(left, right)
```

---

Important Insight

At each node we compute **two things**:

1. **Local path sum**

```text
left + node + right
```

2. **Return value to parent**

```text
node + max(left, right)
```

---

Handling Negative Values

If a subtree gives negative sum, we ignore it.

```javascript
left = Math.max(0, left)
right = Math.max(0, right)
```

Because a negative path would reduce the total.

---

Algorithm Steps

1. Use DFS recursion.
2. At each node compute left and right gains.
3. Ignore negative gains.
4. Update global maximum.
5. Return best one-sided path.

---

Code

```javascript
var maxPathSum = function(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));

    let currentPath = left + right + node.val;

    maxSum = Math.max(maxSum, currentPath);

    return node.val + Math.max(left, right);
  }

  dfs(root);
  return maxSum;
};
```

---

Dry Run

Tree

```text
        1
       / \
      2   3
```

At node **2**

```text
left = 0
right = 0
path = 2
max = 2
return 2
```

At node **3**

```text
path = 3
max = 3
return 3
```

At node **1**

```text
left = 2
right = 3

path = 2 + 1 + 3 = 6
max = 6
```

Answer:

```text
6
```

---

Time Complexity

```text
O(n)
```

Each node is visited once.

---

Space Complexity

```text
O(h)
```

Where **h = height of tree** (recursion stack).

Worst case:

```text
O(n)
```

---

One-line intuition

At every node we compute:

```text
best path passing through this node
```

while returning

```text
best single path upward
```

---

Connection to Real Web Development Thinking

This problem is similar to **computing best aggregated metrics from hierarchical data**.

Example structures:

* nested comments
* organization trees
* file systems
* dependency graphs

Often we compute **local result + propagate partial result upward**, exactly like this algorithm.

---

If you'd like, I can also show you a **very simple mental trick** that makes Maximum Path Sum almost trivial to recognize in interviews. Once you see it, you'll solve this problem in **10 seconds of thinking**.

---