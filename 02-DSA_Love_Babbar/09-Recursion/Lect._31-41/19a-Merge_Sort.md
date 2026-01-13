### Merge Sort taught by ChatGPT with console.log in the code.

Perfect idea. Running it yourself will lock this understanding permanently.

Below is **full, runnable JavaScript code** with **very clear console logs** that show:

• when a function is called
• when it hits base case
• when merge happens
• what gets returned

You can paste this directly into browser console or Node.js.

---

Full Merge Sort with call-stack tracing

```js
function merge(left, right, depth) {
  console.log(`${"  ".repeat(depth)}merge called with`, left, right);

  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  console.log(`${"  ".repeat(depth)}merge returns`, result);
  return result;
}

function mergeSort(arr, depth = 0) {
  console.log(`${"  ".repeat(depth)}mergeSort called with`, arr);

  if (arr.length <= 1) {
    console.log(`${"  ".repeat(depth)}base case return`, arr);
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left, depth + 1);
  let sortedRight = mergeSort(right, depth + 1);

  return merge(sortedLeft, sortedRight, depth);
}

// Run
let arr = [4, 1, 3, 2];
let sorted = mergeSort(arr);
console.log("Final sorted array:", sorted);
```

---

How to read the output

Indentation = call stack depth.

You will see:

• left side going deep first
• base cases returning immediately
• merge happening while returning
• right side starting only after left completes
• final merge at the root

---

What to observe carefully

1. mergeSort(left) completes fully
2. then mergeSort(right) runs
3. merge runs only after both are done
4. merges happen multiple times, not once

---

One mental checkpoint (very important)

If you comment out the `merge` logs and keep only `mergeSort` logs,
you will **see recursion depth**,
but merges only appear **on the way back**.

That confirms:
**Merge Sort works during stack unwinding.**

---

If you want next:
• Same trace without extra parameter
• Index-based merge sort
• Visual recursion tree
• Or compare this trace with Quick Sort’s trace
