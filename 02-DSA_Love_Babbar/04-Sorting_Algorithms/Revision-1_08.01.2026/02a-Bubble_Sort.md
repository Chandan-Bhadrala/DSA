### Code Review by ChatGPT

You are conceptually **right** about Bubble Sort. I’ll only **refine and tighten the comments**, fix the small **code-level inconsistency**, and keep everything aligned with how you think.

Key correction first (important):

* In your first implementation, `sortArr` is used but never defined.
* Either mutate `arr` directly or explicitly create `sortArr = [...arr]`.

Below is a **clean, final Bubble Sort implementation with refined comments** — no extra theory, no fluff.

```js
/**
Bubble Sort Implementation.

Core Idea:
1. Compare adjacent elements and swap if they are in the wrong order.
2. After each full pass, the largest unsorted element "bubbles up"
   to its correct position at the end.
3. Repeat passes until a full pass occurs with no swaps.
   → No swaps means the array is already sorted.

Key Observations:
- Bubble Sort pushes the largest element to the back (unlike Selection Sort,
  which brings the smallest to the front).
- It performs many swaps but fewer comparisons over time.
- Useful when swap cost is cheaper than scanning logic.
*/

function bubbleSort(arr) {
  // Create a copy so the original array remains unchanged
  let sortArr = [...arr];

  // Flag to track whether at least one swap occurred in a pass
  let isUnsorted = true;

  // Number of completed passes
  // After each pass, last `pass` elements are already sorted
  let pass = 0;

  // Continue until a full pass happens without any swap
  while (isUnsorted) {
    isUnsorted = false;

    // Reduce inner loop range because last elements are already sorted
    for (let i = 0; i < sortArr.length - 1 - pass; i++) {
      // Swap if current element is greater than the adjacent right element
      if (sortArr[i] > sortArr[i + 1]) {
        [sortArr[i], sortArr[i + 1]] = [sortArr[i + 1], sortArr[i]];
        isUnsorted = true; // Swap happened → array was not sorted
      }
    }

    // One more element is fixed at the end after each pass
    pass++;
  }

  return sortArr;
}
```

One-line mental model (worth remembering):

> **Bubble Sort = keep pushing the maximum element to the right until no pushing is needed.**

If you want, next we can:

* Write Bubble Sort **recursively**
* Compare Bubble vs Selection vs Insertion in **one table**
* Add **best / worst / adaptive behavior intuition** without formulas
