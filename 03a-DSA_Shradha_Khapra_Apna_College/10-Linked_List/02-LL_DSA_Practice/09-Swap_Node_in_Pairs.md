# Taught by the ChatGPT.

Good. Let’s learn one of the most important Linked List patterns: **Swap Nodes in Pairs**.

This question builds strong pointer manipulation skills — very important for your DSA journey.

Problem Statement
Given the head of a singly linked list, swap every two adjacent nodes and return its head.
You must swap nodes, not values.

Example
1 → 2 → 3 → 4
Output:
2 → 1 → 4 → 3

---

First understand the pattern (Very Important)

We are not swapping values.
We are changing links.

If we have:

A → B → C → D

After swapping A and B:

B → A → C → D

But the tricky part is connecting A to the rest correctly.

---

Step-by-step Visual Understanding

Suppose:

prev → A → B → nextPair

Goal:

prev → B → A → nextPair

To achieve this:

1. A.next = B.next
2. B.next = A
3. prev.next = B

That’s the entire logic.

---

Why Dummy Node is Needed

If we start swapping from the head, the head itself will change.

Example:
1 → 2 → 3 → 4
After first swap, head becomes 2.

To avoid special case handling for head, we use a dummy node.

Dummy → 1 → 2 → 3 → 4

This makes logic uniform.

---

Algorithm Steps

1. Create dummy node.
2. Point dummy.next to head.
3. Maintain a pointer `prev` starting at dummy.
4. While prev.next and prev.next.next exist:

   * Let first = prev.next
   * Let second = first.next
   * Swap:
     first.next = second.next
     second.next = first
     prev.next = second
   * Move prev to first (because first is now second in pair)

---

Code (JavaScript)

```javascript
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let prev = dummy;
    
    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = first.next;
        
        // swap
        first.next = second.next;
        second.next = first;
        prev.next = second;
        
        // move prev
        prev = first;
    }
    
    return dummy.next;
};
```

---

Time Complexity
O(n)

Space Complexity
O(1)

---

Core Pattern You Should Remember

This question teaches:

“Keep a pointer before the segment you want to modify.”

That’s why dummy + prev pointer is powerful.

---

Web Development Connection (as you prefer)

Think of this like:

Reordering middleware or route chain dynamically.

Instead of changing data inside objects, you are rewiring references — exactly like reassigning next pointers in a request processing chain.

Pointer manipulation = reference reassignment in backend.

---

Now small challenge for you:

What will happen if the list length is odd?
Example: 1 → 2 → 3

Think slowly and answer before checking mentally.

Let’s sharpen your pointer control.

---

# Taught by the Gemini.

Swapping nodes in pairs is a classic linked list problem. The trick is to manage the pointers carefully so you don't "lose" the rest of the list while you're rearranging things.

Since we are working with **JavaScript**, we can use a **dummy node** to simplify the logic for the head of the list.

### The Logic

1. **Create a Dummy Node**: This points to the `head`. It helps us handle the edge case where the head itself needs to be swapped.
2. **Iterate**: Use a pointer (`current`) that starts at the dummy node.
3. **Identify the Pair**: Ensure there are at least two nodes ahead of `current` to swap.
4. **Perform the Swap**:
* Point `first` to `second.next`.
* Point `second` to `first`.
* Point `current` to `second`.


5. **Move Forward**: Shift `current` two nodes ahead and repeat.

---

### Implementation

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 1. Initialize a dummy node to act as a precursor to the head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // 2. 'current' is the node sitting just before the pair we want to swap
    let current = dummy;

    // 3. Ensure there is a pair (two nodes) available to swap
    while (current.next !== null && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;

        // 4. Rearrange the pointers
        // Point the first node to the node after the pair
        first.next = second.next;
        // Point the second node back to the first node
        second.next = first;
        // Point the node before the pair to the new 'first' (which is 'second')
        current.next = second;

        // 5. Move the 'current' pointer two steps forward for the next pair
        current = first;
    }

    // Return the new head (which is the node after our dummy)
    return dummy.next;
};

```

---

### Complexity Analysis

* **Time Complexity**: **O(n)**. We traverse the list exactly once.
* **Space Complexity**: **O(1)**. We are only swapping pointers; no extra data structures are created regardless of the list size.

Would you like me to walk through the recursive version of this solution as well?

---

# Q1) You've returned the dummy.next. Shouldn't dummy.next still points to the old original head node. We never updated dummy.next pointer, after swapping pairs.

That's a really sharp observation! It's one of those "blink and you'll miss it" moments in pointer manipulation.

Actually, we **did** update `dummy.next`, but it happened implicitly during the very first iteration of the `while` loop. Let's break down exactly how that pointer changed.

### The Breakdown

1. **Initial State**:
* `dummy.next` points to `head` (let's call it **Node 1**).
* `current` is also pointing to the `dummy` node.


2. **The First Iteration**:
Inside the `while` loop, when we are looking at the first pair (**Node 1** and **Node 2**):
* `let first = current.next;` (Node 1)
* `let second = current.next.next;` (Node 2)


3. **The Critical Line**:
```javascript
current.next = second;

```


Since `current` is still the `dummy` node during this first pass, this line is effectively doing:
**`dummy.next = second;`** (Node 2)

---

### Visualization

Imagine a list: `[1 -> 2 -> 3 -> 4]`

**Before the first swap:**
`dummy` -> `1` -> `2` -> `3` -> `4`
(`current` is at `dummy`)

**During the swap (inside the first loop):**

1. `1.next = 3`
2. `2.next = 1`
3. `current.next = 2` (This is the line that updates **dummy.next** to point to **2**)

**After the first swap:**
`dummy` -> `2` -> `1` -> `3` -> `4`

---

### Why it works for the rest of the list

After the first swap, we move the `current` pointer forward:

```javascript
current = first; // current is now Node 1

```

For all subsequent loops, `current.next = second` updates the `.next` property of the **end of the previous pair**, not the dummy node. The dummy stays fixed at the start, but its `.next` was already updated to point to the new first node (**Node 2**) during that very first iteration.

Would you like me to show you how this looks using a recursive approach, where we don't need a dummy node at all?