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
var copyRandomList = function(head) {
    if (!head) return null;

    // Map to store: original node -> copied node
    const nodeMap = new Map();

    // First pass: Create all nodes without connecting pointers
    let curr = head;
    while (curr) {
        nodeMap.set(curr, new _Node(curr.val));
        curr = curr.next;
    }

    // Second pass: Connect next and random pointers
    curr = head;
    while (curr) {
        const copy = nodeMap.get(curr);
        // Map.get(null) returns undefined, so we use || null
        copy.next = nodeMap.get(curr.next) || null;
        copy.random = nodeMap.get(curr.random) || null;
        curr = curr.next;
    }

    return nodeMap.get(head);
};