# Taught by the Gemini.

Checking if a root-to-leaf path exists with a specific sum is a fundamental binary tree problem that relies on path tracking as we descend the tree.

---

### The Intuition

The goal is to determine if there is a path from the root node to any leaf node (a node with no children) where the sum of the node values equals the target sum.

As we traverse down:

1. We subtract the current node's value from the **targetSum**.
2. If we reach a leaf node and the remaining **targetSum** is equal to the leaf's value, we have found a valid path.
3. If we reach a null node, that path is invalid.

---

### Implementation (JavaScript)

```javascript
function hasPathSum(root, targetSum) {
  // If the node is null, we haven't found a path
  if (root === null) {
    return false;
  }

  // Check if we are at a leaf node
  if (root.left === null && root.right === null) {
    // Is the remaining sum equal to the leaf's value?
    return targetSum === root.val;
  }

  // Recurse to children with the updated remaining sum
  const remainingSum = targetSum - root.val;
  
  return hasPathSum(root.left, remainingSum) || 
         hasPathSum(root.right, remainingSum);
}

```

---

### Key Points to Remember

* **Leaf Node Condition:** A leaf node is defined as a node where both `left` and `right` are `null`. Be careful not to count nodes with only one child as leaves.
* **Base Cases:** The logic handles `null` roots immediately, and the leaf check ensures we only return `true` if we complete a full path to the bottom.
* **Complexity:**
* **Time:** **O(N)**, because in the worst case, we visit every node in the tree.
* **Space:** **O(H)**, where **H** is the height of the tree (recursion stack).



---

### Comparison Summary

Since we have covered several path and node-based problems, here is a quick reference table:

| Problem | Key Strategy |
| --- | --- |
| **Lowest Common Ancestor** | Post-order traversal (bottom-up), return nodes if found. |
| **Subtree of Another** | Check for identity at every node of the main tree. |
| **Maximum Path Sum** | Post-order, track global max, return max path gain. |
| **Path Sum** | Pre-order, subtract node value from target while descending. |

Would you like me to create a **coding challenge** based on these binary tree patterns for you to test your knowledge?

---

# Taught by the ChatGPT.

This problem is usually called **Path Sum**.

The question is:

> Given a binary tree and a target sum, determine whether there exists a **root-to-leaf path** such that the sum of the node values equals the target.

Important condition:

```text
The path must start at the root and end at a leaf node.
```

A **leaf node** is a node with **no children**.

---

Example

Tree

```text
        5
       / \
      4   8
     /   / \
    11  13  4
   /  \
  7    2
```

Target Sum

```text
22
```

Valid path:

```text
5 → 4 → 11 → 2
```

Sum:

```text
5 + 4 + 11 + 2 = 22
```

So the answer is **true**.

---

Core Idea

At each node we **reduce the remaining sum**.

Instead of accumulating sum upward, we subtract the node value from the target.

Example:

```text
target = 22
node = 5
remaining = 22 - 5 = 17
```

Then we ask the children:

```text
Can you form a path with sum = 17 ?
```

---

Base Conditions

1. If node is `null`

```text
return false
```

2. If node is a **leaf**

```text
check if remaining sum == node.val
```

If yes → path found.

---

Recursive Idea

For each node:

```text
remainingSum = targetSum - node.val
```

Then check:

```text
left subtree OR right subtree
```

---

Code

```javascript
var hasPathSum = function(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  let remaining = targetSum - root.val;

  return (
    hasPathSum(root.left, remaining) ||
    hasPathSum(root.right, remaining)
  );
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

Target

```text
3
```

Execution:

Node **1**

```text
remaining = 3 - 1 = 2
```

Left child:

```text
2 is leaf
2 == remaining
```

Result:

```text
true
```

Path:

```text
1 → 2
```

---

Time Complexity

```text
O(n)
```

Because every node may be visited once.

---

Space Complexity

```text
O(h)
```

Where **h = tree height** (recursion stack).

Worst case (skewed tree):

```text
O(n)
```

---

One-line intuition

At each node we **reduce the target sum** and ask the children:

```text
Can you complete the remaining sum?
```

---

Connection to Web Development Thinking

This pattern appears in **recursive aggregation problems** such as:

* validating nested configuration trees
* permission inheritance in role hierarchies
* checking constraints in dependency trees

You **pass a remaining constraint downward**, similar to passing `remainingSum` here.

---

If you'd like, I can also show you the **follow-up problem** that appears very often in interviews:

**“Return all root-to-leaf paths whose sum equals the target.”**

It introduces a **very important backtracking pattern in trees** that shows up in many advanced problems.

---