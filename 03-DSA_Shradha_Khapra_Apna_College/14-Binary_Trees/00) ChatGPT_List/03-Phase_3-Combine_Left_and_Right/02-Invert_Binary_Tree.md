# Taught by the Gemini.

Inverting a binary tree (also known as creating a "mirror" of a tree) is a classic problem. The goal is to swap the **left** and **right** children of every node in the tree.

---

## The Logic

Think of it like looking at the tree in a mirror:

1. Start at the root.
2. Swap its left child with its right child.
3. Move down to the children and repeat the swap for them.
4. Stop when you reach a `null` node (a leaf's child).

### The JavaScript Implementation

Using recursion is the most intuitive way to handle this. We swap the references and then call the function on the subtrees.

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to invert a binary tree
 * @param {Node} root
 * @return {Node}
 */
const invertTree = (root) => {
  // 1. Base case: If node is null, we've reached the end
  if (!root) {
    return null;
  }

  // 2. Perform the swap
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 3. Recursively call for children
  invertTree(root.left);
  invertTree(root.right);

  // 4. Return the modified root
  return root;
};

// Example Usage:
const tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(7);

const invertedRoot = invertTree(tree);
console.log(invertedRoot.left.val);  // Output: 7 (previously was 2)
console.log(invertedRoot.right.val); // Output: 2 (previously was 7)

```

---

## Visualizing the Change

Imagine a simple tree:

```text
    4               4
   / \     =>      / \
  2   7           7   2

```

When `invertTree(4)` is called:

1. It swaps the nodes `2` and `7`.
2. It then goes into node `7` to see if it has children to swap.
3. It then goes into node `2` to see if it has children to swap.
4. Once all levels are swapped, the tree is a mirror image.

### Complexity Analysis

* **Time Complexity:** **O(n)** because we must visit every node exactly once to perform the swap.
* **Space Complexity:** **O(h)** where **h** is the height of the tree (representing the call stack). In the worst case (a skewed tree), this is **O(n)**.

---

### Pro-Tip: The "One-Liner"

In modern JavaScript, you can use **array destructuring** to make the swap even cleaner:

```javascript
const invertTree = (root) => {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};

```

Would you like to try a challenge where we check if a tree is a **Symmetric** (a mirror of itself)?

---

# Taught by the ChatGPT.

Good. This is one of the most important tree problems.
Very clean concept. Very powerful pattern.

Goal: **Convert a tree into its mirror**.

That means:

For every node:

* Left child becomes right
* Right child becomes left

---

Example

Original:

```
        4
       / \
      2   7
     / \ / \
    1  3 6  9
```

After invert:

```
        4
       / \
      7   2
     / \ / \
    9  6 3  1
```

---

Core Idea

At every node:

1. Swap left and right
2. Recursively invert left subtree
3. Recursively invert right subtree

That’s it.

You are doing a local swap + recursive work.

---

Recursive Thinking

We solve it for **current node**, and trust recursion to solve for children.

Base case:
If node is null → return null.

---

Code (Clean and Minimal)

```javascript
function invertTree(root) {
  if (!root) return null;

  // Swap children
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
```

---

Important Observation

We swapped first, then called recursion.

Could we call recursion first and then swap?

Yes.

Both work.

Because:

* Either you swap now and recurse on swapped children
* Or recurse first and then swap results

Same final structure.

---

Call Stack Flow (Small Example)

Tree:

```
    1
   / \
  2   3
```

Flow:

1. At 1 → swap (3,2)
2. Recurse left → node 3

   * swap nulls
3. Recurse right → node 2

   * swap nulls

Done.

---

Time and Space Complexity

Time: O(n)
Every node visited once.

Space: O(h)
Height of tree due to recursion stack.

---

Very Important Pattern

This problem teaches:

“Modify structure while traversing”

You are not calculating a value.
You are mutating structure.

This is different from:

* Count nodes
* Check identical
* Min depth

Those return values.

This one transforms structure.

---

Web Development Connection (Very Important for You)

This is exactly like:

* Recursively modifying nested JSON objects
* Transforming API response structure
* Converting nested comments to reversed order
* Swapping child arrays in tree-like UI components

Example:

```javascript
{
  id: 1,
  children: [
    { id: 2 },
    { id: 3 }
  ]
}
```

Inversion = reverse children recursively.

Same logic.

So this is not just DSA.
This is real-world recursive data transformation.

---

Now think carefully:

Why does this problem NOT need two return statements like count problems?

Because we are not combining values.
We are just transforming structure.

That distinction is very important in recursion.

---

Next step for you:

Do you want to see:

1. Iterative version using queue (BFS style)?
2. Or mirror check problem (is symmetric tree)?
3. Or dry run deeper example to strengthen recursion intuition?

Tell me which direction you want.

---