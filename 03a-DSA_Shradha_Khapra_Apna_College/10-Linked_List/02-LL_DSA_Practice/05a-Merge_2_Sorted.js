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
var mergeTwoLists = function (list1, list2) {
    let resList = new ListNode(0);
    let curr3 = resList; // Iterator for the resultant list.

    let curr1 = list1;
    let curr2 = list2;

    while (curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            curr3.next = curr1;
            curr1 = curr1.next;
        } else {
            curr3.next = curr2;
            curr2 = curr2.next;
        }

        // Move curr3 iterator forward.
        curr3 = curr3.next;
    }

    while (curr1) {
        curr3.next = curr1;
        curr1 = curr1.next;

        // Move curr3 iterator forward.
        curr3 = curr3.next;
    }

    while (curr2) {
        curr3.next = curr2;
        curr2 = curr2.next;

        // Move curr3 iterator forward.
        curr3 = curr3.next;
    }

    return resList.next;
};
