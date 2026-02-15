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