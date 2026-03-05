# Taught by the Gemini.

To print all root-to-leaf paths, we need to traverse the tree (typically using **Depth First Search**) and keep track of the current path we are building. Once we reach a **leaf node** (a node with no left or right children), we know a complete path has been formed.

---

## The logic: Path Tracking

1. **Start at the root**: Add the root's value to a running list (the path).
2. **Check if it's a leaf**: If both `left` and `right` are `null`, we've finished a path. Convert the list to a string and store it.
3. **Recurse**: If not a leaf, move to the left child and then the right child, passing the current path along.
4. **Backtrack**: Since we are using an array to track the path, we remove the last element after exploring both children to keep the path accurate for other branches.

---

## The JavaScript Implementation

Here is the solution using a recursive approach:

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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    const result = [];
    
    // Helper function for DFS
    const findPaths = (node, currentPath) => {
        if (!node) return;

        // Add current node value to path
        currentPath.push(node.val);

        // Check if it's a leaf node
        if (!node.left && !node.right) {
            // Join the path array into a string format "1->2->3"
            result.push(currentPath.join('->'));
        } else {
            // Continue traversal to children
            findPaths(node.left, currentPath);
            findPaths(node.right, currentPath);
        }

        // Backtrack: remove the current node before going back up the tree
        currentPath.pop();
    };

    findPaths(root, []);
    return result;
};

```

---

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to find and print all root-to-leaf paths
 * @param {Node} root
 * @param {string} path - Accumulates the values as we go
 */
const printPaths = (root, path = "") => {
  // 1. Base Case: If the tree is empty
  if (!root) return;

  // 2. Append current node value to the path string
  // If path is empty, just add val; otherwise, add an arrow separator
  const currentPath = path === "" ? `${root.val}` : `${path} -> ${root.val}`;

  // 3. Leaf Check: If it's a leaf, we found a complete path
  if (!root.left && !root.right) {
    console.log(currentPath);
    return;
  }

  // 4. Recursive Step: Continue searching left and right
  printPaths(root.left, currentPath);
  printPaths(root.right, currentPath);
};

// Example Usage:
const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

printPaths(root);

```

---

## Example Walkthrough

If your tree looks like this:

```text
    1
   / \
  2   3
   \
    5

```

1. **Path starts**: `[1]`
2. **Move to 2**: `[1, 2]`
3. **Move to 5**: `[1, 2, 5]` (Leaf found!) -> Result: `"1->2->5"`
4. **Backtrack**: Remove 5, then remove 2. Back at root.
5. **Move to 3**: `[1, 3]` (Leaf found!) -> Result: `"1->3"`

### Final Output

`["1->2->5", "1->3"]`

---

## Complexity Analysis

* **Time Complexity**: **O(n)**, where **n** is the number of nodes, as we visit each node exactly once.
* **Space Complexity**: **O(h)**, where **h** is the height of the tree. This is for the recursion stack and the array used to store the current path.

Would you like to try a variation where we calculate the **sum** of these paths instead?

---

# Taught by the ChatGPT.

Good.
Now we move into **path-based recursion**.
This is where backtracking thinking starts becoming important.

Goal: **Print all root-to-leaf paths in a binary tree**

Example:

```text
        1
       / \
      2   3
       \
        5
```

Output:

```
1 → 2 → 5
1 → 3
```

---

Core Idea

At every node:

1. Add current node to current path
2. If it's a leaf → print/store path
3. Otherwise recurse left and right

This is different from previous problems.

Here we are not:

* Comparing
* Counting
* Transforming

We are **carrying state (path) downwards**

This is classic backtracking pattern.

---

Step-by-Step Thinking

Base case:
If node is null → return

If node is leaf:

* Print current path

Otherwise:

* Go left
* Go right

But the important question is:

How do we maintain path correctly?

There are two approaches.

---

Approach 1: Pass Path as String (Simple & Clean)

Since string is immutable, each recursive call gets its own copy.

```javascript
function printPaths(root) {
  function dfs(node, path) {
    if (!node) return;

    // Add current node to path
    path += node.val;

    // If leaf, print path
    if (!node.left && !node.right) {
      console.log(path);
      return;
    }

    // Add arrow before going deeper
    path += " -> ";

    dfs(node.left, path);
    dfs(node.right, path);
  }

  dfs(root, "");
}
```

Why no backtracking here?

Because strings are immutable.
Each recursion call has its own path copy.

---

Approach 2: Use Array (Backtracking Required)

Now path is shared reference.
So we must undo changes after recursion.

```javascript
function printPaths(root) {
  function dfs(node, path) {
    if (!node) return;

    // Choose
    path.push(node.val);

    // If leaf
    if (!node.left && !node.right) {
      console.log(path.join(" -> "));
    } else {
      dfs(node.left, path);
      dfs(node.right, path);
    }

    // Backtrack (undo choice)
    path.pop();
  }

  dfs(root, []);
}
```

Very important:

push → recurse → pop

That pop is the essence of backtracking.

---

Why Backtracking is Needed

Without pop:

Left branch values would remain in path
When exploring right branch
You would get wrong paths.

So you:

1. Make a choice
2. Explore
3. Undo the choice

That is backtracking pattern.

---

Time and Space

Time: O(n)
Each node visited once.

Space:
O(h) recursion stack
Plus O(h) path storage

---

Pattern Recognition (Very Important for DSA)

This problem introduces:

“Carry state down recursion”

You are not combining results upward.
You are building path downward.

This is foundation for:

* Path Sum
* All combinations
* Subsets
* Permutations
* Backtracking problems

---

Web Development Connection (Important for You)

Think about:

Generating nested breadcrumb navigation from tree-like menu:

```javascript
Home -> Electronics -> Mobiles -> iPhone
```

That breadcrumb generation is identical to root-to-leaf path logic.

Also:

* Building file system explorer paths
* Generating nested category URLs
* Traversing nested comments for display paths

Binary tree path logic = nested route path builder.

---

Now I want you to think:

If instead of printing paths,
I ask:

“Return all root-to-leaf paths as an array of arrays”

What small modification is needed?

Think before I show it.

---