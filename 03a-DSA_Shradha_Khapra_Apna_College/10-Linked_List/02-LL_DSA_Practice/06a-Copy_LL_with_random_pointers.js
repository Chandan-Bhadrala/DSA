/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 * this.val = val;
 * this.next = next;
 * this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  // Create a dummy node.
  let dummyNode = new _Node(0);

  let map = new Map(); // To store the original and copy node pair.

  let curr = head; // Original LL iterator.

  // Create a map of original LL nodes and copy nodes.
  while (curr) {
    // Creating map for original and copy nodes.
    map.set(curr, new _Node(curr.val, null, null));

    // Move original LL iterator.
    curr = curr.next;
  }

  curr = head; // Reset curr iterator back to head.
  while (curr) {
    let copyNode = map.get(curr); // Bring the copy Node using original node as a key in a map.

    copyNode.next = map.get(curr.next) || null; // Here first curr.next will resolve to the next original node.
    // And then corresponding node from the map will be brought to be saved as copied node's next value/node.
    copyNode.random = map.get(curr.random) || null; // Same pattern follows for the random as for the above next node.

    // Move the iterator.
    curr = curr.next;
  }

  return map.get(head); // return the node corresponding to the head from the map.
};
