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