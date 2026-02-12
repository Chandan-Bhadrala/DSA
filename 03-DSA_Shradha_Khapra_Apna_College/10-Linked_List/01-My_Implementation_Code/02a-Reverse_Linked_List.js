/**
# Reverse a Linked List.

## Question:
## Solution:
*/
// -----------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = current;
    // A variable to keep the next node info protected
    let next = current;

    for (let i = 0; i < this.length; i++) {
      // Updating pointers value.
      prev = next; // i = 0 -> 0th index. i = 1 -> 1st index
      current = next.next; // i = 0 -> 1st index. i = 1 -> 2nd index
      next = next.next; // i = 0 -> 1st index. i = 1 -> 2nd index

      // Reversing the link.
      current.next = prev;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

// ---
// How to use it.

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

console.log("Original:");
myList.printList(); // 1 -> 2 -> 3 -> null

myList.reverse();

console.log("Reversed:");
myList.printList(); // 3 -> 2 -> 1 -> null
