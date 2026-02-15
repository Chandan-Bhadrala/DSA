# Taught by Gemini.

To merge two sorted linked lists, the most efficient approach is to use a **dummy node** to act as the starting point and a **pointer** to build the new list by comparing the values from `list1` and `list2`.

Since you requested Hashnode-compatible Markdown and JavaScript specifically, here is the implementation:

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to hold the start of the merged list
    let dummy = new ListNode(0);
    let current = dummy;

    // Iterate while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If one list is exhausted, attach the remainder of the other list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the next node after dummy, which is the head of the merged list
    return dummy.next;
};

```

---

### **Key Logic Explained**

* **The Dummy Node:** This prevents us from having to write extra logic to handle the "head" of the list. We just return `dummy.next` at the end.
* **The Comparison:** We always pick the smaller value between `list1` and `list2` to ensure the merged list remains sorted.
* **The Cleanup:** Since the lists are already sorted, if one list runs out of nodes (becomes `null`), we can simply point the rest of our merged list to the remaining nodes of the other list.

### **Complexity**

* **Time Complexity:** O(n + m), where **n** and **m** are the lengths of the two lists. We visit every node exactly once.
* **Space Complexity:** O(1), as we are rearranging the existing nodes rather than creating new ones (excluding the dummy node).

Would you like me to show you how to solve this using a recursive approach instead?

---

# Taught by the ChatGPT.

This is the classic **merge two sorted linked lists** problem.

Core idea in one line:
👉 Always attach the smaller node to the result list and move that list’s pointer forward.

---

### Step-by-step thinking

1. If one list is empty → return the other.
2. Create a **dummy node** (important trick).
3. Keep a `current` pointer to build the merged list.
4. Compare `list1.val` and `list2.val`.
5. Attach the smaller node.
6. Move that list forward.
7. When one list ends, attach the remaining part of the other list.

Time complexity: **O(n + m)**
Space complexity: **O(1)** (no extra nodes created)

---

### Clean Implementation

```javascript
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};
```

---

### Why dummy node?

Without dummy:

* You must handle the head separately.
* Code becomes messy.

With dummy:

* You always attach to `current.next`.
* Return `dummy.next`.

---

### Pattern Recognition (Important for DSA)

This problem belongs to:

* **Two pointer pattern**
* **Sorted structure merge**
* Foundation of **Merge Sort**

---

### Web Dev Connection

This pattern is conceptually similar to:

* Merging two sorted query result sets.
* Merging paginated API results.
* Combining two sorted arrays before sending response.
* Merge phase in distributed data processing.

In backend systems, merging sorted streams efficiently is a very common task.

---

If you want, next we can:

* Convert this to recursive
* Dry run with an example
* Or connect it to merge sort implementation 🚀
