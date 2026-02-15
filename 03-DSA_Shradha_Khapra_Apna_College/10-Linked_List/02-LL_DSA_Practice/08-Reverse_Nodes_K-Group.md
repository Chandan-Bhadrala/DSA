# Taught by Gemini.

To solve **LeetCode 25: Reverse Nodes in k-Group**, the challenge is to reverse groups of size **k** only if there are enough nodes remaining. If a group has fewer than **k** nodes, it remains unchanged.

The most reliable approach is to use a helper function to reverse a segment of the list and a main loop to navigate the groups.

---

### The Strategy

1. **Count Nodes**: First, we check if there are at least **k** nodes left. If not, we return the current `head` (base case).
2. **Reverse the Segment**: We reverse the next **k** nodes.
3. **Recursion**: The "tail" of our newly reversed segment should point to the result of the recursive call for the next group.
4. **Return**: The new head of the reversed segment becomes the head for the caller.

### JavaScript Implementation

```javascript
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 1. Check if there are k nodes left to reverse
    let node = head;
    for (let i = 0; i < k; i++) {
        if (!node) return head; // Fewer than k nodes, keep as is
        node = node.next;
    }

    // 2. Reverse k nodes
    let prev = null;
    let curr = head;
    for (let i = 0; i < k; i++) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // 3. Recursive call for the rest of the list
    // 'head' is now the end of the reversed segment
    // 'curr' is the start of the next group
    head.next = reverseKGroup(curr, k);

    // 4. 'prev' is the new head of this reversed segment
    return prev;
};

```

---

### Key Considerations

* **Time Complexity**: **O(n)**. We visit every node, once to check the length and once to reverse.
* **Space Complexity**: **O(n/k)** due to the recursion stack. For a strictly **O(1)** space solution, an iterative approach using a "dummy" node and tracking the previous group's tail is required.
* **Edge Cases**: If **k = 1**, the code naturally returns the list as is. If the list length is an exact multiple of **k**, the final group reverses and its `next` points to `null`.

### Pro-Tip

When dealing with linked list reversals, always draw out the pointers. After the loop in step 2:

* **prev** points to the **k-th** node (the new start).
* **head** points to the **1st** node (the new end).
* **curr** points to the **(k+1)-th** node (the next group).

Would you like to see the **O(1) space iterative version** of this solution, or move on to another Hard-level problem?

---

# Taught by the ChatGPT.

Good. Now we move to a very important linked list problem:

**LeetCode 25 – Reverse Nodes in k-Group**

Problem in one line:

Reverse every group of `k` nodes.
If remaining nodes are less than `k`, leave them as it is.

Example:

```
Input: 1 → 2 → 3 → 4 → 5 , k = 2
Output: 2 → 1 → 4 → 3 → 5
```

```
Input: 1 → 2 → 3 → 4 → 5 , k = 3
Output: 3 → 2 → 1 → 4 → 5
```

---

Step 1 — Think Structurally (Very Important)

This problem has 3 repeated steps:

1. Check if k nodes exist
2. Reverse those k nodes
3. Connect with previous part
4. Move forward

This screams:

👉 Dummy node
👉 Two pointers
👉 Controlled reversal

---

Step 2 — Why Dummy is Necessary

Because head may change after first reversal.

So we do:

```
dummy → head
```

And always connect using `prevGroupTail`.

---

Step 3 — High Level Algorithm

We maintain:

* `dummy`
* `groupPrev` → tail of previous reversed group

Then loop:

1. Find kth node from groupPrev
2. If not found → break
3. Reverse nodes between groupPrev.next and kth
4. Connect properly
5. Move groupPrev forward

---

Step 4 — Code (Clean and Interview Ready)

```javascript
var reverseKGroup = function(head, k) {
  if (!head || k === 1) return head;

  let dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    let kth = getKth(groupPrev, k);
    if (!kth) break;

    let groupNext = kth.next;

    // reverse group
    let prev = groupNext;
    let curr = groupPrev.next;

    while (curr !== groupNext) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // reconnect
    let temp = groupPrev.next;  // this becomes tail after reverse
    groupPrev.next = kth;
    groupPrev = temp;
  }

  return dummy.next;
};

function getKth(curr, k) {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
}
```

---

Now Let’s Understand Deeply

Important part:

```
let prev = groupNext;
```

Why?

Because we reverse in such a way that:
The last node of the group must point to `groupNext`.

So we initialize `prev` as groupNext.

This makes linking automatic during reversal.

---

Visualization (Very Important)

Suppose:

```
dummy → 1 → 2 → 3 → 4 → 5
k = 3
```

Group:

```
1 → 2 → 3
```

After reversal:

```
3 → 2 → 1
```

1 must connect to 4.

That is why we use:

```
prev = groupNext (which is 4)
```

So final inside becomes:

```
3 → 2 → 1 → 4
```

Automatically handled.

---

Time Complexity
O(n)

Space Complexity
O(1)

---

Now I want to test your understanding.

Answer this clearly:

Why do we set

```
let temp = groupPrev.next;
groupPrev = temp;
```

Why not directly do:

```
groupPrev = kth;
```

If you can explain that, your linked list control is becoming strong.

---
