/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    // Phase 1: Determine if a cycle exists
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Phase 2: Find the entry point of the cycle
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }

    return null;
};