# Taught by the Gemini.

It looks like we touched on **Maximum Path Sum** earlier, but since it's such a foundational problem, let's look at a **quick-reference summary** to lock it in, as it is often a source of confusion compared to simpler "root-to-leaf" paths.

---

### The Crucial Distinction

The **Maximum Path Sum** problem is different from all the other path problems we've discussed (like *Path Sum* or *Min Depth*) because the path **does not need to pass through the root**. It can start and end anywhere in the tree.

### The "Hidden" Logic

To solve this, you calculate a value for every node: **"What is the maximum gain I can provide to my parent?"**

* **Node Gain:** `node.val + max(0, left_gain, right_gain)`
* **Path Peak:** `node.val + max(0, left_gain) + max(0, right_gain)`

You update a global variable (`maxSum`) using the **Path Peak** formula, but you only return the **Node Gain** to the parent (because a path can only take one branch downward).

---

### Comparison Table: Path Problems

| Problem | Path Constraint | Key Logic |
| --- | --- | --- |
| **Path Sum** | Root to Leaf | Subtract node values from target as you go. |
| **Diameter** | Any two nodes | Max depth left + Max depth right. |
| **Max Path Sum** | Any two nodes | Node value + max(0, left_gain) + max(0, right_gain). |

---

### Practice Implementation (Optimized)

```javascript
function maxPathSum(root) {
  let globalMax = -Infinity;

  function calculateGain(node) {
    if (!node) return 0;

    // We take max(0, ...) to ignore negative paths
    const left = Math.max(calculateGain(node.left), 0);
    const right = Math.max(calculateGain(node.right), 0);

    // Current peak is node + left + right
    const currentPeak = node.val + left + right;

    // Update global maximum
    globalMax = Math.max(globalMax, currentPeak);

    // Return max gain to parent
    return node.val + Math.max(left, right);
  }

  calculateGain(root);
  return globalMax;
}

```

---

### A Quick Check

If you are confident with this, would you like to pivot to **Binary Search Trees (BST)**? The logic changes significantly when the tree is ordered—for example, finding the **Kth smallest element** or **validating if a tree is a BST** becomes much faster.

Should we explore **BST validation** next?

---

# Taught by the ChatGPT.

The problem asks:

> Find the **maximum sum of any path** in a binary tree.

Important rules:

```text
1. Path can start and end at any node.
2. Path must follow parent-child connections.
3. A node cannot be used more than once.
4. Path does NOT have to pass through the root.
```

---

Example

```text
        -10
        /  \
       9   20
          /  \
         15   7
```

Possible path with maximum sum:

```text
15 → 20 → 7
```

Sum:

```text
15 + 20 + 7 = 42
```

Answer:

```text
42
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

---

Handling Negative Values

If a subtree gives a negative sum, we ignore it.

```javascript
left = Math.max(0, left)
right = Math.max(0, right)
```

Negative paths would only reduce the total.

---

Algorithm Steps

For each node:

1. Recursively compute left subtree gain.
2. Recursively compute right subtree gain.
3. Ignore negative gains.
4. Compute path through the node.
5. Update global maximum.
6. Return best single path upward.

---

Code

```javascript
var maxPathSum = function(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));

    let currentPath = node.val + left + right;

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
path = 1 + 2 + 3 = 6
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

Where **h = height of the tree**.

Worst case (skewed tree):

```text
O(n)
```

---

Simple intuition

```text
At each node:
try making it the "peak" of the path
(left branch + node + right branch)
and keep the best peak found in the whole tree.
```

---