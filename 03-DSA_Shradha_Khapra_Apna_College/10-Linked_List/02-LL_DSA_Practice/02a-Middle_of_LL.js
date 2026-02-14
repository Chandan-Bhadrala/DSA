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
var middleNode = function (head) {
  // Going to use slow and fast pointer.
  // Slow pointer will move ahead in 1 jump.
  // Fast pointer will move ahead in 2 jumps.
  // That way by the time fast pointer will reach the end of the list.
  // Slow pointer would have covered/traversed no more or less than half of the list.

  let slow = head;
  let fast = head;

  // Using OR condition here, will not terminate the loop upon hitting the one true condition.
  // So, loop will continue till both condition becomes false.
  // Which will lead to the accessing a false node and corrupt the code.

  // while(fast!=null||fast.next!=null){}

  // However, using && condition will ensure we reach terminate the while loop upon either of condition is met.
  // Which is what we desire.
  // This way our while loop inner code will never touch the out of bound nodes.
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
