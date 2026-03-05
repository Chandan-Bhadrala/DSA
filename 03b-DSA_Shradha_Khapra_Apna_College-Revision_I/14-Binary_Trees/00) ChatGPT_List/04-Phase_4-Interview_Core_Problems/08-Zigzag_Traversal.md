# Taught by the Gemini.

The **Zigzag Traversal** (also known as **Spiral Order Traversal**) is a creative twist on the standard Level Order Traversal. Instead of reading every level from left to right, you alternate:

1. **Level 0:** Left to Right
2. **Level 1:** Right to Left
3. **Level 2:** Left to Right
4. ...and so on.

---

## The Strategy: BFS + Toggle Flag

We use the same **Level Order Line by Line** structure (with a nested loop), but we introduce a boolean flag (e.g., `leftToRight`) that flips after every level is processed.

---

## JavaScript Implementation

```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true; // Flag to control the direction

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            // Logic to handle the zigzag direction
            if (leftToRight) {
                // Normal push: [1, 2, 3]
                currentLevel.push(node.val);
            } else {
                // Add to beginning: [3, 2, 1]
                currentLevel.unshift(node.val);
            }

            // Always add children to the queue in standard order (Left then Right)
            // This ensures the NEXT level is ready in the queue correctly
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
        leftToRight = !leftToRight; // Flip the direction for the next level
    }

    return result;
};

```

---

## Why `unshift()`?

By using `unshift()` when `leftToRight` is false, we are essentially reversing the array as we build it. This is more efficient than building a standard array and then calling `.reverse()` at the end of every level, though both methods achieve the same result.

---

## Visual Example

```text
        1
       / \
      2   3
     / \   \
    4   5   6

```

1. **Level 0:** `leftToRight = true`. Process `[1]`. `result = [[1]]`. **Flip flag.**
2. **Level 1:** `leftToRight = false`. Process `2`, then `3`. Use `unshift`. `result = [[1], [3, 2]]`. **Flip flag.**
3. **Level 2:** `leftToRight = true`. Process `4, 5, 6`. Use `push`. `result = [[1], [3, 2], [4, 5, 6]]`.

---

## Performance Comparison

| Action | Complexity |
| --- | --- |
| **Visiting Nodes** | **O(n)** |
| **Space (Queue)** | **O(w)** (max width of tree) |
| **Array reversal** | **O(k)** where k is level size |

Overall, the **Time Complexity** remains **O(n)** and **Space Complexity** remains **O(n)**.

---

## Summary of Level Traversals

* **Standard:** BFS + Push
* **Line by Line:** BFS + Nested Loop
* **Zigzag:** BFS + Nested Loop + Flag + Unshift/Reverse

**Ready for a new challenge? Should we dive into the "Lowest Common Ancestor" (LCA) or "Path Sum" problems?**

---

# Taught by the ChatGPT.

Good. This is just a small twist over level order.

Definition (one line essence):
Zigzag traversal = level order traversal but alternate direction at every level.

So:

Level 0 → left to right
Level 1 → right to left
Level 2 → left to right
Level 3 → right to left
… and so on.

---

Example

```
        1
       / \
      2   3
     / \   \
    4   5   6
```

Normal level order:

```
[ [1],
  [2, 3],
  [4, 5, 6] ]
```

Zigzag:

```
[ [1],
  [3, 2],
  [4, 5, 6] ]
```

Notice second level is reversed.

---

Core Idea

This is simply:

Level Order Traversal + Direction Control

We already know how to get nodes level by level.

Now we just:

* Keep a boolean flag → leftToRight
* Reverse the level when needed

---

Approach 1 (Simple & Clean)

```javascript
const zigzagLevelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [];
  queue.push(root);

  let leftToRight = true;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!leftToRight) {
      currentLevel.reverse();
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result;
};
```

Time: O(n)
(Reverse is linear per level, total still O(n))

---

Approach 2 (More Efficient — No Reverse)

Instead of reversing, we directly insert in correct order.

Trick:
Use index placement.

```javascript
const zigzagLevelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [];
  queue.push(root);

  let leftToRight = true;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      let index = leftToRight ? i : levelSize - 1 - i;
      currentLevel[index] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result;
};
```

No reverse needed.

Cleaner for interviews.

---

Why This Works

Queue still processes normally:
Left child first, then right child.

But we control how values are stored.

Traversal order stays same.
Storage order changes.

Very important concept:
You don’t need to change traversal logic — just control output placement.

---

Pattern Recognition

Zigzag = Level Order + Alternating State

This “state toggling” pattern appears in:

* Spiral matrix
* Alternating BFS
* Bipartite graph coloring
* Tree level direction control

Small modification, same base structure.

---

Deep Understanding

Level order = breadth expansion.

Zigzag doesn’t change tree exploration.
It only changes how results are recorded.

This is separation of concerns:
Traversal logic vs output formatting.

Very mature way to think.

---

Web Development Connection

Imagine rendering comments in alternating UI layout:

Level 1 → left aligned
Level 2 → right aligned
Level 3 → left aligned

Same idea:
Data structure same.
Presentation changes.

Zigzag traversal is basically alternating presentation of hierarchical data.

---

If you want next, we can:

* Do Vertical Order Traversal (next difficulty jump)
* Do Boundary Traversal (combination problem)
* Or move into Tree DP like Maximum Path Sum (strong recursion mastery).

---