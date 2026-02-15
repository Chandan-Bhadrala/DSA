/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let current = head;
    while (current.next != null) {
        let temp = current;
        current = current.next;
        current.next = temp;
        current = current.next; // moving current pointer ahead towards next pair.
    }
    return head;
};