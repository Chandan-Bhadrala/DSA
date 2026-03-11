# Taught by the Gemini.

Determining if one binary tree is a **subtree** of another is a classic problem that builds on the concept of checking if two trees are **identical**.

---

### The Intuition

For a tree `S` to be a subtree of tree `T`, one of two things must be true:

1. Tree `T` is identical to tree `S` (starting at the root of `T`).
2. Tree `S` is a subtree of the left child of `T`.
3. Tree `S` is a subtree of the right child of `T`.

To solve this, we create two helper functions:

* **isIdentical:** A function to check if two trees have the exact same structure and values.
* **isSubtree:** The main recursive function that traverses `T` to see if `isIdentical` ever returns true for any node in `T`.

---

### Implementation (JavaScript)

```javascript
// Helper: Checks if two trees are identical
function isIdentical(node1, node2) {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  
  return (node1.val === node2.val) &&
         isIdentical(node1.left, node2.left) &&
         isIdentical(node1.right, node2.right);
}

// Main: Checks if subRoot is a subtree of root
function isSubtree(root, subRoot) {
  // An empty tree is always a subtree
  if (subRoot === null) return true;
  // A non-empty tree cannot be a subtree of an empty tree
  if (root === null) return false;

  // Check if trees are identical at the current root
  if (isIdentical(root, subRoot)) return true;

  // Otherwise, recurse to the left and right children
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

```

---

### Complexity Analysis

* **Time Complexity:** **O(M * N)**, where **M** is the number of nodes in the main tree and **N** is the number of nodes in the subtree. In the worst case, for every node in `T`, we perform an `isIdentical` check that traverses the entire `S` tree.
* **Space Complexity:** **O(H)**, where **H** is the height of the main tree, due to the recursive stack depth.

### Pro-Tip

While the recursive approach is standard and easy to understand, for very large trees, this can be optimized to **O(M + N)** using techniques like **String Serialization** (converting the trees to strings and using a substring search) or **Merkle Hashing** to quickly compare subtrees.

---

Would you like to see how to implement the **string serialization** approach for better performance on large datasets?

---

# Taught by the ChatGPT.

This is a classic binary tree problem.

The question usually appears as:

> Given two binary trees **root** and **subRoot**, determine whether **subRoot is a subtree of root**.

A tree **T2** is a subtree of **T1** if **there exists a node in T1 whose entire subtree is identical to T2**.

---

## Visual Example

Main Tree

```
        3
       / \
      4   5
     / \
    1   2
```

SubTree

```
      4
     / \
    1   2
```

Here the answer is **true** because the subtree starting at node **4** matches exactly.

---

## Important Rule

A subtree must match:

```
structure + values
```

Both must be identical.

---

## Core Idea

Break the problem into **two smaller problems**.

1. Traverse the main tree.
2. At every node, check:

```
Is this subtree identical to subRoot?
```

So we need **two functions**.

```
isSubtree(root, subRoot)
isSameTree(a, b)
```

---

## Step 1 — Check if two trees are identical

Two trees are identical if:

```
1. Both are null → true
2. One null → false
3. Values equal
4. Left subtree identical
5. Right subtree identical
```

### Code

```javascript
function isSameTree(a, b) {
  if (!a && !b) return true
  if (!a || !b) return false

  if (a.val !== b.val) return false

  return (
    isSameTree(a.left, b.left) &&
    isSameTree(a.right, b.right)
  )
}
```

---

## Step 2 — Traverse the main tree

At every node:

```
check if trees match
otherwise check left
otherwise check right
```

### Code

```javascript
var isSubtree = function(root, subRoot) {
  if (!root) return false

  if (isSameTree(root, subRoot)) return true

  return (
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  )
}
```

---

## Dry Run Intuition

Imagine the main tree like this:

```
        3
       / \
      4   5
     / \
    1   2
```

Traversal happens like:

```
Check node 3 → not match
Check node 4 → match found
```

Then `isSameTree` verifies the full subtree.

---

## Time Complexity

Worst case:

```
O(n * m)
```

Where:

```
n = nodes in root
m = nodes in subRoot
```

Because at every node we may compare two trees.

---

## Space Complexity

```
O(h)
```

Where **h = tree height** (recursion stack).

Worst case:

```
O(n)
```

---

## One-line intuition

We **scan every node of the main tree**, and whenever a node matches the root of `subRoot`, we **check if the entire subtree matches**.

---

## Very Important Pattern for DSA

This problem teaches a **very common tree pattern**:

```
Traverse tree
+
Solve a smaller tree comparison problem
```

This pattern also appears in problems like:

* tree equality
* symmetric tree
* serialize/deserialize trees

---

If you'd like, I can also show you a **very clever O(n) trick using tree serialization** that many senior engineers use to solve this problem faster and more elegantly.

---