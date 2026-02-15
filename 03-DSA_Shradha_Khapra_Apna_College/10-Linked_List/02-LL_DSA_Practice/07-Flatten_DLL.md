# Taught by Gemini.

To flatten a multilevel doubly linked list, the most intuitive approach is to treat it like a **Depth-First Search (DFS)**. When you encounter a `child` node, you want to process that entire branch before moving on to the current node's `next` pointer.

Here is a clean, iterative solution using a **stack** to handle the nesting, ensuring we stay within Hashnode-compatible markdown and stick strictly to JavaScript.

---

### The Strategy

We iterate through the list just like a standard linked list. However:

1. If we find a **child**, we check if there is a **next** node.
2. If `next` exists, we push it onto a stack so we can come back to it later.
3. We connect the current node to the child, clear the child pointer, and keep moving.
4. If we hit the end of a list (`curr.next === null`) and our stack isn't empty, we pop the saved node and link it up.

### JavaScript Implementation

```javascript
/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return head;

    let curr = head;
    const stack = [];

    while (curr !== null) {
        // If there's a child, we need to dive in
        if (curr.child) {
            // Save the next node to process after the child branch is done
            if (curr.next) {
                stack.push(curr.next);
            }

            // Connect curr to child
            curr.next = curr.child;
            curr.next.prev = curr;
            
            // Critical: clear the child reference
            curr.child = null;
        } 
        // If we reach the end of a branch and have saved nodes in the stack
        else if (!curr.next && stack.length > 0) {
            let nextNode = stack.pop();
            curr.next = nextNode;
            nextNode.prev = curr;
        }

        // Move to the next node in the flattened sequence
        curr = curr.next;
    }

    return head;
};

```

---

### Why this works well:

* **Time Complexity**: **O(n)**, where **n** is the total number of nodes. We visit each node exactly once.
* **Space Complexity**: **O(k)**, where **k** is the number of levels or "child" interruptions, representing the maximum depth of the stack.
* **Pointers**: It correctly handles the `prev` and `next` connections required for a doubly linked list, which is usually where most bugs hide in this problem.

Would you like me to walk through a recursive version of this solution, or perhaps tackle another LeetCode linked list challenge?

---

# Taught by the ChatGPT.

Alright. This is **LeetCode 430 – Flatten a Multilevel Doubly Linked List**.

First understand the structure clearly.

Each node has:

* `val`
* `prev`
* `next`
* `child` (points to another doubly linked list)

Goal:
Convert it into a single-level doubly linked list.
When a node has a `child`, insert that child list between the node and its `next`.

Example shape:

```
1 - 2 - 3 - 4
        |
        7 - 8
```

After flatten:

```
1 - 2 - 3 - 7 - 8 - 4
```

And all `child` pointers must become `null`.

---

Core Idea (Important)

This is just DFS on a doubly linked list.

When you see a child:

1. Save `next`
2. Flatten child recursively
3. Insert child list in between
4. Connect tail of child list to saved `next`

So we need to return the **tail** of the flattened list at each recursion level.

---

Clean Recursive Solution

```javascript
var flatten = function(head) {
  if (!head) return head;

  function dfs(node) {
    let curr = node;
    let last = node;

    while (curr) {
      let next = curr.next;

      // If child exists, flatten it
      if (curr.child) {
        let childHead = curr.child;
        let childTail = dfs(childHead);

        // Connect curr -> child
        curr.next = childHead;
        childHead.prev = curr;

        // If next exists, connect childTail -> next
        if (next) {
          childTail.next = next;
          next.prev = childTail;
        }

        curr.child = null;   // remove child link
        last = childTail;
      } else {
        last = curr;
      }

      curr = next;
    }

    return last; // return tail
  }

  dfs(head);
  return head;
};
```

---

Let’s Understand Slowly (Very Important)

When we hit:

```
curr.child != null
```

We:

1. Store `next`
2. Flatten child fully (DFS)
3. Insert child between `curr` and `next`
4. Continue from original `next`

Notice:

`curr = next`

Not:
`curr = curr.next`

Why?

Because `curr.next` now points to child.
But we already processed child inside recursion.
So we skip it and continue from original `next`.

That’s the trick.

---

Mental Model

Think like this:

Whenever you see a child:
"Insert entire child list here."

This is exactly like:

* Inserting a linked list inside another linked list
* While preserving `prev` and `next`

---

Time Complexity
O(n)

Every node visited once.

Space Complexity
O(n) recursion stack (worst case deep nesting)

---

Now, very important question for you:

In your own words —
Why do we return the tail from DFS instead of just returning head?

If you can answer that clearly, your understanding is strong.

---
