/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
  if (!head) return head;

  function dfs(node) {
    let curr = node;
    let last = node;

    while (curr) {
      let next = curr.next;

      // If child exists, flatten it
      if (curr.child) {
        let childHead = curr.child;
        let childTail = dfs(childHead);

        // Connect curr -> child
        curr.next = childHead;
        childHead.prev = curr;

        // If next exists, connect childTail -> next
        if (next) {
          childTail.next = next;
          next.prev = childTail;
        }

        curr.child = null;   // remove child link
        last = childTail;
      } else {
        last = curr;
      }

      curr = next;
    }

    return last; // return tail
  }

  dfs(head);
  return head;
};