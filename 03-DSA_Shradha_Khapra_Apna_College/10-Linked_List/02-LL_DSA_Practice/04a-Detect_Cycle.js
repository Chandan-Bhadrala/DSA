/**
 * Question: Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      // Reset one of the two pointers to the head node and now move both pointers by 1 jump.
      // Doing so these two above (slow and fast pointers) will meet again.
      // However, this time these pointers will meet at the starting point/node where the cycle begins.
      slow = head;

      // let prev = fast; // If we wish to correct looping issue.
      while (slow != fast) {
        slow = slow.next;
        // prev = fast;
        fast = fast.next;
      }
        // prev = null; // This way using prev variable, we can correct looping issue.
      return slow;
    }
  }
  // Meaning no cycle exists in the LL.
  return null;
};
