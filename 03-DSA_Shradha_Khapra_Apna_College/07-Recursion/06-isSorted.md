### Code review by the Gemini.

It looks like you've written a solid recursive implementation to check if an array is sorted in ascending order. Your logic correctly handles the base case (reaching the end of the array) and the recursive step (comparing the current element with the next).

Since you are using **JavaScript**, here is a quick breakdown of your code with a slight optimization and a few more test cases to ensure it's robust.

## Code Analysis

Your current code works well for non-empty arrays. However, it might throw an error or return an unexpected result if passed an empty array, because `arr.length - 1` would be `-1`.

### Optimized Version

```javascript
/**
 * Check if array is sorted or not using recursion.
 */

function isSorted(arr, n = 0) {
  // Base case: If array is empty or we've reached the last element
  if (arr.length <= 1 || n === arr.length - 1) {
    return true;
  }

  // If current element is greater than the next, it's not sorted
  if (arr[n] > arr[n + 1]) {
    return false;
  }

  // Recursive call for the next index
  return isSorted(arr, n + 1);
}

// --- Test Cases:
console.log("Is [3, 4, 5, 7, 9, 13] sorted?", isSorted([3, 4, 5, 7, 9, 13])); // true
console.log("Is [3, 4, 2, 7] sorted?", isSorted([3, 4, 2, 7]));             // false
console.log("Is [] sorted?", isSorted([]));                                 // true
console.log("Is [10] sorted?", isSorted([10]));                             // true

```

---

### Key Points to Remember

* **Time Complexity**: This is **O(n)** because, in the worst case (a sorted array), you visit every element once.
* **Space Complexity**: This is **O(n)** due to the recursive call stack. For very large arrays in JavaScript, a simple `for` loop is usually safer to avoid a "Maximum call stack size exceeded" error.
* **Edge Cases**: Always consider how your recursion handles an empty array `[]` or a single-element array `[1]`.

Would you like me to show you how to convert this into a more memory-efficient iterative version using a loop?

---

### Code review by the ChatGPT.

Nice clean recursive solution 👍
Let’s walk through it and then I’ll point out a couple of subtle things you should be aware of (DSA-wise).

What the function is doing

* You compare each element with the next one.
* If at any point `arr[n] > arr[n+1]`, the array is not sorted → return false.
* If you reach the last index safely, the array is sorted → return true.

Base case

```js
if (n == arr.length - 1) return true;
```

This means:

* You have successfully checked all adjacent pairs.
* No violation found till the end.
* So the array is sorted.

Recursive step

```js
if (arr[n] > arr[n + 1]) return false;
return isSorted(arr, n + 1);
```

* One comparison per recursive call.
* Move forward by one index.

Time and space complexity

* Time: O(n)
  One comparison for each element.
* Space: O(n)
  Due to recursion stack (important point for interviews).

Edge cases to keep in mind

1. Empty array

```js
isSorted([])
```

Your function will return true (because `arr.length - 1` becomes `-1` and condition matches immediately).
This is logically acceptable in DSA: an empty array is considered sorted.

2. Single element

```js
isSorted([5])
```

Returns true. Correct.

3. Duplicate values

```js
isSorted([1, 2, 2, 3])
```

Returns true.
Your logic checks `>` not `>=`, so duplicates are allowed. This matches “non-decreasing order”.

Why this problem is important in DSA
This is not about checking sorting. It’s about:

* Understanding recursion flow
* Identifying base case correctly
* Reducing problem size by 1 each time

Iterative version (just for comparison in your mind)

```js
function isSortedIterative(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
```

Same time complexity, but O(1) space.

DSA intuition takeaway

* Recursion = “check one step + trust recursion for the rest”
* Base case usually means “array size 1 or end reached”

Your solution is correct, readable, and exactly how this question is expected to be solved using recursion.
If you want, next we can convert this thinking into:

* recursive check for strictly increasing
* recursive check for rotated sorted array
* or linking this idea to divide-and-conquer patterns


