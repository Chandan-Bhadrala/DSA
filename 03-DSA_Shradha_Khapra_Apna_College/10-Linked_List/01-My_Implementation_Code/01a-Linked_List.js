/**
# My Implementation of the Linked List.

## Question:
## Solution:
*/
// -----------------------------

// A singly linked list has a node which contains:
// Data and a reference to the next node.

class Node {
  // A class constructor to create a node with its two properties: a data (val) and an address place holder (next).
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // A class constructor to create an essential properties of the list: an empty head, tail and a length properties for the newly created list object.
  constructor() {
    this.head = null; // points to the first node of the list.
    this.tail = null; // points to the last node of the list.
    this.length = 0; // Remembers the length of the list or the number of the nodes in the list.
  }

  // ## Linked List Methods.
  // 01. Pushing nodes into the newly created empty list or a filled list eventually.
  push(val) {
    // Creating a node with the passed arguments (data) to build a node with its two essential properties (data and the address place holder).
    let newNode = new Node(val);

    // If the pushed element is the very first node of the list.
    if (!this.head) {
      // Then in a list object, make newly created node a head and even a tail of the list.
      this.head = newNode;
      this.tail = this.head;
    } else {
      // If we already have the first or one element in the list, then push the newly pushed element to the last.
      // For the second element this.tail holds the address of the 1st node.
      // this.tail = this.head = newNode (First Node).
      // Therefore, this.tail.next == this.head.next
      // So, we are initializing head node's next pointer with the new node value.
      this.tail.next = newNode;

      // In this line of code we are updating the value of the tail for the list to point to the newNode.
      this.tail = newNode;
    }

    // Incrementing the list's length after successful insertion.
    this.length++;

    return this;
  }

  // 02. Deleting the last node.
  pop(val) {
    // Early return for using pop on an empty list.
    if (!this.head) return undefined;

    // if list has only one node.
    if (this.length == 1) {
      const removedNode = this.head;

      this.head = null;
      this.tail = null;
      this.length = 0;

      return removedNode;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current; // In here we are holding the value of the second last node.
      current = current.next; // We knew that there is still current.next exist via while loop condition check.
      // So, we are making current as the next node and in the next loop iteration if the current.next doesn't exist. Then we know we have our second last node in the newTail variable.
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // Return the removed node
    return current;
  }

  // 03. Delete the first node and position the head variable correctly.
  shift() {
    // Early return.
    if (!this.length) return undefined;
    if (this.length == 1) {
      const removedNode = this.head;

      this.head = null;
      this.tail = null;
      this.length = 0;

      // Ensuring that removed node doesn't have access to the list anymore.
      removedNode.next = null;
      return removedNode;
    }

    const removedNode = this.head;
    // Ensuring that removed node doesn't have access to the list anymore.
    removedNode.next = null;

    this.head = this.head.next;
    this.length--;

    return removedNode;
  }

  // 04. Insert in the beginning and again re-position the head variable correctly.
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      // This if-condition accounts for the empty list. It ensure **tail variable** also gets updated.
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 05. Get Method - return the value at the given index.
  // User will provide the node number and we've to return value at that node.
  // First node will be considered as on 0th index.
  get(index) {
    // lastIndex = length - 1;
    if (this.length <= index || index < 0) return undefined;
    if (index == 0) return this.head.val;

    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current.val;
  }

  // 06. Set Method - At the given index, we update the node value.
  set(val, index) {
    if (this.length <= index || index < 0) return undefined;

    let current = this.head;

    // This time loop is starting from 0 and to iterate properly, we are choosing i < index.
    // if the given index in the argument is equal to 0. Then this loop will never run.
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.val = val;
    return current.val;
  }

  // 07. Insert Method - Insert a node (value) at the given index.
  insert(val, index) {
    // Boundary Checks.
    // Check is for the "index > this.length" instead of "index >= this.length".
    // As inserting at the last null node is allowed.
    if (index > this.length || index < 0) return undefined;

    // Use existing methods for boundary cases
    if (index === 0) return !!this.unshift(val);

    // If index equals to the last null value node then use push method directly to insert at the last.
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode.next;

    this.length++;
    return true;
  }

  // 08. Delete Method - Remove/Delete a node at the given index.
  delete(index) {
    // Using ">=" instead ">". As last node is present at (length - 1) index.
    // For list with the last index as 4, length will be 5.
    // So, given index should not be equal to the length.
    if (index >= this.length || index < 0) return undefined;

    // Use existing methods for boundary cases
    if (index === 0) return this.shift();

    // If index equals to the last null value node then use pop method directly to delete at the last.
    if (index === this.length - 1) return this.pop();

    let previousNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next;
    } // However,one can use get method too. To get the node at the given index - 1 value.

    let removedNode = previousNode.next;

    previousNode.next = previousNode.next.next; // or previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
}

// ---
// How to use it.

// 01. Creating new list.
let list = new SinglyLinkedList(); // output: SinglyLinkedList { head: null, tail: null, length: 0 }

// 02. Pushing first element into the list.
list.push("Hi!");
/**
output: SinglyLinkedList {
  head: Node { val: 'hello', next: null },
  tail: Node { val: 'hello', next: null },
  length: 1
}
*/

// 03. Adding node elements to the list.
list.push("Miss Dear Diary.");
list.push("How are you!");
list.push("Hope you are doing fine.");
list.push("Well, I'm also doing fine.");

console.log(list);
console.log(list.head.next);
console.log(list.head.next.next);

list.pop();
console.log(list);
