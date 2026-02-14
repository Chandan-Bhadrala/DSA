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

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // return list.
  push(val) {}

  // return removed node.
  pop() {}

  // return list.
  unshift(val) {}

  // return removed node.
  shift() {}

  // return found node.
  get(index) {}

  // return boolean (for success or fail to insert).
  insert(index, val) {}

  // return removed node.
  remove(index) {}
}

// ---
// How to use it.
const myDLL = new DoublyLinkedList();
