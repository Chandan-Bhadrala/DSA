/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to hold the start of the merged list
    let dummy = new ListNode(0);
    let current = dummy;

    // Iterate while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If one list is exhausted, attach the remainder of the other list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the next node after dummy, which is the head of the merged list
    return dummy.next;
};