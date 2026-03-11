# Taught by the Gemini.

The **Minimum Depth** of a binary tree is the number of nodes along the shortest path from the root node down to the nearest leaf node.

---

### The Intuition

The "shortest path" requirement makes this a classic candidate for **Breadth-First Search (BFS)**. In BFS, you visit nodes level by level. The very first time you encounter a leaf node, you are guaranteed to have found the shortest path.

If you prefer **Recursion (DFS)**, you have to be careful:

1. If a node has only one child, you cannot simply take the minimum of the left and right depths (because the `null` branch isn't a leaf). You must follow the path that actually leads to a leaf.
2. If both children exist, you take the minimum of the two.

---

### Implementation (Recursive DFS)

```javascript
function minDepth(root) {
  if (root === null) return 0;

  // If left child is null, we must go down the right side
  if (root.left === null) return minDepth(root.right) + 1;
  
  // If right child is null, we must go down the left side
  if (root.right === null) return minDepth(root.left) + 1;

  // If both exist, take the minimum of both sides
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

```

---

### Implementation (Iterative BFS)

BFS is often more intuitive for "shortest" problems because it stops as soon as it hits the first leaf.

```javascript
function minDepthBFS(root) {
  if (!root) return 0;
  
  const queue = [[root, 1]]; // Store [node, depth]
  
  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    
    // First leaf node encountered is the shortest path
    if (!node.left && !node.right) return depth;
    
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
}

```

---

### Complexity Analysis

* **Time Complexity:** **O(N)**. In the worst case (e.g., a balanced tree), we might need to visit all nodes.
* **Space Complexity:** * **DFS:** **O(H)**, where H is the height of the tree (stack space).
* **BFS:** **O(W)**, where W is the maximum width of the tree (queue size). In a balanced tree, **O(N)**.



---

### Key Takeaway

| Problem | Best Approach | Why? |
| --- | --- | --- |
| **Minimum Depth** | BFS | It finishes as soon as the first leaf is found. |
| **Maximum Depth** | DFS/BFS | Both perform similarly; DFS is usually more concise. |

Would you like to try implementing a function that calculates the **diameter of a binary tree** (the longest path between any two nodes), which uses a similar "depth" logic?

---

# Taught by the ChatGPT.

The problem asks:

> Find the **minimum depth** of a binary tree.

Definition:

```text
Minimum depth = number of nodes in the shortest path
from the root node to the nearest leaf node
```

Important condition:

```text
The path must end at a leaf node.
```

A **leaf node** is:

```text
node.left === null && node.right === null
```

---

Example

```text
        1
       / \
      2   3
     /
    4
```

Possible root-to-leaf paths:

```text
1 → 2 → 4  (depth = 3)
1 → 3      (depth = 2)
```

Minimum depth:

```text
2
```

---

Core Insight

We must **find the first leaf node encountered at the smallest depth**.

This naturally fits **BFS (level order traversal)**.

Because BFS explores:

```text
level by level
```

So the **first leaf encountered is the minimum depth**.

---

BFS Algorithm

Steps:

1. Start with the root in a queue.
2. Track depth level by level.
3. When we encounter the **first leaf**, return depth.

---

BFS Code (Best Approach)

```javascript
var minDepth = function(root) {
  if (!root) return 0;

  let queue = [[root, 1]];

  while (queue.length) {
    let [node, depth] = queue.shift();

    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
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

Queue:

```text
[(1,1)]
```

Process:

```text
pop (1,1)
push (2,2)
push (3,2)
```

Next:

```text
pop (2,2)
```

Not leaf → continue.

Next:

```text
pop (3,2)
```

Leaf found → return:

```text
2
```

---

DFS Approach (Careful Case)

A naive DFS fails when one child is missing.

Example:

```text
    1
   /
  2
```

Wrong formula:

```text
min(leftDepth, rightDepth) + 1
```

Because rightDepth = 0.

Correct logic:

```text
If one subtree is null,
take the depth of the other subtree.
```

---

DFS Code

```javascript
var minDepth = function(root) {
  if (!root) return 0;

  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
```

---

Time Complexity

```text
O(n)
```

Every node may be visited once.

---

Space Complexity

BFS:

```text
O(w)
```

where **w = maximum width of tree**

DFS:

```text
O(h)
```

where **h = tree height**

---

One-line intuition

```text
Minimum depth is the level of the first leaf encountered in BFS.
```

---

Connection to Practical Web Development Thinking

This pattern is similar to **finding the shortest valid path in hierarchical data**, such as:

* earliest valid permission chain
* shortest dependency chain
* first valid configuration match in nested structures

BFS is commonly used in systems whenever **the earliest solution matters**, just like the **nearest leaf here**.

---

If you'd like, I can also show you a **very interesting comparison between 5 tree problems** (Maximum Depth, Minimum Depth, Diameter, Max Path Sum, Balanced Tree) that helps you instantly recognize which traversal pattern to use in interviews.

---