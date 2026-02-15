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

---
