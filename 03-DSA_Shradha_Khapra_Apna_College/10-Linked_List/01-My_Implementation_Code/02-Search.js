/**
# Search method in a Linked List.

## Question:
## Solution:
*/
// -----------------------------

class LinkedList {
  // ... (previous constructor and methods)

  /**
   * Search for a node with a specific value
   * @param {*} value - The value to look for
   * @returns {Node|null} - Returns the node if found, otherwise null
   */
  find(value) {
    // Start at the beginning
    let current = this.head;

    // Traverse the list
    while (current !== null) {
      // If we find the value, return the node
      if (current.value === value) {
        return current;
      }
      // Move to the next node
      current = current.next;
    }

    // If the loop finishes without returning, the value isn't there
    return null;
  }
}

// --- 
// How to use it.

const myList = new LinkedList();
myList.append("Apple");
myList.append("Banana");
myList.append("Cherry");

// Searching for an existing item
const result = myList.find("Banana");
if (result) {
  console.log("Found node with value:", result.value);
} else {
  console.log("Value not found.");
}

// Searching for a non-existent item
const missing = myList.find("Dragonfruit"); 
console.log(missing); // Output: null