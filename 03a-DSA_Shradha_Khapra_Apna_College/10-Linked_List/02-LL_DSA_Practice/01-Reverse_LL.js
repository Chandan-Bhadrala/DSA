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