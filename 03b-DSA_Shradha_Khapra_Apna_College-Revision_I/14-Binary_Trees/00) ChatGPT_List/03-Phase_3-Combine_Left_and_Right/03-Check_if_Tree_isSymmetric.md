# Taught by the Gemini.

Checking if a binary tree is **symmetric** (a mirror image of itself) is a classic problem that tests your understanding of recursion and tree traversal.

To determine if a tree is symmetric, we don't just check if the left and right children are the same; we check if they are **reflections** of each other.

---

## The Logic: The Mirror Test

A tree is symmetric if the left subtree is a mirror image of the right subtree. Two nodes, `node1` and `node2`, are mirrors if:

1. Both are `null` (Symmetric).
2. Only one is `null` (Not symmetric).
3. Their values are **equal**.
4. The **left** child of `node1` is a mirror of the **right** child of `node2`.
5. The **right** child of `node1` is a mirror of the **left** child of `node2`.

---

## The JavaScript Implementation

Here is how you can implement this using a recursive approach:

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    if (!root) return true;
    
    return isMirror(root.left, root.right);
};

const isMirror = function(t1, t2) {
    // If both nodes are null, we've reached the end of a symmetric branch
    if (t1 === null && t2 === null) return true;
    
    // If only one is null, or values don't match, it's not symmetric
    if (t1 === null || t2 === null || t1.val !== t2.val) return false;
    
    // Recurse: Compare outer children and inner children
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
};

```

---

## Breakdown of the Comparison

Imagine the tree like this:

```text
     1
   /   \
  2     2
 / \   / \
3   4 4   3

```

* The function starts by comparing the two `2` nodes.
* It then checks if the **left** child of the left `2` (which is `3`) matches the **right** child of the right `2` (which is also `3`).
* Finally, it checks if the **inner** children (`4` and `4`) match.

### Complexity

* **Time Complexity**: **O(n)**, because we visit every node in the tree once.
* **Space Complexity**: **O(h)**, where **h** is the height of the tree, due to the recursion stack.

---

Would you like to see how to solve this **iteratively** using a queue instead?

---

# Taught by the ChatGPT.

Good.
This problem is a beautiful extension of:

* Check identical trees
* Invert tree

Now we combine both ideas.

Goal: **Check if a binary tree is symmetric around its center.**

This problem is famously asked as
Symmetric Tree

---

What Does Symmetric Mean?

A tree is symmetric if:

Left subtree is a mirror of right subtree.

Example (Symmetric):

```
        1
       / \
      2   2
     / \ / \
    3  4 4  3
```

Not symmetric:

```
        1
       / \
      2   2
       \   \
        3   3
```

---

Key Idea (Very Important)

This is NOT:
compare left with left
compare right with right

This is:

compare left subtree with right subtree in mirror way

Meaning:

left.left  ↔  right.right
left.right ↔  right.left

So recursion moves in CROSS direction.

---

Recursive Thinking

We write a helper function:

isMirror(node1, node2)

Base cases:

1. Both null → true
2. One null → false
3. Values different → false

Recursive case:

Return:

```
isMirror(node1.left, node2.right) &&
isMirror(node1.right, node2.left)
```

Notice the CROSS comparison.

---

Clean Code

```javascript
function isSymmetric(root) {
  if (!root) return true;

  function isMirror(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    return (
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    );
  }

  return isMirror(root.left, root.right);
}
```

---

Why This Works

At every level you check:

Outer pair
Inner pair

It is like folding the tree vertically and checking equality.

---

Mental Model (Very Important)

In “Identical Trees” problem you did:

left ↔ left
right ↔ right

Here you do:

left ↔ right
right ↔ left

That single direction change is the whole difference.

---

Call Stack Flow (Small Example)

Tree:

```
    1
   / \
  2   2
```

Flow:

isMirror(2,2)

* compare values → ok
* compare (null,null) → ok
* compare (null,null) → ok

Return true.

---

Time and Space

Time: O(n)
Each node visited once.

Space: O(h)
Recursion stack.

---

Very Important Pattern Recognition

This is:

“Compare two recursive structures in mirror direction”

This pattern appears in:

* Palindrome linked list (two pointers from ends)
* Checking palindrome string recursively
* Validating mirrored UI layout trees

---

Web Development Connection (Important for You)

Imagine:

You build a nested comment UI component.

To check if layout is symmetric,
you recursively compare:

left branch of DOM tree
with
right branch of DOM tree

Same logic.

Also useful in:

* Deep comparing nested JSON in mirrored structure
* Checking if binary tree stored in DB is symmetric
* Validating layout builder structures

---

Now think carefully:

If I slightly change problem to:

“Return true if left subtree is subtree of right subtree”

Would the logic remain cross comparison?

Or would it become identical tree comparison inside recursion?

Think about it before answering.

---