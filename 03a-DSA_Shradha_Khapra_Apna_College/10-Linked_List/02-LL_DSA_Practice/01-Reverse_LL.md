## Taught by Gemini.

Reversing a linked list is a classic "bread and butter" algorithm problem. To do this efficiently in-place, we just need to flip the `next` pointers as we traverse the list.

Since we are working in JavaScript, we can use a simple iterative approach with three pointers: `prev`, `curr`, and `nextTemp`.

---

### The Implementation

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
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        // 1. Save the next node so we don't lose it
        let nextTemp = curr.next; 
        
        // 2. Reverse the pointer
        curr.next = prev; 
        
        // 3. Move the pointers forward
        prev = curr;
        curr = nextTemp;
    }

    // After the loop, prev will be the new head
    return prev;
};

```

---

### How it Works

* **Initialization**: We start with `prev` as `null` because the original head will become the tail, and the tail of a linked list points to `null`.
* **The Loop**:
* We store `curr.next` in a temporary variable; otherwise, once we change `curr.next`, we'd have no way to get to the rest of the list.
* We point `curr.next` backward to our `prev` node.
* We then shift our "window" forward by moving `prev` to the current node and `curr` to the next node.


* **Time Complexity**: **O(n)**, where **n** is the number of nodes in the list. We visit each node exactly once.
* **Space Complexity**: **O(1)**, as we are only using a few pointer variables regardless of the list size.

Would you like me to show you the **recursive** version of this solution as well?