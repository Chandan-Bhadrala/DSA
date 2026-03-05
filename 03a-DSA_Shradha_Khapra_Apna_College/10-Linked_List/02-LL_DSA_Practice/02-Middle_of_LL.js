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
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    // While fast hasn't reached the end or the node before the end
    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // Moves 1 step
        fast = fast.next.next;  // Moves 2 steps
    }

    // When fast reaches the end, slow is at the middle
    return slow;
};