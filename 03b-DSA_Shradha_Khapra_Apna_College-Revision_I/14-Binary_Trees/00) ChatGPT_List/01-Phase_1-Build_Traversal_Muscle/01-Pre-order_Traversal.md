# Taught by the Gemini.

Pre-order traversal is one of the most common ways to visit every node in a binary tree. The "Pre" in the name tells you the order: you visit the **Root** node **before** its children.

The pattern is always: **Root → Left → Right**.

---

## How it Works

Imagine you are standing at the top of a tree. To perform a pre-order traversal, you follow these three steps at every single node:

1. **Process** the current node (e.g., print its value).
2. Move to the **Left** child and repeat.
3. Move to the **Right** child and repeat.

---

## The JavaScript Implementation

Since we are working with JavaScript, we usually represent a tree node as an object with `value`, `left`, and `right` properties.

### 1. The Recursive Approach

Recursion is the most "natural" way to write this because trees are recursive structures.

```javascript
// Define the Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Pre-order Traversal: Root -> Left -> Right
 */
function preOrder(root) {
  // Base case: if the node is empty, just return
  if (!root) {
    return;
  }

  // 1. Visit the Root
  console.log(root.value);

  // 2. Traverse the Left subtree
  preOrder(root.left);

  // 3. Traverse the Right subtree
  preOrder(root.right);
}

// Example Usage:
//        1
//       / \
//      2   3
//     / \
//    4   5
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

preOrder(tree); 
// Output: 1, 2, 4, 5, 3

```

### 2. The Iterative Approach (Using a Stack)

If you have a very deep tree, recursion might hit a "stack overflow." In those cases, you can use your own **Stack** data structure to mimic the recursion.

```javascript
function preOrderIterative(root) {
  if (!root) return;

  const stack = [root];

  while (stack.length > 0) {
    // Pop the last element added
    const node = stack.pop();
    console.log(node.value);

    // IMPORTANT: Push Right child FIRST, then Left.
    // Because it's a stack (Last-In-First-Out), pushing 
    // the left child last ensures it gets processed first.
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

```

---

## Why use Pre-order?

* **Cloning Trees:** It’s great for creating a copy of a tree because you create the parent node before you try to attach its children.
* **Expression Trees:** In math-based trees, pre-order results in **Prefix notation** (e.g., `+ 1 2` instead of `1 + 2`).

Would you like to see how **In-order** or **Post-order** traversals differ from this one?

---

# Taught by the ChatGPT.

Pre-order traversal means:

Root → Left → Right

In one line essence: **Process the node first, then recursively process left and right subtree.**

Since you’re practicing DSA seriously now, I’ll give you both recursive and iterative versions (important for interviews).

---

Recursive Version (Most natural)

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  const result = [];

  function dfs(node) {
    if (!node) return;

    result.push(node.val);   // 1. Root
    dfs(node.left);          // 2. Left
    dfs(node.right);         // 3. Right
  }

  dfs(root);
  return result;
}
```

Time Complexity: O(n)
Space Complexity: O(h)  (call stack height)

---

Iterative Version (Using Stack)

Preorder is easiest traversal to convert into stack logic.

Key idea:

* Stack is LIFO
* So push right first, then left
* That way left gets processed first

```javascript
function preorderTraversal(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}
```

Time Complexity: O(n)
Space Complexity: O(h)

---

Very Important Interview Insight

Why push right first?

Because stack works Last In First Out.

If you push:

* left first
* then right

Right will be processed before left (which is wrong for preorder).

So always:
push right → push left → pop → process left first.

---

Web Development Connection (Important for You)

Think of recursive preorder like:

* Rendering a React component tree.
* Parent renders first.
* Then children render.
* Then their children.

It’s exactly tree traversal logic behind component rendering.

Later when you build complex nested comments or folder structures, this pattern directly applies.

---

If you want, next we can:

* Write dry run example
* Or implement inorder and postorder
* Or build tree from array and then traverse

You choose direction.

---