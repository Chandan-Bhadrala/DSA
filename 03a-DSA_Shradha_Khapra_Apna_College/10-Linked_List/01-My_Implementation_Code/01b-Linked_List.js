/**
# My 2nd practice Implementation of the Linked List.

## Question:
## Solution:
*/
// -----------------------------

// A singly linked list has a node which contains:
// Data and a reference to the next node.

class Node {
  // Creating a node for the calling object.
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // Create LL properties with null values for the calling object.
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ## Linked List Methods.
  // 01. Pushing nodes into the newly created empty list or a filled list eventually.
  push(val) {
    // Create a node for the given value.
    let newNode = new Node(val);

    // If the list is empty.
    if (!this.head) {
      // Mark the newly created node as a head and the tail node.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // LL is not empty.

      // Find the last node with null pointer;
      let current = this.head;

      // Rather than looping, I can use tail to simply append the new node at the last.
      // this.tail.next = newNode; // Append new Node at current last node.
      // this.tail = newNode; // Update tail to point to the new last node.
      while (current.next != null) {
        current = current.next;
      }

      // Found the last node after the exhaustion of the while-loop.
      // Place it after the former last node.
      current.next = newNode;

      // Update the tail node.
      this.tail = newNode;
    }
    this.length++;

    // Return back the list.
    return this;
  }

  // 02. Deleting the last node.
  pop() {
    // Solving for the edge cases.
    // Empty List.
    if (!this.head) return null;

    // List has only one node.
    if (this.head == this.tail) {
      let removedNode = this.head;

      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    // Now traversing to find the second last node.
    let current = this.head;
    let newTail = current;

    // Loop through list till length - 1 to find the second last node.
    // Using "<" instead of "<=" to stop the loop at the second last loop.
    // For length of the LL 9, last index will be 8.
    // So, I will traverse till 9 - 1 = 8 and loop will stop at 7th index.
    // But, if the loop ran for the 7th index, current will get updated to hold the value of the last node.
    // for (let i = 0; i < this.length - 1; i++) {
    //   current = current.next;
    // }
    // However, question to the "i < this.length - 1" or "i < this.length - 2". To make current point to the second last node.
    // The answer is "i < this.length - 2"

    // As per the ChatGPT suggestion, I should prefer thinking in the term of the pointers in the LL instead of the indexing.
    // But to traverse for the Kth index later. I've to use loop.
    // But to traverse for the Kth index, I'll imagine using the loop for the hops instead of the index as the destination point.

    while (current.next != null) {
      // newTail is one step behind the last node.
      newTail = current;
      // current is now being updated to point to the last node.
      current = current.next;
    }

    // Now, I've the second last node pointed by the newTail.
    let removedNode = this.tail;
    this.tail = newTail;

    // Update tail's next property to point to the null.
    this.tail.next = null;

    // Decrement the length.
    this.length--;

    // return removedNode every time in the function to adhere to the API contract.
    return removedNode;
  }

  // 03. Delete the first node and position the head variable correctly.
  shift() {
    if (!this.head) return null;
    if (this.head == this.tail) {
      let removedNode = this.head;

      this.head = null;
      this.tail = null;
      this.length = 0;

      return removedNode;
    }

    let removedNode = this.head;
    this.head = this.head.next;

    // Only returning value of the node.
    // Removing the 2nd node address from the node.
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  // 04. Insert in the beginning and again re-position the head variable correctly.
  unshift(val) {
    // Create the new node for the new value.
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    // Make new node next property points to the current head node.
    newNode.next = this.head;

    // Make new node the new head of the LL.
    this.head = newNode;
    this.length++;

    return this;
  }

  // 05. Get Method - return the value at the given index.
  // User will provide the node number and we've to return value at that node.
  // First node will be considered as on 0th index.
  get(index) {
    if (index > this.length || index < 0) return undefined;
    if (index == this.length) return undefined; // As per ChatGPT, null is a proper return value.
    // To explicity convey to the caller that at that index no node is present return undefined.

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // 06. Set Method - At the given index, we update the node value.
  set(val, index) {
    if (!this.head || index < 0 || index >= this.length) return undefined;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    // Update its value.
    current.val = val;
    return current;
  }

  // 07. Insert Method - Insert a node (value) at the given index.
  insert(val, index) {
    if (!this.head || index < 0 || index > this.length) return undefined;

    // Have to handle boundary conditions separately.
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    // Create a node for the given value.
    let newNode = new Node(val);

    let current = this.head;
    let prev = current;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    // Now we've pointers to the both nodes (predecessor and for the future successor)

    newNode.next = current;
    prev.next = newNode;

    this.length++;
    return this;
  }

  // 08. Delete Method - Remove/Delete a node at the given index.
  delete(index) {
    if (!this.head || index < 0 || index >= this.length) return undefined;

    // Dealing with the boundary values separately.
    // As bugs lies in the casual logic implementation for the boundary conditions.
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    // Logic for the usual deletion in the middle of the LL.
    let current = this.head;
    let prevNode = current;
    for (let i = 0; i < index; i++) {
      prevNode = current;
      current = current.next;
    }
    let removedNode = current;
    prevNode.next = current.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

// ---
// How to use it.
