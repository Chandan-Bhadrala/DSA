# Taught by the Gemini.

Searching for an element in a binary tree depends on whether the tree is a **General Binary Tree** (unsorted) or a **Binary Search Tree (BST)** (sorted).

I'll show you both, as the logic changes significantly between them.

---

### 1. General Binary Tree (Unsorted)

In an unsorted tree, the element could be anywhere. We have to check every single node until we find it. This is essentially a **Linear Search** on a tree.

**The Logic:**

* **Base Case 1**: If the node is `null`, we didn't find it here (return `false`).
* **Base Case 2**: If the node's value matches our target, we found it (return `true`).
* **Recursive Step**: Search the **left** subtree. If found, stop and return `true`. Otherwise, search the **right** subtree.

```javascript
/**
 * Search in an unsorted Binary Tree
 * @param {Node} root 
 * @param {number} target 
 * @returns {boolean}
 */
function searchTree(root, target) {
  // Base Case: If we hit a null node, the target isn't here
  if (root === null) return false;

  // Base Case: We found the value!
  if (root.value === target) return true;

  // Recursive Step: Search Left OR Right
  // If either returns true, the target exists in the tree
  return searchTree(root.left, target) || searchTree(root.right, target);
}

// --- Example ---
//      10
//     /  \
//    5    20
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);

console.log(searchTree(root, 20)); // Output: true
console.log(searchTree(root, 99)); // Output: false

```

---

### 2. Binary Search Tree (BST - Sorted)

In a **BST**, the tree is organized:

* Values **smaller** than the root go to the **left**.
* Values **larger** than the root go to the **right**.

This allows us to skip half the tree at every step, making it much faster (**O(log n)**).

**The Logic:**

* If target `<` current value: Go **left**.
* If target `>` current value: Go **right**.
* If target `==` current value: Found it!

```javascript
/**
 * Optimized Search for a BST
 * @param {Node} root 
 * @param {number} target 
 * @returns {Node|null} - Returns the node if found, else null
 */
function searchBST(root, target) {
  // Base Case: Not found or found
  if (root === null || root.value === target) {
    return root;
  }

  // If target is smaller, only look in the left subtree
  if (target < root.value) {
    return searchBST(root.left, target);
  }

  // If target is larger, only look in the right subtree
  return searchBST(root.right, target);
}

```

---

### Comparison of Performance

| Tree Type | Strategy | Time Complexity |
| --- | --- | --- |
| **General Binary Tree** | Visit every node | **O(n)** |
| **Binary Search Tree** | Divide and Conquer | **O(log n)** |

### Key Takeaway

If you are searching an unsorted tree, you **must** use the `||` (OR) logic to check both sides. If you are searching a BST, you use `if/else` to choose **only one** side.

---

Would you like to see how to find the **Minimum** or **Maximum** value in a tree next?

---

# Taught by the ChatGPT.

Good. Now we move from **aggregate problems** (count, sum) to a **decision problem**.

Here the combine logic changes again.

---

## 🔹 Problem: Search Element in a Binary Tree

Given:

* `root` of a binary tree
* `target` value

Return `true` if the element exists, otherwise `false`.

Important:
This is a **normal binary tree**, not a BST.
So we cannot use ordering properties.

---

## 🔹 Step 1: Think Recursively

Stand on a node.

Ask:

1. If node is null → can target exist?
   → No → return `false`

2. If current node value equals target?
   → Yes → return `true`

3. Otherwise?
   → It might be in left subtree
   → Or in right subtree

So:

```
search(root) =
    true if root.value === target
    OR search(root.left)
    OR search(root.right)
```

Notice the **OR logic**.

---

## 🔹 Recursive Code

```js
function search(root, target) {
  // Base case
  if (!root) return false;

  // If found at current node
  if (root.value === target) return true;

  // Otherwise search left or right
  return search(root.left, target) ||
         search(root.right, target);
}
```

Very clean.

---

## 🔹 Dry Run

Tree:

```
        1
       / \
      2   3
     / \
    4   5
```

Search for `5`

Call stack:

```
search(1,5)
→ not match
→ search(2,5)

search(2,5)
→ not match
→ search(4,5)

search(4,5)
→ not match
→ search(null) → false
→ search(null) → false
→ return false

Back to 2:
→ search(5,5)
→ match → true
```

Since we used `||`, once `true` appears, recursion stops bubbling upward.

---

## 🔹 Time Complexity

* Worst case: O(n)
  (If target is last node or not present)

* Space: O(h)
  (Recursive stack height)

---

## 🔹 Iterative Version (Using Queue)

```js
function search(root, target) {
  if (!root) return false;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.value === target) return true;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
}
```

Same time complexity → O(n)

---

## 🔹 Pattern Recognition (Very Important)

Tree recursion template again:

```
if (!root) return base;

if (condition matches root) return something;

left = recurse(left)
right = recurse(right)

return combine(left, right)
```

Here:

* base → false
* combine → `left || right`

For:

* Count → `1 + left + right`
* Sum → `root.val + left + right`
* Search → `left || right`
* All nodes satisfy condition → `left && right`

See how powerful this single pattern is?

---

## 🔹 Web Development Connection (For You)

Imagine:

* Searching a nested comment thread for a specific comment ID
* Searching nested folders for a file name
* Searching deeply nested categories in MongoDB document

If it's not ordered → you must traverse everything.
Exactly like this.

But…

If this was a **Binary Search Tree**, we could reduce time to O(log n) in balanced case.

That’s the next evolution.

---

Now small challenge:

How would you modify this function to return the **node itself instead of true/false**?

Think carefully — what should the base case return?

---