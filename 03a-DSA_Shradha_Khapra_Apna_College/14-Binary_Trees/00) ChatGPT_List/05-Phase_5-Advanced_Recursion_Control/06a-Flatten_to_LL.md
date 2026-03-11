# Taught by the Gemini.

To **flatten a binary tree into a linked list** means to reorder the tree such that it follows a pre-order traversal sequence, but all nodes are connected via their **right** child pointers. The **left** child pointers should always be `null`.

---

### The Intuition

Since the desired order is **Root -> Left -> Right** (pre-order), the standard recursive way to do this is to:

1. Recursively flatten the **left** subtree.
2. Recursively flatten the **right** subtree.
3. Store the original right subtree temporarily.
4. Move the flattened left subtree to the **right** side of the current node.
5. Find the end of this new right-side chain and attach the original right subtree there.
6. Set the **left** pointer to `null`.

---

### Implementation (JavaScript)

```javascript
function flatten(root) {
  if (!root) return;

  // 1. Flatten the left and right subtrees
  flatten(root.left);
  flatten(root.right);

  // 2. Store the subtrees
  const leftSubtree = root.left;
  const rightSubtree = root.right;

  // 3. Move the left subtree to the right
  root.right = leftSubtree;
  root.left = null;

  // 4. Find the end of the new right chain to attach the old right subtree
  let current = root;
  while (current.right !== null) {
    current = current.right;
  }
  
  current.right = rightSubtree;
}

```

---

### The "In-Place" O(1) Space Trick

If you want to optimize space, you can use the **Morris Traversal** logic. Instead of recursing, you can find the rightmost node of the left subtree and connect it directly to the right subtree.

1. If the current node has a left child:
* Find the **rightmost** node in the left subtree.
* Connect that node's **right** pointer to the current node's **right** child.
* Move the entire left subtree to the right.
* Set the **left** child to `null`.


2. Move to the next node (the new `right` child) and repeat.

---

### Complexity Analysis

* **Time Complexity:** **O(N)**. In the first approach, we visit each node. In the Morris-style approach, each edge is traversed at most twice.
* **Space Complexity:** **O(H)** for the recursive approach (due to the stack) or **O(1)** for the iterative Morris-style approach.

---

### Summary Table: Tree Transformations

| Goal | Technique |
| --- | --- |
| **Flatten to List** | Pre-order move left subtree to right, attach old right to end. |
| **Serialize** | Pre-order traversal with `null` markers for reconstruction. |
| **Max Path Sum** | Post-order, track global max, return path gain to parent. |

---

Would you like me to show you the **O(1) space iterative code** for this, or are you ready to move on to a different category of tree problems?

---

# Taught by the ChatGPT.

The problem usually states:

> Flatten the binary tree into a **linked list in-place** following **preorder traversal**.

After flattening:

```text
left pointers  → null
right pointers → next node in preorder
```

So the tree becomes something like a **right-skewed linked list**.

---

Example

Original tree

```text
        1
       / \
      2   5
     / \   \
    3   4   6
```

Preorder traversal:

```text
1 → 2 → 3 → 4 → 5 → 6
```

Flattened tree

```text
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

---

Core Idea

We want the final structure to follow **preorder**:

```text
node → left → right
```

For every node:

1. Flatten left subtree
2. Flatten right subtree
3. Insert the flattened left subtree between the node and right subtree

---

Visual Transformation

Suppose we are at node:

```text
      node
     /    \
   left   right
```

Steps:

1. Move `left` subtree to the right
2. Attach original `right` subtree to the **end of the new right chain**

Result:

```text
node
  \
  left
     \
      ...
        \
        right
```

---

Algorithm Steps

At each node:

1. Recursively flatten left subtree
2. Recursively flatten right subtree
3. Save right subtree
4. Move left subtree to right
5. Set left to null
6. Attach saved right subtree at end

---

Code

```javascript
var flatten = function(root) {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  let left = root.left;
  let right = root.right;

  root.left = null;
  root.right = left;

  let current = root;

  while (current.right) {
    current = current.right;
  }

  current.right = right;
};
```

---

Dry Run

Tree

```text
    1
   / \
  2   5
```

Step:

Flatten left subtree → becomes

```text
2
```

Attach:

```text
1
 \
  2
```

Then attach original right:

```text
1
 \
  2
   \
    5
```

---

Time Complexity

Worst case:

```text
O(n²)
```

Because we repeatedly walk to the end of the right chain.

---

Optimized Version (O(n))

A better idea is to **flatten using reverse preorder traversal**:

```text
right → left → node
```

We maintain a `prev` pointer.

---

Optimized Code

```javascript
var flatten = function(root) {
  let prev = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    dfs(node.left);

    node.right = prev;
    node.left = null;

    prev = node;
  }

  dfs(root);
};
```

---

Why This Works

Reverse preorder ensures:

```text
We always know what node should come next
```

So we connect:

```text
node.right = prev
```

and move backward through the tree.

---

Time Complexity

```text
O(n)
```

Each node processed once.

---

Space Complexity

```text
O(h)
```

Where **h = tree height**.

---

One-line intuition

We convert the tree into a **preorder sequence stored using right pointers only**.

---

Connection to Real Software Systems

This pattern is similar to **linearizing hierarchical structures**, such as:

* flattening nested menus
* converting AST trees into execution order
* flattening DOM nodes for rendering pipelines

In many systems, hierarchical structures are **flattened for faster traversal**, exactly like this problem.

---

If you'd like, I can also show you a **very clever O(n) iterative solution using a stack**, which many senior engineers prefer in interviews because it avoids recursion and is easier to reason about.

---