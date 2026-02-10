/**
# Detecting a cycle in the Linked List.

## Question:
## Solution:
*/
// -----------------------------

class LinkedList {
  // ... (existing methods)

  /**
   * Detects if the linked list contains a cycle
   * @returns {boolean}
   */
  hasCycle() {
    if (this.head === null) return false;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;          // Move 1 step
      fast = fast.next.next;     // Move 2 steps

      // If they meet, there is a cycle!
      if (slow === fast) {
        return true;
      }
    }

    // If we reach the end, no cycle exists
    return false;
  }
}


// --- 
// How to use it.

const myList = new LinkedList();
myList.append(1);
myList.append(2);
my3rdNode = new Node(3); // Creating a node manually
myList.append(my3rdNode.value); 
myList.append(4);

// Manually creating a cycle for testing:
// Let's make the last node point back to the 2nd node
let current = myList.head;
while(current.next !== null) {
    current = current.next;
}
current.next = myList.head.next; // 4 now points to 2

console.log(myList.hasCycle()); // Output: true
