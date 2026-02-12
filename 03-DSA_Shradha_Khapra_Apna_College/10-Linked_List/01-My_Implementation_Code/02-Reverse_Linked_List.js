/**
# Reverse a Linked List.

## Question:
## Solution:
*/
// -----------------------------

class LinkedList {
  // ... (previous constructor and methods)

  /**
   * Reverses the linked list in place
   */
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      // 1. Save the next node (so we don't lose the rest of the list)
      next = current.next;

      // 2. Reverse the pointer (the magic step)
      current.next = prev;

      // 3. Move pointers forward for the next iteration
      prev = current;
      current = next;
    }

    // 4. Reset the head to the last node we processed
    this.head = prev;
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