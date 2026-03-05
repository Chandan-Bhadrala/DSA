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
  let dummyNode = new ListNode(0); // Creating a dummy node to latch the swap nodes to it.

  dummyNode.next = head; // Linking dummyNode to the head node of the LL.

  //   let curr = head; // An iterator for the original LL.

  // Need to push dummy node into the while loop, so that dummy node can point to the correct swapped node.
  let temp = dummyNode; // For the first iteration of the while loop, temp will hold reference to the dummyNode.

  // Running while loop till we've pair to swap.
  while (temp.next && temp.next.next) {
    let first = temp.next;
    let second = temp.next.next; // or first.next;

    // let nextPair = second.next; // Saving next pair to avoid losing rest of the nodes of the LL.

    // Swap safely now.
    first.next = second.next;
    second.next = first;

    temp.next = second; // Missing code line. This code line makes sure the previous LL is being connected to the swapped nodes.

    // Updating "temp" to be "first" for the next iteration.
    // As first is second node in the list as of now.
    // And we are using temp.next and temp.next.next to initialize first and second in the next iteration.
    // So, updating temp to first now, will make sure first and second gets initialized to the proper next pair nodes.
    temp = first;

    // temp has the value of third node. As temp has first and first.next is the third node.
  }

  return dummyNode.next;
};
