# Code review and correction by the ChatGPT.

Your logic is **correct**, and you are using the exact DFS trick properly. The idea that **`res.length === level` means the level is being visited for the first time** is perfectly understood.

However, there is **one small bug in the early return condition**.

---

**Problem in Your Code**

You wrote:

```javascript
if (!root) return [];
```

This creates a problem during recursion.

Why?

Because during recursion we call:

```javascript
leftView(root.left, level + 1, res);
leftView(root.right, level + 1, res);
```

Many of those calls will reach `null` nodes.

When that happens your function returns:

```javascript
[]
```

But we actually **do not want to return a new array**.
We only want to **stop recursion at that branch**.

---

**Correct Early Return**

Instead write:

```javascript
if (!root) return;
```

This simply stops the recursion.

---

**Corrected Version**

```javascript
var leftView = function (root, level = 0, res = []) {
  if (!root) return;

  if (res.length === level) res.push(root.val);

  leftView(root.left, level + 1, res);
  leftView(root.right, level + 1, res);

  return res;
};
```

---

**Why This Works**

Key condition:

```javascript
if (res.length === level)
```

Meaning:

| level | res.length | Action                      |
| ----- | ---------- | --------------------------- |
| 0     | 0          | first node of level → store |
| 1     | 1          | first node of level → store |
| 2     | 2          | first node of level → store |
| 2     | 3          | skip                        |

Because you traverse **left first**, the **first node discovered at each level** is the **leftmost node**.

---

**Traversal Order (Preorder)**

Your recursion effectively does:

```javascript
node
left
right
```

Example tree:

```
        1
      /   \
     2     3
    / \     \
   4   5     6
```

Traversal path:

```
1 → 2 → 4 → 5 → 3 → 6
```

Stored nodes:

```
1 (level 0)
2 (level 1)
4 (level 2)
```

Result:

```
[1,2,4]
```

---

**Time Complexity**

```
O(n)
```

Every node visited once.

---

**Space Complexity**

```
O(h)
```

Where `h` is the tree height (recursion stack).

Worst case:

```
O(n)
```

---

**Small Style Improvements**

Prefer strict equality:

```javascript
res.length === level
```

instead of

```javascript
res.length == level
```

---

**One Very Elegant Version**

Some developers write it like this to make recursion clearer:

```javascript
var leftView = function (root) {
  let res = [];

  function dfs(node, level) {
    if (!node) return;

    if (res.length === level) res.push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  return res;
};
```

Functionally identical, just a bit **cleaner separation of recursion logic**.

---

You are now already comfortable with **two very powerful tree patterns**:

1. **BFS Level Template**

```
while(queue.length)
    process level
```

2. **DFS First Node Per Level Trick**

```
if (res.length === level)
```

These two alone solve **a huge percentage of binary tree problems**.

---

If you'd like, I can also show you a **very deep but simple insight about trees** that suddenly makes problems like:

* Left View
* Right View
* Top View
* Bottom View
* Vertical Traversal

feel almost **mechanical to solve**.

---

# Code review and correction by the Gemini.

Spot on! Your DFS implementation for the **Left View** is clean and efficient. Using the `res.length === level` check is the most elegant way to solve this because it acts as a "gatekeeper"—once a level is recorded, no other nodes from that same depth can enter the result.

By passing `res` and `level` through the recursion, you've kept the state management very tidy.

---

### A Small Note on the Recursive Call

In your current code:

```javascript
var leftView = function (root, level = 0, res = []) {
  if (!root) return []; // Returns an empty array at the leaf
  // ... rest of logic
  return res;
};

```

When a leaf node's child is reached, it returns `[]`. While this doesn't break your logic (because you don't use the return value of the recursive calls), it’s a good habit to ensure your return types are consistent. Since the function's purpose is to populate and return the **same** `res` array, you can simply return `res` even in the base case:

```javascript
if (!root) return res; 

```

---

### The "Right View" Challenge

Since you've mastered the Left View with DFS, let's look at how tiny the change is for the **Right View**.

To get the Right View, you want the **last** node of every level. In DFS, you can achieve this by simply changing the **order of visitation**. If you visit the `right` child before the `left` child, the "first" node to hit that level gatekeeper will be the rightmost one.

**Can you see how you would modify your `leftView` function to become a `rightView` function?**

> **Hint:** You only need to swap two lines of code!

---

### Complexity Check

* **Time Complexity:** $O(N)$ because every node is visited once.
* **Space Complexity:** $O(H)$ where $H$ is the height of the tree (due to the recursion stack). In a skewed tree, this could be $O(N)$.

Would you like to try writing the **Right View** version, or perhaps move on to **Vertical Order Traversal** (which is a bit more of a puzzle)?

---