/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return head;

    let curr = head;
    const stack = [];

    while (curr !== null) {
        // If there's a child, we need to dive in
        if (curr.child) {
            // Save the next node to process after the child branch is done
            if (curr.next) {
                stack.push(curr.next);
            }

            // Connect curr to child
            curr.next = curr.child;
            curr.next.prev = curr;
            
            // Critical: clear the child reference
            curr.child = null;
        } 
        // If we reach the end of a branch and have saved nodes in the stack
        else if (!curr.next && stack.length > 0) {
            let nextNode = stack.pop();
            curr.next = nextNode;
            nextNode.prev = curr;
        }

        // Move to the next node in the flattened sequence
        curr = curr.next;
    }

    return head;
};