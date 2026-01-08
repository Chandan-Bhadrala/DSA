### Can you teach bubble sort?

Yes, of course. I will keep it **simple, intuitive, and DSA-oriented**.

Bubble sort is the most **movement-based** sorting algorithm.

Core idea in one line
Repeatedly compare adjacent elements and swap them if they are in the wrong order, so the largest element “bubbles” to the end.

How bubble sort thinks

* Look at two neighbors
* Fix their order
* Move forward
* Repeat passes until everything is sorted

Why the name “bubble”
After each pass, the **largest unsorted element moves to the end**, just like a bubble rising to the top.

Step-by-step example

Array: `[5, 1, 4, 2, 8]`

Pass 1

* Compare 5 and 1 → swap → `[1, 5, 4, 2, 8]`
* Compare 5 and 4 → swap → `[1, 4, 5, 2, 8]`
* Compare 5 and 2 → swap → `[1, 4, 2, 5, 8]`
* Compare 5 and 8 → no swap

Largest element `8` is now fixed at the end.

Pass 2

* Compare 1 and 4 → ok
* Compare 4 and 2 → swap → `[1, 2, 4, 5, 8]`
* Compare 4 and 5 → ok

Pass 3

* No swaps needed → array already sorted

Important observation

* After each pass, the **rightmost part becomes sorted**
* We never need to touch it again

Bubble sort in JavaScript

```js
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
```

Why `j < n - 1 - i`

* `-1` because we compare `j` with `j + 1`
* `-i` because the last `i` elements are already sorted

Very important optimization (early exit)

Bubble sort can be **optimized** by stopping early if no swaps happen.

```js
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}
```

Time complexity

* Best case: O(n) (already sorted, with optimization)
* Average case: O(n²)
* Worst case: O(n²)

Space complexity

* O(1) (in-place)

Key properties

* Stable sort
* In-place
* Very simple
* Inefficient for large inputs

Bubble sort vs selection sort (one-line difference)

* Selection sort selects the correct element and swaps once
* Bubble sort repeatedly swaps to push elements to their place

Interview invariant (say this confidently)
After each pass, the largest element among the unsorted part is placed at its correct position.

Next best step for you

* Write **bubble sort yourself without looking**
* Add the `swapped` optimization
* Then try **recursive bubble sort** (excellent recursion practice)

If you want, paste your bubble sort code next — I will review it line by line like we did for selection sort.
