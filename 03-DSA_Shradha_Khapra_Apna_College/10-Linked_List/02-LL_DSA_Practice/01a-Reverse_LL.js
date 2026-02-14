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
var reverseList = function (head) {
  // Save the current Head node.
  let curr = head;
  // Initialize the prev with null as after the reversal tail must be null.
  let prev = null;

  // Iterate till we reach the current last null value.
  while (curr != null) {
    // Save the location of the next node.
    let nextTemp = curr.next;

    // Reverse the link
    curr.next = prev;

    // Update the pointer values.
    prev = curr;
    curr = nextTemp;
  }

  // Return the last node, as that will be head now.
  return prev;
};
