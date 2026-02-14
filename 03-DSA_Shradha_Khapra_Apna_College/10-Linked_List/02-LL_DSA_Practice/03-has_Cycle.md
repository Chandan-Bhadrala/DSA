## Taught by ChatGPT.

This is classic **Floyd’s Cycle Detection Algorithm (Tortoise & Hare)**.

Core idea in one line:
If a cycle exists, a fast pointer (2 steps) will eventually meet a slow pointer (1 step).

Why this works (intuitively):

* In a normal linked list → fast reaches `null`
* In a cyclic list → fast keeps looping
* Since fast moves faster, it will "lap" slow and they’ll collide inside the cycle

Now clean implementation:

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // If the list is empty or has only one node, no cycle is possible
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    // Move fast pointer by 2 steps and slow by 1 step
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // If they meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }

    // If we reach the end of the list, there is no cycle
    return false;
};
```

Time Complexity: O(n)
Space Complexity: O(1)

---

DSA Pattern Recognition for You:
Whenever question says:

* "cycle"
* "loop in linked list"
* "detect repetition without extra space"

Your brain should immediately think:
→ Slow & Fast pointer technique.

If you want, next we can do `detectCycle()` (return the starting node of cycle). That one is even more beautiful mathematically.
