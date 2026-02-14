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