### Code review and improvement by the Gemini.

It looks like you've got the core concept down—binary search is definitely the way to go for **O(log n)** complexity. However, the logic for shrinking the boundaries in your code is a bit tangled, particularly the `start + mid` calculations.

To make this clean and Hashnode-ready, we should focus on the **index parity** (even or odd). In a sorted array where every element has a pair except one, the pairs always start at an **even** index and end at an **odd** index (0-1, 2-3, 4-5) **until** we hit the unique element. After the unique element, that pattern shifts.

Here is the refined and logical approach:

### The Logic Refined

1. Check if `mid` is even or odd.
2. If `mid` is **even** and `arr[mid] === arr[mid + 1]`, the unique element is to the **right**.
3. If `mid` is **odd** and `arr[mid] === arr[mid - 1]`, the unique element is also to the **right**.
4. Otherwise, the unique element is to the **left** (or it's the `mid` itself).

---

### Optimized JavaScript Solution

```javascript
/**
 * Finds the single unique element in a sorted array.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function findUnique(arr) {
  let start = 0;
  let end = arr.length - 1;

  // Edge case: array with one element
  if (arr.length === 1) return arr[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Check if mid is the unique element
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    // Determine which side to search.
    // We want to check if we are in the "normal" part of the array
    // where pairs start at even indices.
    if (mid % 2 === 0) {
      // If mid is even, its pair should be at mid + 1
      if (arr[mid] === arr[mid + 1]) {
        start = mid + 2; // Move right
      } else {
        end = mid - 1; // Move left
      }
    } else {
      // If mid is odd, its pair should be at mid - 1
      if (arr[mid] === arr[mid - 1]) {
        start = mid + 1; // Move right
      } else {
        end = mid - 1; // Move left
      }
    }
  }

  return -1;
}

// --- Test Cases
console.log(findUnique([1, 1, 2, 2, 3, 4, 4, 5, 5])); // Output: 3
console.log(findUnique([1, 2, 2, 3, 3, 4, 4, 5, 5])); // Output: 1
console.log(findUnique([1, 1, 2, 2, 3, 3, 4, 4, 5])); // Output: 5

```

---

### Key Improvements

* **Parity Check:** Using `mid % 2 === 0` is much more intuitive than calculating `(start + mid)`. It directly tells us if we are on a "starting" index or an "ending" index of a potential pair.
* **Cleaner Conditionals:** By splitting the logic based on whether `mid` is even or odd, we remove the "logic less" forced `else` statement.
* **Boundary Handling:** Your initial `arr[mid] != arr[mid + 1]` check is great because JavaScript returns `undefined` for out-of-bounds indices, making it naturally resilient.

Would you like me to rewrite this using a **recursive** binary search approach instead?

---

### Q1) What is a standard solution for this problem please explain that code too.

The standard solution for this problem is based on the **Index Parity Property**.

In a sorted array where every number appears twice except for one, the pairs follow a specific pattern:

1. **Before the unique element:** The first instance of a pair is always at an **even** index, and the second instance is at an **odd** index (e.g., indices 0 and 1, 2 and 3).
2. **After the unique element:** The pattern shifts. The first instance of a pair is at an **odd** index, and the second instance is at an **even** index (e.g., indices 5 and 6, 7 and 8).

---

### The Standard Solution (JavaScript)

```javascript
function findUnique(arr) {
  let low = 0;
  let high = arr.length - 2; // We look at pairs, so high is length - 2

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if mid is even. If odd, make it even by subtracting 1.
    // This trick ensures we are always looking at the 'first' index of a pair.
    let firstIndex = (mid % 2 === 0) ? mid : mid - 1;

    if (arr[firstIndex] === arr[firstIndex + 1]) {
      // Pattern is normal: unique element must be on the right side
      low = firstIndex + 2;
    } else {
      // Pattern is broken: unique element is on the left side (or is this pair)
      high = firstIndex - 1;
    }
  }

  return arr[low];
}

// Example:
const nums = [1, 1, 2, 3, 3, 4, 4];
console.log(findUnique(nums)); // Output: 2

```

---

### Explanation of the Code

**1. The `high` boundary**
We set `high = arr.length - 2`. This is because we are comparing `arr[mid]` with `arr[mid + 1]`. By stopping at the second-to-last element, we avoid going out of bounds.

**2. The "Even Index" Trick**
Instead of writing multiple `if/else` statements for odd and even indices, we use:
`let firstIndex = (mid % 2 === 0) ? mid : mid - 1;`
This ensures that `firstIndex` is **always even**.

**3. The Comparison**

* **If `arr[firstIndex] === arr[firstIndex + 1]`**: This means the pair is correctly placed according to the "even-then-odd" rule. The disruption (the unique element) hasn't happened yet. So, we discard the left half: `low = firstIndex + 2`.
* **If `arr[firstIndex] !== arr[firstIndex + 1]`**: The pattern is broken. This means the unique element has already appeared somewhere to the left, shifting the current pair's indices. We search the left half: `high = firstIndex - 1`.

**4. The Result**
When the loop finishes, `low` will point exactly at the unique element because it’s the first index where the "even-then-odd" pattern fails.

### Why this is better

* **Time Complexity:** **O(log n)** because we halve the search space each time.
* **Space Complexity:** **O(1)** as we only use a few variables.
* **Readability:** It avoids complex boundary checks at the very start/end of the array.

Would you like to see how to implement this using the **Bitwise XOR operator** to see why the binary search is more efficient for sorted data?