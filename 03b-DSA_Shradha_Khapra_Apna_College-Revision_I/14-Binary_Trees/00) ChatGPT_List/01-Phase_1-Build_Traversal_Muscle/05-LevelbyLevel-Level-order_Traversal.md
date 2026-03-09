# Taught by the Gemini.

Level-by-level grouping is a technique often used in **Breadth-First Search (BFS)** for trees or graphs. Instead of just visiting every node, you process all nodes at the same horizontal level before moving down to the next.

This is particularly useful for problems like finding the "right-side view" of a tree or calculating the average value of nodes at each depth.

---

### The Core Logic

To keep levels separate, we use a **Queue** and a **Nested Loop**.

1. **Outer Loop:** Runs as long as there are nodes in the queue (moving from one level to the next).
2. **Inner Loop:** Runs for a specific number of times equal to the **current size** of the queue. This ensures you only process the nodes belonging to the "current" level.

### Implementation (JavaScript)

Here is how you would implement this to return an array of arrays, where each sub-array is a level.

```javascript
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root]; // Start with the root level

  while (queue.length > 0) {
    const levelSize = queue.length; // Capture the number of nodes at THIS level
    const currentLevelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift(); // Remove the front node
      currentLevelNodes.push(currentNode.val);

      // Add children to the queue for the NEXT level
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // After the inner loop, we've finished one full level
    result.push(currentLevelNodes);
  }

  return result;
}

```

### Why the `levelSize` Variable Matters

The most common mistake is using `i < queue.length` directly in the for-loop. Because we are `pushing` new children into the queue inside that loop, `queue.length` changes constantly. By "freezing" the size in a variable like `levelSize`, we create a snapshot of exactly how many nodes exist at the current depth.

---

### Complexity Analysis

* **Time Complexity:** O(n), where n is the number of nodes. We visit each node exactly once.
* **Space Complexity:** O(w), where w is the maximum width of the tree. In the worst case (a perfect binary tree), the queue will hold all leaves at the bottom level.

Would you like to see how to adapt this for a specific problem, like finding the maximum value at each level?

---

# Taught by the ChatGPT.

Level-by-level grouping is the **standard Breadth First Search (BFS) traversal where nodes are returned grouped by their level**.

Instead of printing nodes in one long sequence, we collect them **level wise**.

Example tree:

```
        1
      /   \
     2     3
    / \   / \
   4  5  6   7
```

Normal BFS output

```
1 2 3 4 5 6 7
```

Level-by-level grouping output

```
[
 [1],
 [2,3],
 [4,5,6,7]
]
```

Each inner array represents **one level of the tree**.

---

Concept

The key trick is:

1. Use a **queue**.
2. At every iteration check **how many nodes are currently in the queue**.
3. That number equals **nodes in the current level**.
4. Process exactly those many nodes.
5. While processing them, push their children into the queue (which belong to the next level).

So the queue naturally separates levels.

---

Algorithm intuition

Think like this:

“Queue contains all nodes of the current level.”

Then:

* Count them
* Process them
* Push their children → queue now contains next level

---

Code (JavaScript)

```javascript
function levelOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {

    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {

      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}
```

---

Step-by-step execution

Initial queue

```
[1]
```

Level 0

```
levelSize = 1
process node 1
push children 2,3
queue becomes [2,3]
```

Result

```
[[1]]
```

---

Level 1

```
levelSize = 2
process 2
process 3
push children 4,5,6,7
queue becomes [4,5,6,7]
```

Result

```
[[1],[2,3]]
```

---

Level 2

```
levelSize = 4
process 4,5,6,7
queue becomes []
```

Final result

```
[[1],[2,3],[4,5,6,7]]
```

---

Mental model (very important for DSA)

Think of BFS like **waves expanding outward**.

```
Level 0 → root
Level 1 → children
Level 2 → grandchildren
Level 3 → next layer
```

Queue always holds **the frontier of the wave**.

---

Common interview questions based on this

Once you understand level grouping, these problems become trivial:

1. Level Order Traversal
2. Zigzag Level Order
3. Right View
4. Left View
5. Average of Levels
6. Maximum width of tree
7. Minimum depth

All of them are **just modifications of this template**.

---

One deep insight for you

DFS recursion explores **depth first**.

BFS queue explores **level by level**.

So when a problem says:

* *nearest*
* *shortest*
* *minimum steps*
* *level by level*

Your brain should immediately say:

**BFS**

---

If you want, I can also show you a **very beautiful 4-step mental template for BFS problems** that makes solving **almost every tree BFS question automatic.**

---
