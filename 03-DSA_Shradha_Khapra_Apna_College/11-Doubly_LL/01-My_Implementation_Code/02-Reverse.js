/**
# Implementation of the Doubly LL.

## Question:
## Solution:
*/
// -----------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// In the **insertion and removal** method always 4 pointers needs to be re-arranged at last.
// If the pointer that are re-arranged are any less than 4. Then, there is an error in re-creating the links properly.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse(head) {
    // code here
    let current = head;
    let prev = null;

    while (current != null) {
      // Saving the next node.
      let successor = current.next;

      current.next = prev;
      current.prev = successor;

      // update pointers for next iteration.
      prev = current;
      current = successor;
    }

    head = prev;
    return head;
  }
}

// ---
// How to use it.
const myDLL = new DoublyLinkedList();
